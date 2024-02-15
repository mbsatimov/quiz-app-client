import { TCreateQuizSchema } from '@/lib/validation/quiz-schema'
import { Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface QuizDetailsFieldsProps {
	errors: FieldErrors<TCreateQuizSchema>
	register: UseFormRegister<TCreateQuizSchema>
}

export const QuizDetailsFields: React.FC<QuizDetailsFieldsProps> = ({
	errors,
	register,
}) => {
	return (
		<>
			<Input
				color='primary'
				{...register('title', { required: true })}
				isInvalid={errors.title ? true : false}
				type='title'
				label='Title'
				placeholder='Enter test title'
				errorMessage={errors.title && 'Title is required'}
				labelPlacement={'outside'}
				{...register('title', { required: true })}
			/>
			<Textarea
				color='primary'
				label='Description'
				labelPlacement='outside'
				placeholder='Enter your description'
				{...register('description')}
				isInvalid={errors.description ? true : false}
			/>
			<Input
				{...register('duration')}
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
