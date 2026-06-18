"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedChat = seedChat;
const client_1 = require("../../generated/prisma/client");
const faker_1 = require("@faker-js/faker");
async function seedChat(prisma, users) {
    for (const user of users) {
        const session = await prisma.chatSession.create({
            data: {
                userId: user.id,
                providerId: faker_1.faker.helpers.arrayElement([
                    client_1.AssistantProvider.CLAUDE,
                    client_1.AssistantProvider.GEMINI,
                    client_1.AssistantProvider.OPENAI,
                ]),
            },
        });
        await prisma.chatMessage.createMany({
            data: Array.from({ length: 20 }).map(() => ({
                chatSessionId: session.id,
                role: faker_1.faker.helpers.arrayElement([
                    client_1.MessageRole.ASSISTANT,
                    client_1.MessageRole.SYSTEM,
                    client_1.MessageRole.USER,
                ]),
                content: faker_1.faker.lorem.paragraph(),
            })),
        });
    }
}
//# sourceMappingURL=chat.js.map