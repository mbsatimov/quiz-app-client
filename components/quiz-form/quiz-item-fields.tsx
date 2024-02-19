'use client'

import { TCreateQuiz } from '@/lib/validation/quiz-schema'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import { Plus } from 'lucide-react'
import { Controller, UseFormReturn, useFieldArray } from 'react-hook-form'
import { ImageField } from './image-field'
import { QuizItemOptions } from './quiz-item-options'

interface QuizItemFieldsProps {
	form: UseFormReturn<TCreateQuiz>
}

const defaultQuizItem: TCreateQuiz['questions'][0] = {
	question: '',
	picture: null,
	options: [
		{ isCorrect: false, label: '' },
		{ isCorrect: false, label: '' },
	],
}

export const QuizItemFields: React.FC<QuizItemFieldsProps> = ({ form }) => {
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: 'questions',
	})

	const errors = form.formState.errors.questions

	return (
		<div className='space-y-4 pt-2'>
			{fields.map((field, index) => (
				<div
					key={field.id}
					className='group relative'
				>
					<Card
						isBlurred
						className='border-none bg-background/60 dark:bg-default-100/50'
						shadow='sm'
					>
						<CardBody className='space-y-8'>
							<ImageField
								form={form}
								itemIndex={index}
							/>
							<Controller
								name={`questions.${index}.question`}
								control={form.control}
								render={({ field }) => (
									<Input
										color='primary'
										labelPlacement={'outside'}
										label={`Question ${index + 1}`}
										{...field}
										defaultValue={form.getValues().questions[index].question}
										isInvalid={errors?.[index]?.question ? true : false}
										errorMessage={
											errors?.[index]?.question && 'Question is required'
										}
									/>
								)}
							/>

							<QuizItemOptions
								form={form}
								itemIndex={index}
							/>
							<Button
								size='sm'
								variant='flat'
								color='danger'
								type='button'
								onClick={() => remove(index)}
							>
								Remove question
							</Button>
						</CardBody>
					</Card>
				</div>
			))}
			<Button
				className='mx-auto flex'
				variant='flat'
				aria-label='Take a photo'
				onClick={() => append(defaultQuizItem)}
				color='primary'
				startContent={<Plus />}
				type='button'
			>
				Add question
			</Button>
			{form.formState.errors.questions &&
				form.getValues().questions.length === 0 && (
					<p className='text-center text-danger'>{errors?.root?.message}</p>
				)}
		</div>
	)
}
