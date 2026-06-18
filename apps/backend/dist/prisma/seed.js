"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("../generated/prisma/client");
const sessions_1 = require("./seed/sessions");
const users_1 = require("./seed/users");
const anonymous_1 = require("./seed/anonymous");
const oauth_1 = require("./seed/oauth");
const webauth_1 = require("./seed/webauth");
const mood_1 = require("./seed/mood");
const content_1 = require("./seed/content");
const tasks_1 = require("./seed/tasks");
const favorites_1 = require("./seed/favorites");
const chat_1 = require("./seed/chat");
const prisma = new client_1.PrismaClient();
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
    const users = await (0, users_1.seedUsers)(prisma);
    await (0, sessions_1.seedSessions)(prisma, users);
    await (0, anonymous_1.seedAnonymous)(prisma, users);
    await (0, oauth_1.seedOauth)(prisma, users);
    await (0, webauth_1.seedWebAuth)(prisma, users);
    const mood = await (0, mood_1.seedMoods)(prisma, users);
    const contents = await (0, content_1.seedGeneratedContent)(prisma, mood);
    await (0, tasks_1.seedTasks)(prisma, mood);
    await (0, favorites_1.seedFavorites)(prisma, users, contents);
    await (0, chat_1.seedChat)(prisma, users);
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
//# sourceMappingURL=seed.js.map