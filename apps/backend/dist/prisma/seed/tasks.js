"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedTasks = seedTasks;
const client_1 = require("../../generated/prisma/client");
const faker_1 = require("@faker-js/faker");
async function seedTasks(prisma, moods) {
    for (const mood of moods) {
        await prisma.task.createMany({
            data: Array.from({ length: 3 }).map(() => ({
                userId: mood.userId,
                moodEntryId: mood.id,
                category: faker_1.faker.helpers.arrayElement(Object.values(client_1.TaskCategory)),
                title: faker_1.faker.lorem.words(),
                description: faker_1.faker.lorem.sentence(),
            })),
        });
    }
}
//# sourceMappingURL=tasks.js.map