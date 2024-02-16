'use client'

import {
	Card,
	CardBody,
	CardHeader,
	Image,
	RadioGroup,
} from '@nextui-org/react'
import { CustomRadio } from '../ui/custom-radio'
import { data } from './data'

interface DetailedResultProps {
	quizId: number
}

export const DetailedResult: React.FC<DetailedResultProps> = ({ quizId }) => {
	return (
		<div className='space-y-6'>
			{data.map((question) => (
				<Card
					shadow='sm'
					key={question.id}
				>
					<CardHeader>
						<p className='text-xl font-bold'>{question.question}</p>
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
						<RadioGroup value={String(question.answerId)}>
							{question.options.map((option, index) => (
								<CustomRadio
									key={index}
									value={String(option.id)}
									color={
										option.isCorrect
											? 'success'
											: question.answerId === option.id
												? 'danger'
												: 'default'
									}
									baseClassName={
										option.isCorrect
											? 'border-success'
											: question.answerId === option.id
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
			))}
		</div>
	)
}
