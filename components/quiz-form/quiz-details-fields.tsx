import { TCreateQuiz } from '@/lib/validation/quiz-schema'
import { Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { FieldErrors, UseFormReturn } from 'react-hook-form'

interface QuizDetailsFieldsProps {
	errors: FieldErrors<TCreateQuiz>
	form: UseFormReturn<TCreateQuiz>
}

export const QuizDetailsFields: React.FC<QuizDetailsFieldsProps> = ({
	errors,
	form,
}) => {
	return (
		<>
			<Input
				color='primary'
				{...form.register('title', { required: true })}
				isInvalid={errors.title ? true : false}
				defaultValue={form.getValues().title}
				type='title'
				label='Title'
				placeholder='Enter test title'
				errorMessage={errors.title && 'Title is required'}
				labelPlacement={'outside'}
			/>
			<Textarea
				color='primary'
				label='Description'
				labelPlacement='outside'
				placeholder='Enter your description'
				{...form.register('description')}
				defaultValue={form.getValues().description}
				isInvalid={errors.description ? true : false}
			/>
			<Input
				{...form.register('duration')}
				defaultValue={form.getValues().duration}
				color='primary'
				min={1}
				labelPlacement={'outside'}
				isInvalid={errors.duration ? true : false}
				errorMessage={errors.duration && errors.duration.message}
				label='Duration'
				type='number'
				inputMode='numeric'
				placeholder='Minutes'
			/>
		</>
	)
}
