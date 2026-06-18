import { PrismaClient, User } from '../../generated/prisma/client';
export declare function seedOauth(prisma: PrismaClient, users: User[]): Promise<void>;
