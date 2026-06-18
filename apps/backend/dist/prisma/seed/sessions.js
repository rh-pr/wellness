"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSessions = seedSessions;
const faker_1 = require("@faker-js/faker");
async function seedSessions(prisma, users) {
    for (const user of users) {
        const session = Array.from({ length: 2 }).map(() => ({
            userId: user.id,
            refreshTokenHash: faker_1.faker.string.uuid(),
            ipAddress: faker_1.faker.internet.ip(),
            revoked: false,
        }));
        await prisma.session.createMany({ data: session });
    }
}
//# sourceMappingURL=sessions.js.map