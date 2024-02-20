'use client'

import { IQuestion } from '@/types/question.interface'
import { IQuestionResult } from '@/types/quiz-result.interface'
import { Card, CardBody, CardHeader, RadioGroup } from '@nextui-org/react'
import Image from 'next/image'
import { CustomRadio } from '../ui/custom-radio'

interface DetailedResultProps {
	data: IQuestion[]
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
			{data.map((question, index) => {
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
							{question.picture && (
								<div className='flex justify-center'>
									<Image
										src={question.picture}
										alt='Uploaded image'
										className='max-h-[250px] rounded-md object-contain shadow-sm sm:max-h-[320px]'
										width={1500}
										height={1000}
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
