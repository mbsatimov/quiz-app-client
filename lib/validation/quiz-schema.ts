import { z } from 'zod'

const datetimeRegex = new RegExp(
	/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}\s(2[0-3]|[01][0-9]):([0-5][0-9])$/,
)

const timeRegex = new RegExp(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)

const MAX_FILE_SIZE = 2000000

const ACCEPTED_IMAGE_TYPES = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/webp',
]

export const CreateQuizSchema = z.object({
	title: z.string().refine((val) => val.length > 0),
	description: z.string().nullable(),
	isVisible: z.boolean().default(false),
	questions: z
		.array(
			z.object({
				pictureUrl: z.custom<File>().nullable(),
				question: z.string().refine((val) => val.length > 0),
				options: z
					.array(
						z.object({
							label: z.string().refine((val) => val.length > 0),
							isCorrect: z.boolean(),
						}),
					)
					.refine((val) => val.some((item) => item.isCorrect), {
						message: 'At least one option must be selected.',
					}),
			}),
		)
		.refine((val) => val.length > 0, {
			message: 'At least one question is required.',
		}),
})

export type TCreateQuiz = z.infer<typeof CreateQuizSchema>
