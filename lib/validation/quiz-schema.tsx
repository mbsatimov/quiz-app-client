import { z } from 'zod'

const datetimeRegex = new RegExp(
	/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}\s(2[0-3]|[01][0-9]):([0-5][0-9])$/
)

const timeRegex = new RegExp(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)

const MAX_FILE_SIZE = 2000000

const ACCEPTED_IMAGE_TYPES = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/webp',
]

export const ImageSchema = z
	.any()
	.refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 2MB.`)
	.refine(
		(file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
		'Only .jpg, .jpeg, .png and .webp formats are supported.'
	)
	.optional()

export const CreateQuizSchema = z.object({
	title: z.string().refine((val) => val.length > 0),
	description: z.string().optional(),
	startDateTime: z
		.string()
		.refine((val) => val.length === 0 || datetimeRegex.test(val), {
			message: 'Invalid date',
		}),
	endDateTime: z
		.string()
		.refine((val) => val.length === 0 || datetimeRegex.test(val), {
			message: 'Invalid date',
		}),
	duration: z
		.string()
		.refine((val) => val.length === 0 || timeRegex.test(val), {
			message: 'Invalid time',
		}),
	quizItems: z.array(
		z.object({
			image: ImageSchema,
			question: z.string().refine((val) => val.length > 0),
			options: z
				.array(
					z.object({
						option: z.string().refine((val) => val.length > 0),
						isCorrect: z.boolean(),
					})
				)
				.refine((val) => val.some((item) => item.isCorrect), {
					message: 'At least one option must be selected.',
				}),
		})
	),
})

export type TCreateQuizSchema = z.infer<typeof CreateQuizSchema>