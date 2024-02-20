'use client'

import { useForm } from 'react-hook-form'

import { useGetQuizById, useUpdateQuiz } from '@/hooks/use-quiz'
import { toBase64 } from '@/lib/helpers/global-helpers'
import { CreateQuizSchema, TCreateQuiz } from '@/lib/validation/quiz-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { useEffect } from 'react'
import { Loading } from '../loading'
import { QuizDetailsFields } from './quiz-details-fields'
import { QuizItemFields } from './quiz-item-fields'

interface EditQuizFormProps {
	quizId: number
}

export const EditQuizForm: React.FC<EditQuizFormProps> = ({ quizId }) => {
	const quiz = useGetQuizById(quizId)
	const updateQuiz = useUpdateQuiz(quizId)

	const form = useForm<TCreateQuiz>({
		resolver: zodResolver(CreateQuizSchema),
	})

	useEffect(() => {
		if (quiz.isSuccess) {
			form.setValue('title', quiz.data.title)
			form.setValue('description', quiz.data.description)
			form.setValue('isVisible', quiz.data.isVisible)
			form.setValue(
				'questions',
				quiz.data?.questions?.map((question) => {
					const { id, picture: pictureUrl, ...rest } = question
					const options = rest.options.map((option) => {
						const { id, ...rest } = option
						return rest
					})
					return {
						...rest,
						options,
						picture: question.picture || null,
					}
				}) || [],
			)
		}
	}, [quiz.isSuccess, quiz.data, form])

	if (quiz.isLoading) return <Loading />

	if (!quiz.isSuccess) throw new Error()

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

		updateQuiz.mutate({
			id: quizId,
			data: { ...data, questions: questionsWithBase64Pictures },
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
			>
				Edit Quiz
			</Button>
		</form>
	)
}
