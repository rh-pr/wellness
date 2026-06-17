import {
  AssistantProvider,
  PrismaClient,
  User,
  UserRole,
} from '../../generated/prisma/client';

import { faker } from '@faker-js/faker';

export async function seedUsers(prisma: PrismaClient) {
  const users: User[] = [];
  for (let i = 0; i < 30; i++) {
    users.push(
      await prisma.user.create({
        data: {
          username: faker.internet.username(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          emailVerified: faker.datatype.boolean(),
          passwordHash: faker.string.uuid(),
          avatarUrl: faker.image.avatar(),
          phoneNumber: faker.phone.number(),

          role: faker.helpers.arrayElement([UserRole.USER, UserRole.ADMIN]),

          settings: {
            create: {
              theme: faker.helpers.arrayElement(['light', 'dark']),

              language: faker.helpers.arrayElement([
                'en',
                'uk',
                'fr',
                'de',
                'es',
                'kr',
                'cn',
              ]),

              assistantId: faker.helpers.arrayElement([
                AssistantProvider.OPENAI,
                AssistantProvider.CLAUDE,
                AssistantProvider.GEMINI,
              ]),

              notificationsEnabled: faker.datatype.boolean(),
            },
          },
        },
      }),
    );
  }
  return users;
}
