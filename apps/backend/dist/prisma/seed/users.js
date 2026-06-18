"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = seedUsers;
const client_1 = require("../../generated/prisma/client");
const faker_1 = require("@faker-js/faker");
async function seedUsers(prisma) {
    const users = [];
    for (let i = 0; i < 30; i++) {
        users.push(await prisma.user.create({
            data: {
                username: faker_1.faker.internet.username(),
                firstName: faker_1.faker.person.firstName(),
                lastName: faker_1.faker.person.lastName(),
                email: faker_1.faker.internet.email(),
                emailVerified: faker_1.faker.datatype.boolean(),
                passwordHash: faker_1.faker.string.uuid(),
                avatarUrl: faker_1.faker.image.avatar(),
                phoneNumber: faker_1.faker.phone.number(),
                role: faker_1.faker.helpers.arrayElement([client_1.UserRole.USER, client_1.UserRole.ADMIN]),
                settings: {
                    create: {
                        theme: faker_1.faker.helpers.arrayElement(['light', 'dark']),
                        language: faker_1.faker.helpers.arrayElement([
                            'en',
                            'uk',
                            'fr',
                            'de',
                            'es',
                            'kr',
                            'cn',
                        ]),
                        assistantId: faker_1.faker.helpers.arrayElement([
                            client_1.AssistantProvider.OPENAI,
                            client_1.AssistantProvider.CLAUDE,
                            client_1.AssistantProvider.GEMINI,
                        ]),
                        notificationsEnabled: faker_1.faker.datatype.boolean(),
                    },
                },
            },
        }));
    }
    return users;
}
//# sourceMappingURL=users.js.map