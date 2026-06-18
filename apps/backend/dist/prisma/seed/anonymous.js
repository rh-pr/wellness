"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAnonymous = seedAnonymous;
const faker_1 = require("@faker-js/faker");
async function seedAnonymous(prisma, users) {
    for (const user of users.slice(0, 10)) {
        await prisma.anonymousSession.create({
            data: {
                deviceId: faker_1.faker.string.ulid(),
                userId: user.id,
            },
        });
    }
}
//# sourceMappingURL=anonymous.js.map