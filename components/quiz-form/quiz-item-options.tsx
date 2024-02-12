import { TCreateQuizSchema } from '@/lib/validation/quiz-schema'
import { Button, Input, Radio, RadioGroup } from '@nextui-org/react'
import { Minus, Plus } from 'lucide-react'
import React from 'react'
import { Controller, UseFormReturn, useFieldArray } from 'react-hook-form'

interface QuizItemOptionsProps {
	form: UseFormReturn<TCreateQuizSchema>
	itemIndex: number
}

export const QuizItemOptions: React.FC<QuizItemOptionsProps> = ({
	form,
	itemIndex,
}) => {
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: `quizItems.${itemIndex}.options`,
	})

	const errors = form.formState.errors.quizItems?.[itemIndex]?.options

	return (
		<div className='space-y-4'>
			<RadioGroup
				isInvalid={errors?.root?.message ? true : false}
				errorMessage={errors?.root?.message}
			>
				{fields.map((field, index) => (
					<div key={field.id} className='flex items-center gap-2'>
						<Controller
							name={`quizItems.${itemIndex}.options.${index}.isCorrect`}
							control={form.control}
							render={({ field }) => (
								<Radio
									value={String(index)}
									onChange={(e) => {
										form
											.getValues()
											.quizItems[itemIndex].options.map((_, i) =>
												form.setValue(
													`quizItems.${itemIndex}.options.${i}.isCorrect`,
													false
												)
											)
										field.onChange(e.target.checked)
										form.clearErrors(`quizItems.${itemIndex}.options`)
									}}
								/>
							)}
						/>
						<Controller
							name={`quizItems.${itemIndex}.options.${index}.option`}
							control={form.control}
							render={({ field }) => (
								<Input
									size='sm'
									color='primary'
									labelPlacement='outside'
									{...field}
									isInvalid={errors?.[index]?.option ? true : false}
									placeholder={`Option ${index + 1}`}
									errorMessage={errors?.[index]?.option && 'Option is required'}
								/>
							)}
						/>
						<Button
							size='sm'
							variant='flat'
							color='danger'
							isIconOnly
							type='button'
							onClick={() => remove(index)}
						>
							<Minus />
						</Button>
					</div>
				))}
			</RadioGroup>
			<Button
				type='button'
				variant='flat'
				size='sm'
				aria-label='Take a photo'
				onClick={() => append({ isCorrect: false, option: '' })}
				color='primary'
				startContent={<Plus />}
			>
				Add option
			</Button>
		</div>
	)
}
