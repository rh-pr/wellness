import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { seedSessions } from './seed/sessions';
import { seedUsers } from './seed/users';
import { seedAnonymous } from './seed/anonymous';
import { seedOauth } from './seed/oauth';
import { seedWebAuth } from './seed/webauth';
import { seedMoods } from './seed/mood';
import { seedGeneratedContent } from './seed/content';
import { seedTasks } from './seed/tasks';
import { seedFavorites } from './seed/favorites';
import { seedChat } from './seed/chat';
const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction([
    prisma.chatMessage.deleteMany(),
    prisma.chatSession.deleteMany(),
    prisma.favorite.deleteMany(),
    prisma.task.deleteMany(),
    prisma.generatedContent.deleteMany(),
    prisma.moodEntry.deleteMany(),
    prisma.webAuthnChallenge.deleteMany(),
    prisma.webAuthnCredential.deleteMany(),
    prisma.oauthAccount.deleteMany(),
    prisma.anonymousSession.deleteMany(),
    prisma.session.deleteMany(),
    prisma.settings.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  const users = await seedUsers(prisma);

  await seedSessions(prisma, users);

  await seedAnonymous(prisma, users);

  await seedOauth(prisma, users);

  await seedWebAuth(prisma, users);

  const mood = await seedMoods(prisma, users);

  const contents = await seedGeneratedContent(prisma, mood);

  await seedTasks(prisma, mood);

  await seedFavorites(prisma, users, contents);

  await seedChat(prisma, users);

  console.log(users.length)
  console.log('Done');
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
