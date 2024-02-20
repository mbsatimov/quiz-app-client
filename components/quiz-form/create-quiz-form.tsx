'use client'

import { useForm } from 'react-hook-form'

import { useCreateQuiz } from '@/hooks/use-quiz'
import { CreateQuizSchema, TCreateQuiz } from '@/lib/validation/quiz-schema'
import { zodResolver } from '@hookform/resolvers/zod'

import { toBase64 } from '@/lib/helpers/global-helpers'
import { Button, Divider } from '@nextui-org/react'
import { QuizDetailsFields } from './quiz-details-fields'
import { QuizItemFields } from './quiz-item-fields'
import { redirect } from 'next/navigation'
import { PAGES } from '@/const/routes'

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

	const onSubmit = async (data: TCreateQuiz) => {
		const { questions } = data

		const questionsWithBase64Pictures = await Promise.all(
			questions.map(async (question) => {
				let picture: string | null = null
				if (question.picture && typeof question.picture !== 'string') {
					picture = (await toBase64(question.picture)) as string
				}
				return {
					...question,
					picture: picture,
				}
			}),
		)

		createQuiz
			.mutateAsync({ ...data, questions: questionsWithBase64Pictures })
			.then(() => {
				form.reset()
				redirect(PAGES.TEACHER_QUIZZES)
			})
	}

	return (
		<form
			className='space-y-6'
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<QuizDetailsFields form={form} />
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
