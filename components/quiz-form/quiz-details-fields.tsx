import { TCreateQuiz } from '@/lib/validation/quiz-schema'
import { Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

interface QuizDetailsFieldsProps {
	form: UseFormReturn<TCreateQuiz>
}

export const QuizDetailsFields: React.FC<QuizDetailsFieldsProps> = ({
	form,
}) => {
	const errors = form.formState.errors

	return (
		<>
			<Controller
				control={form.control}
				name='title'
				render={({ field }) => (
					<Input
						color='primary'
						{...field}
						isInvalid={!!errors.title}
						defaultValue={form.getValues().title}
						label='Title'
						placeholder='Enter test title'
						errorMessage={errors.title?.message}
						labelPlacement={'outside'}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='description'
				render={({ field }) => (
					<Textarea
						color='primary'
						label='Description'
						labelPlacement='outside'
						placeholder='Enter your description'
						{...field}
						value={field.value || ''}
						defaultValue={form.getValues().description || ''}
					/>
				)}
			/>
		</>
	)
}
