import { PrismaClient, User } from '../../generated/prisma/client';

export async function seedOauth(prisma: PrismaClient, users: User[]) {
  for (const user of users.slice(5, 15)) {
    await prisma.oauthAccount.create({
      data: {
        userId: user.id,
        provider: 'google',
        providerAccountId: crypto.randomUUID(),
      },
    });
  }
}
