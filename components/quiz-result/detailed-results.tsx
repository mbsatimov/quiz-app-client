'use client'

import { IQuestionResult } from '@/types/quiz-result.interface'
import { IQuiz } from '@/types/quiz.interface'
import {
	Card,
	CardBody,
	CardHeader,
	Image,
	RadioGroup,
} from '@nextui-org/react'
import { CustomRadio } from '../ui/custom-radio'

interface DetailedResultProps {
	data: IQuiz
	selectedOptions: IQuestionResult[]
}

export const DetailedResult: React.FC<DetailedResultProps> = ({
	data,
	selectedOptions,
}) => {
	const getQuestionAnswer = (questionId: number) => {
		return selectedOptions.find((option) => option.questionId === questionId)
			?.answerId
	}

	return (
		<div className='space-y-6'>
			{data.questions.map((question, index) => {
				const answerId = getQuestionAnswer(question.id)
				return (
					<Card
						shadow='sm'
						key={question.id}
					>
						<CardHeader>
							<p className='text-lg'>
								<b>Question {index + 1}: </b>
								{question.question}
							</p>
						</CardHeader>
						<CardBody className='space-y-4'>
							{question.pictureUrl && (
								<div className='flex justify-center'>
									<Image
										src={question.pictureUrl}
										alt='Uploaded image'
										className=' max-h-[150px] max-w-[300px] object-contain sm:max-h-[320px]'
									/>
								</div>
							)}
							<RadioGroup value={String(answerId)}>
								{question.options.map((option, index) => (
									<CustomRadio
										key={index}
										value={String(option.id)}
										color={
											option.isCorrect
												? 'success'
												: answerId === option.id
													? 'danger'
													: 'default'
										}
										baseClassName={
											option.isCorrect
												? 'border-success'
												: answerId === option.id
													? 'border-danger'
													: 'border-default'
										}
									>
										{option.label}
									</CustomRadio>
								))}
							</RadioGroup>
						</CardBody>
					</Card>
				)
			})}
		</div>
	)
}
