import { PrismaClient, MoodEntry } from '../../generated/prisma/client';
export declare function seedTasks(prisma: PrismaClient, moods: MoodEntry[]): Promise<void>;
