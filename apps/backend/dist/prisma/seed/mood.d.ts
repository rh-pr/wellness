import { MoodType, PrismaClient, User } from '../../generated/prisma/client';
export declare function seedMoods(prisma: PrismaClient, users: User[]): Promise<{
    id: string;
    createdAt: Date;
    userId: string;
    mood: MoodType;
    intensity: number | null;
    emoji: string | null;
    note: string | null;
}[]>;
