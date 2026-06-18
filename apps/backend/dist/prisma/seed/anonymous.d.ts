import { PrismaClient, User } from '../../generated/prisma/client';
export declare function seedAnonymous(prisma: PrismaClient, users: User[]): Promise<void>;
