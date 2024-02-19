'use client'

import { useForm } from 'react-hook-form'

import { useCreateQuiz } from '@/hooks/use-quiz'
import { CreateQuizSchema, TCreateQuiz } from '@/lib/validation/quiz-schema'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Divider } from '@nextui-org/react'
import { QuizDetailsFields } from './quiz-details-fields'
import { QuizItemFields } from './quiz-item-fields'

export const CreateQuizForm = () => {
	const createQuiz = useCreateQuiz()

	const form = useForm<TCreateQuiz>({
		resolver: zodResolver(CreateQuizSchema),
		defaultValues: {
			questions: [
				{
					question: '',
					options: [
						{ isCorrect: false, label: '' },
						{ isCorrect: false, label: '' },
					],
				},
			],
		},
	})

	const toBase64 = (file: File) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()

			fileReader.readAsDataURL(file)

			fileReader.onload = () => {
				resolve(fileReader.result)
			}

			fileReader.onerror = (error) => {
				reject(error)
			}
		})
	}

	const onSubmit = async (data: TCreateQuiz) => {
		const { questions } = data

		const questionsWithBase64Pictures = await Promise.all(
			questions.map(async (question) => {
				let picture: string | null = null
				if (question.pictureUrl) {
					picture = (await toBase64(question.pictureUrl)) as string
				}
				return {
					...question,
					pictureUrl: picture,
				}
			}),
		)

		createQuiz.mutate({ ...data, questions: questionsWithBase64Pictures })
	}

	return (
		<form
			className='space-y-6'
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<QuizDetailsFields
				errors={form.formState.errors}
				form={form}
			/>
			<Divider className='my-4 bg-blue-500' />
			<QuizItemFields form={form} />
			<Button
				type='submit'
				disableRipple
				color='primary'
				size='lg'
				variant='shadow'
				className='w-full'
				isLoading={createQuiz.isPending}
			>
				Create Quiz
			</Button>
		</form>
	)
}
