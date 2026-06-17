import {
  PrismaClient,
  User,
  GeneratedContent,
} from '../../generated/prisma/client';

export async function seedFavorites(
  prisma: PrismaClient,
  users: User[],
  contents: GeneratedContent[],
) {
  await prisma.favorite.createMany({
    data: users.map((user, index) => ({
      userId: user.id,
      contentId: contents[index].id,
    })),
    skipDuplicates: true,
  });
}
