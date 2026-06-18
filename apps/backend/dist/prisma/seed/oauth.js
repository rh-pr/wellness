"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedOauth = seedOauth;
async function seedOauth(prisma, users) {
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
//# sourceMappingURL=oauth.js.map