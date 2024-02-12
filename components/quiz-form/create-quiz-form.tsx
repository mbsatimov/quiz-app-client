'use client'

import { useForm } from 'react-hook-form'

import { realisticConfetti } from '@/lib/canvas-confetti'
import {
	CreateQuizSchema,
	TCreateQuizSchema,
} from '@/lib/validation/quiz-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { toast } from 'sonner'
import { QuizDetailsFields } from './quiz-details-fields'
import { QuizItemFields } from './quiz-item-fields'

export const CreateQuizForm = () => {
	const form = useForm<TCreateQuizSchema>({
		resolver: zodResolver(CreateQuizSchema),
		defaultValues: {
			quizItems: [
				{
					question: '',
					options: [
						{ isCorrect: false, option: '' },
						{ isCorrect: false, option: '' },
					],
				},
			],
		},
	})

	const onSubmit = (data: TCreateQuizSchema) => {
		console.log(data)
		toast.success('Quiz created successfully')
	}

	return (
		<form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
			<QuizDetailsFields
				errors={form.formState.errors}
				register={form.register}
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
				Create Quiz
			</Button>
		</form>
	)
}
