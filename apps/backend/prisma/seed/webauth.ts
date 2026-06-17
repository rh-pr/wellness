import { PrismaClient, User } from '../../generated/prisma/client';
import { faker } from '@faker-js/faker';

export async function seedWebAuth(prisma: PrismaClient, users: User[]) {
  for (const user of users) {
    await prisma.webAuthnCredential.create({
      data: {
        userId: user.id,
        credentialId: faker.string.ulid(),
        publicKey: faker.string.alphanumeric(100),
      },
    });
    await prisma.webAuthnChallenge.create({
      data: {
        userId: user.id,
        type: faker.helpers.arrayElement(['login', 'registration']),
        challenge: faker.string.alphanumeric(100),
      },
    });
  }
}
