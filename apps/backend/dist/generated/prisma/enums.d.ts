export declare const UserRole: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const ContentType: {
    readonly QUOTE: "QUOTE";
    readonly MUSIC: "MUSIC";
    readonly BOOK: "BOOK";
    readonly MOVIE: "MOVIE";
    readonly HISTORICAL_FACT: "HISTORICAL_FACT";
    readonly SCIENTIFIC_FACT: "SCIENTIFIC_FACT";
};
export type ContentType = (typeof ContentType)[keyof typeof ContentType];
export declare const TaskCategory: {
    readonly FOR_WORLD: "FOR_WORLD";
    readonly FOR_SELF: "FOR_SELF";
};
export type TaskCategory = (typeof TaskCategory)[keyof typeof TaskCategory];
export declare const TaskStatus: {
    readonly PENDING: "PENDING";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly DONE: "DONE";
    readonly SKIPPED: "SKIPPED";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export declare const MessageRole: {
    readonly USER: "USER";
    readonly ASSISTANT: "ASSISTANT";
    readonly SYSTEM: "SYSTEM";
};
export type MessageRole = (typeof MessageRole)[keyof typeof MessageRole];
export declare const AssistantProvider: {
    readonly OPENAI: "OPENAI";
    readonly CLAUDE: "CLAUDE";
    readonly GEMINI: "GEMINI";
};
export type AssistantProvider = (typeof AssistantProvider)[keyof typeof AssistantProvider];
export declare const MoodType: {
    readonly HAPPY: "HAPPY";
    readonly SAD: "SAD";
    readonly ANXIOUS: "ANXIOUS";
    readonly CALM: "CALM";
    readonly EXCITED: "EXCITED";
};
export type MoodType = (typeof MoodType)[keyof typeof MoodType];
