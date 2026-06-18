"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodType = exports.AssistantProvider = exports.MessageRole = exports.TaskStatus = exports.TaskCategory = exports.ContentType = exports.UserRole = void 0;
exports.UserRole = {
    USER: 'USER',
    ADMIN: 'ADMIN'
};
exports.ContentType = {
    QUOTE: 'QUOTE',
    MUSIC: 'MUSIC',
    BOOK: 'BOOK',
    MOVIE: 'MOVIE',
    HISTORICAL_FACT: 'HISTORICAL_FACT',
    SCIENTIFIC_FACT: 'SCIENTIFIC_FACT'
};
exports.TaskCategory = {
    FOR_WORLD: 'FOR_WORLD',
    FOR_SELF: 'FOR_SELF'
};
exports.TaskStatus = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
    SKIPPED: 'SKIPPED'
};
exports.MessageRole = {
    USER: 'USER',
    ASSISTANT: 'ASSISTANT',
    SYSTEM: 'SYSTEM'
};
exports.AssistantProvider = {
    OPENAI: 'OPENAI',
    CLAUDE: 'CLAUDE',
    GEMINI: 'GEMINI'
};
exports.MoodType = {
    HAPPY: 'HAPPY',
    SAD: 'SAD',
    ANXIOUS: 'ANXIOUS',
    CALM: 'CALM',
    EXCITED: 'EXCITED'
};
//# sourceMappingURL=enums.js.map