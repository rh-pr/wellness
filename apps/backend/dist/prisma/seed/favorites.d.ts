import { PrismaClient, User, GeneratedContent } from '../../generated/prisma/client';
export declare function seedFavorites(prisma: PrismaClient, users: User[], contents: GeneratedContent[]): Promise<void>;
