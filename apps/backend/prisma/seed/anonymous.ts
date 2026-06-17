import { PrismaClient, User } from '../../generated/prisma/client';
import { faker } from '@faker-js/faker';

export async function seedAnonymous(prisma: PrismaClient, users: User[]) {
  for (const user of users.slice(0, 10)) {
    await prisma.anonymousSession.create({
      data: {
        deviceId: faker.string.ulid(),
        userId: user.id,
      },
    });
  }
}
