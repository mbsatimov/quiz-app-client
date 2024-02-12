import { TCreateQuizSchema } from '@/lib/validation/quiz-schema'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import { Minus, Plus } from 'lucide-react'
import { Controller, UseFormReturn, useFieldArray } from 'react-hook-form'
import { ImageField } from './image-field'
import { QuizItemOptions } from './quiz-item-options'

interface QuizItemFieldsProps {
	form: UseFormReturn<TCreateQuizSchema>
}

const defaultQuizItem: TCreateQuizSchema['quizItems'][0] = {
	question: '',
	options: [
		{ isCorrect: false, option: '' },
		{ isCorrect: false, option: '' },
	],
}

export const QuizItemFields: React.FC<QuizItemFieldsProps> = ({ form }) => {
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: 'quizItems',
	})

	const errors = form.formState.errors.quizItems

	return (
		<div className='space-y-4 pt-2'>
			{fields.map((field, index) => (
				<div key={field.id} className='relative'>
					<Card
						isBlurred
						className='border-none bg-background/60 dark:bg-default-100/50'
						shadow='sm'
					>
						<CardBody className='space-y-8'>
							<ImageField form={form} itemIndex={index} />
							<Controller
								name={`quizItems.${index}.question`}
								control={form.control}
								render={({ field }) => (
									<Input
										color='primary'
										labelPlacement={'outside'}
										label={`Question ${index + 1}`}
										{...field}
										isInvalid={errors?.[index]?.question ? true : false}
										errorMessage={
											errors?.[index]?.question && 'Question is required'
										}
									/>
								)}
							/>

							<QuizItemOptions form={form} itemIndex={index} />
						</CardBody>
					</Card>
					<Button
						className='absolute left-[102%] top-0'
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
		</div>
	)
}