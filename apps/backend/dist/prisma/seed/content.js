"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedGeneratedContent = seedGeneratedContent;
const client_1 = require("../../generated/prisma/client");
const faker_1 = require("@faker-js/faker");
const content_1 = require("../../src/common/types/content");
async function seedGeneratedContent(prisma, moods) {
    const data = [];
    for (const mood of moods) {
        const content = generatedContent();
        data.push(await prisma.generatedContent.create({
            data: {
                userId: mood.userId,
                moodEntryId: mood.id,
                type: content.type,
                content: content,
                languageCode: 'en',
                providerId: faker_1.faker.helpers.arrayElement([
                    client_1.AssistantProvider.CLAUDE,
                    client_1.AssistantProvider.GEMINI,
                    client_1.AssistantProvider.OPENAI,
                ]),
            },
        }));
    }
    return data;
}
const generatedContent = () => {
    const type = faker_1.faker.helpers.arrayElement(Object.values(content_1.ContentType));
    switch (type) {
        case content_1.ContentType.QUOTE:
            return {
                type,
                text: faker_1.faker.lorem.sentence(),
                author: faker_1.faker.person.fullName(),
            };
        case content_1.ContentType.MUSIC:
            return {
                type,
                title: faker_1.faker.music.songName?.() ?? faker_1.faker.lorem.words(),
                artist: faker_1.faker.person.fullName(),
                durationSec: faker_1.faker.number.int({ min: 120, max: 300 }),
                url: faker_1.faker.internet.url(),
            };
        case content_1.ContentType.BOOK:
            return {
                type,
                title: faker_1.faker.lorem.words(),
                author: faker_1.faker.person.fullName(),
                description: faker_1.faker.lorem.paragraph(),
            };
        case content_1.ContentType.MOVIE:
            return {
                type,
                title: faker_1.faker.lorem.words(),
                director: faker_1.faker.person.fullName(),
                year: faker_1.faker.number.int({ min: 1980, max: 2024 }),
            };
        case content_1.ContentType.HISTORICAL_FACT:
            return {
                type,
                title: faker_1.faker.lorem.words(),
                date: faker_1.faker.date.past().toISOString(),
                description: faker_1.faker.lorem.paragraph(),
            };
        case content_1.ContentType.SCIENTIFIC_FACT:
            return {
                type,
                title: faker_1.faker.lorem.words(),
                field: 'physics',
                description: faker_1.faker.lorem.paragraph(),
            };
    }
};
//# sourceMappingURL=content.js.map