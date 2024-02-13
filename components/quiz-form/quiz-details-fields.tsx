import { TCreateQuizSchema } from '@/lib/validation/quiz-schema'
import { Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { InputWithMask } from '../ui/input-with-mask'
import { Label } from '../ui/label'

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
			<div className='grid grid-cols-3 gap-4'>
				<div>
					<Label className='text-[#1a7ff2] font-normal'>Start date</Label>
					<InputWithMask
						color='primary'
						{...register('startDateTime')}
						mask='99/99/9999 99:99'
						placeholder='dd/mm/yyyy hh:mm'
					/>
					<p className='text-[#f31260] text-sm'>
						{errors.startDateTime && errors.startDateTime.message}
					</p>
				</div>
				<div>
					<Label className='text-[#1a7ff2] font-normal'>End date</Label>
					<InputWithMask
						color='primary'
						{...register('endDateTime', {
							required: true,
						})}
						mask='99/99/9999 99:99'
						placeholder='dd/mm/yyyy hh:mm'
					/>
					<p className='text-[#f31260] text-sm'>
						{errors.endDateTime && errors.endDateTime.message}
					</p>
				</div>
				<div>
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
				</div>
			</div>
		</>
	)
}
