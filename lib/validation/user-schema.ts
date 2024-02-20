import { z } from 'zod'

export const CreateUserSchema = z
	.object({
		firstName: z.string().refine((val) => val.length > 0),
		lastName: z.string().refine((val) => val.length > 0),
		username: z.string().refine((val) => val.length > 0),
		password: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters.' })
			.refine((val) => val.length > 0, {
				message: 'Password is required.',
			}),
		confirmPassword: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters.' })
			.refine((val) => val.length > 0, {
				message: 'Password is required.',
			}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match.',
		path: ['confirmPassword'],
	})

export type TCreateUser = z.infer<typeof CreateUserSchema>
