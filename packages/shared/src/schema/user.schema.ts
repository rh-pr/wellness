import { z } from 'zod';
import { email } from 'zod/v4';

export const CreateUserSchema = z
.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(8),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;