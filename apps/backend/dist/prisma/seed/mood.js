"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedMoods = seedMoods;
const client_1 = require("../../generated/prisma/client");
const faker_1 = require("@faker-js/faker");
async function seedMoods(prisma, users) {
    return Promise.all(users.flatMap((user) => Array.from({ length: 5 }, () => prisma.moodEntry.create({
        data: {
            userId: user.id,
            mood: faker_1.faker.helpers.arrayElement([
                client_1.MoodType.ANXIOUS,
                client_1.MoodType.CALM,
                client_1.MoodType.EXCITED,
                client_1.MoodType.HAPPY,
                client_1.MoodType.SAD,
            ]),
            intensity: faker_1.faker.number.int({
                min: 1,
                max: 5,
            }),
            note: faker_1.faker.lorem.sentence(),
        },
    }))));
}
//# sourceMappingURL=mood.js.map