'use client'

import { useForm } from 'react-hook-form'

import { realisticConfetti } from '@/lib/canvas-confetti'
import { CreateQuizSchema, TCreateQuiz } from '@/lib/validation/quiz-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { toast } from 'sonner'
import { QuizDetailsFields } from './quiz-details-fields'
import { QuizItemFields } from './quiz-item-fields'

export const CreateQuizForm = () => {
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

	const onSubmit = (data: TCreateQuiz) => {
		console.log(data)
		toast.success('Quiz created successfully')
		realisticConfetti()
	}

	console.log(form.getValues())

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
			>
				Create Quiz
			</Button>
		</form>
	)
}
