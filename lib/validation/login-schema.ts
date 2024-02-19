import { z } from 'zod'

export const LoginSchema = z.object({
	username: z
		.string()
		.refine((val) => val.length > 0, { message: 'Login is required.' }),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters.')
		.refine((val) => val.length > 0, { message: 'Password is required.' }),
})

export type TLogin = z.infer<typeof LoginSchema>
