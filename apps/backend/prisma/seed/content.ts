import {
  AssistantProvider,
  GeneratedContent,
  MoodEntry,
  PrismaClient,
} from '../../generated/prisma/client';

import { faker } from '@faker-js/faker';
import { GeneratedContentPayload, ContentType } from 'src/common/types/content';

export async function seedGeneratedContent(
  prisma: PrismaClient,
  moods: MoodEntry[],
) {
  const data: GeneratedContent[] = [];

  for (const mood of moods) {
    const content = generatedContent();
    data.push(
      await prisma.generatedContent.create({
        data: {
          userId: mood.userId,
          moodEntryId: mood.id,
          type: content.type,
          content: content,
          languageCode: 'en',
          providerId: faker.helpers.arrayElement([
            AssistantProvider.CLAUDE,
            AssistantProvider.GEMINI,
            AssistantProvider.OPENAI,
          ]),
        },
      }),
    );
  }

  return data;
}

const generatedContent = (): GeneratedContentPayload => {
  const type = faker.helpers.arrayElement(Object.values(ContentType));

  switch (type) {
    case ContentType.QUOTE:
      return {
        type,
        text: faker.lorem.sentence(),
        author: faker.person.fullName(),
      };

    case ContentType.MUSIC:
      return {
        type,
        title: faker.music.songName?.() ?? faker.lorem.words(),
        artist: faker.person.fullName(),
        durationSec: faker.number.int({ min: 120, max: 300 }),
        url: faker.internet.url(),
      };

    case ContentType.BOOK:
      return {
        type,
        title: faker.lorem.words(),
        author: faker.person.fullName(),
        description: faker.lorem.paragraph(),
      };

    case ContentType.MOVIE:
      return {
        type,
        title: faker.lorem.words(),
        director: faker.person.fullName(),
        year: faker.number.int({ min: 1980, max: 2024 }),
      };

    case ContentType.HISTORICAL_FACT:
      return {
        type,
        title: faker.lorem.words(),
        date: faker.date.past().toISOString(),
        description: faker.lorem.paragraph(),
      };

    case ContentType.SCIENTIFIC_FACT:
      return {
        type,
        title: faker.lorem.words(),
        field: 'physics',
        description: faker.lorem.paragraph(),
      };
  }
};
