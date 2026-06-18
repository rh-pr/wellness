import { MoodEntry, PrismaClient } from '../../generated/prisma/client';
export declare function seedGeneratedContent(prisma: PrismaClient, moods: MoodEntry[]): Promise<{
    id: string;
    createdAt: Date;
    userId: string;
    type: import("../../generated/prisma/enums").ContentType;
    moodEntryId: string | null;
    content: import("@prisma/client/runtime/library").JsonValue;
    languageCode: string;
    providerId: string;
}[]>;
