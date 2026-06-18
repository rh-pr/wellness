import { PrismaClient, User } from '../../generated/prisma/client';
export declare function seedSessions(prisma: PrismaClient, users: User[]): Promise<void>;
