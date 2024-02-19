'use client'

import { useForm } from 'react-hook-form'

import { useGetQuizById, useGetQuizQuestionsById } from '@/hooks/use-quiz'
import { realisticConfetti } from '@/lib/helpers/canvas-confetti'
import { CreateQuizSchema, TCreateQuiz } from '@/lib/validation/quiz-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { QuizDetailsFields } from './quiz-details-fields'
import { QuizItemFields } from './quiz-item-fields'

interface EditQuizFormProps {
	quizId: number
}

export const EditQuizForm: React.FC<EditQuizFormProps> = ({ quizId }) => {
	const quiz = useGetQuizById(quizId)

	const form = useForm<TCreateQuiz>({
		resolver: zodResolver(CreateQuizSchema),
		defaultValues: {
			title: quiz.data?.title,
			description: quiz.data?.description,
			isVisible: quiz.data?.isVisible,
			questions:
				quiz.data?.questions.map((question) => {
					const { id, ...rest } = question
					const options = rest.options.map((option) => {
						const { id, ...rest } = option
						return rest
					})
					return {
						...rest,
						options,
					}
				}) || [],
		},
	})

	if (quiz.isLoading) return <Loader2 className='h-6 w-6 animate-spin' />

	if (!quiz.isSuccess) return <div>Something went wrong. Please try again</div>

	const onSubmit = (data: TCreateQuiz) => {
		console.log(data)
		toast.success('Quiz created successfully')
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
				onPress={realisticConfetti}
			>
				Edit Quiz
			</Button>
		</form>
	)
}
