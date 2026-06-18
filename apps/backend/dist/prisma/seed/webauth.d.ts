import { PrismaClient, User } from '../../generated/prisma/client';
export declare function seedWebAuth(prisma: PrismaClient, users: User[]): Promise<void>;
