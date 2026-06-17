import { PrismaClient, User } from '../../generated/prisma/client';

import { faker } from '@faker-js/faker';

export async function seedSessions(prisma: PrismaClient, users: User[]) {
  for (const user of users) {
    const session = Array.from({ length: 2 }).map(() => ({
      userId: user.id,
      refreshTokenHash: faker.string.uuid(),
      ipAddress: faker.internet.ip(),
      revoked: false,
    }));
    await prisma.session.createMany({ data: session });
  }
}
