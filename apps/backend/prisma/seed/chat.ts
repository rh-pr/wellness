import { AssistantProvider, MessageRole, PrismaClient, User } from '../../generated/prisma/client';
import { faker } from '@faker-js/faker';

export async function seedChat(prisma: PrismaClient, users: User[]) {
  for (const user of users) {
    const session = await prisma.chatSession.create({
      data: {
        userId: user.id,
        providerId: faker.helpers.arrayElement([
          AssistantProvider.CLAUDE,
          AssistantProvider.GEMINI,
          AssistantProvider.OPENAI,
        ]),
      },
    });

    await prisma.chatMessage.createMany({
      data: Array.from({ length: 20 }).map(() => ({
        chatSessionId: session.id,
        role: faker.helpers.arrayElement([
          MessageRole.ASSISTANT,
          MessageRole.SYSTEM,
          MessageRole.USER,
        ]),
        content: faker.lorem.paragraph(),
      })),
    });
  }
}
