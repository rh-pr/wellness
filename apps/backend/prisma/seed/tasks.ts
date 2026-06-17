import {
  PrismaClient,
  MoodEntry,
  TaskCategory,
} from '../../generated/prisma/client';
import { faker } from '@faker-js/faker';

export async function seedTasks(prisma: PrismaClient, moods: MoodEntry[]) {
  for (const mood of moods) {
    await prisma.task.createMany({
      data: Array.from({ length: 3 }).map(() => ({
        userId: mood.userId,
        moodEntryId: mood.id,
        category: faker.helpers.arrayElement(Object.values(TaskCategory)),
        title: faker.lorem.words(),
        description: faker.lorem.sentence(),
      })),
    });
  }
}
