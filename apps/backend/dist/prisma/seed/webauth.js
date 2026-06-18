"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedWebAuth = seedWebAuth;
const faker_1 = require("@faker-js/faker");
async function seedWebAuth(prisma, users) {
    for (const user of users) {
        await prisma.webAuthnCredential.create({
            data: {
                userId: user.id,
                credentialId: faker_1.faker.string.ulid(),
                publicKey: faker_1.faker.string.alphanumeric(100),
            },
        });
        await prisma.webAuthnChallenge.create({
            data: {
                userId: user.id,
                type: faker_1.faker.helpers.arrayElement(['login', 'registration']),
                challenge: faker_1.faker.string.alphanumeric(100),
            },
        });
    }
}
//# sourceMappingURL=webauth.js.map