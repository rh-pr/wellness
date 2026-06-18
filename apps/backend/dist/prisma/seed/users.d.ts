import { PrismaClient, UserRole } from '../../generated/prisma/client';
export declare function seedUsers(prisma: PrismaClient): Promise<{
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    emailVerified: boolean;
    passwordHash: string | null;
    avatarUrl: string | null;
    phoneNumber: string | null;
    role: UserRole;
    onboardingShownAt: Date | null;
    lastSeenAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}[]>;
