import { MoodType, PrismaClient, User } from '../../generated/prisma/client';
import { faker } from '@faker-js/faker';

export async function seedMoods(prisma: PrismaClient, users: User[]) {
  return Promise.all(
    users.flatMap((user) =>
      Array.from({ length: 5 }, () =>
        prisma.moodEntry.create({
          data: {
            userId: user.id,
            mood: faker.helpers.arrayElement([
              MoodType.ANXIOUS,
              MoodType.CALM,
              MoodType.EXCITED,
              MoodType.HAPPY,
              MoodType.SAD,
            ]),
            intensity: faker.number.int({
              min: 1,
              max: 5,
            }),
            note: faker.lorem.sentence(),
          },
        }),
      ),
    ),
  );
}
