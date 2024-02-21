'use client'

import { IQuestion } from '@/types/question.interface'
import { IQuestionResult } from '@/types/quiz-result.interface'
import { RadioGroup } from '@nextui-org/react'
import Image from 'next/image'
import React, { useCallback, useMemo } from 'react'
import { CustomRadio } from '../ui/custom-radio'

interface QuizSolverProps {
	data: IQuestion
	selectedOptions: IQuestionResult[]
	setSelectedOptions: React.Dispatch<React.SetStateAction<IQuestionResult[]>>
}
export const QuizSolverTabItem: React.FC<QuizSolverProps> = ({
	data,
	selectedOptions,
	setSelectedOptions,
}) => {
	const handleValueChange = useCallback(
		(optionId: string) => {
			setSelectedOptions((prev) => {
				const currentQuestion = prev.find(
					(question) => question.questionId === data.id,
				)
				if (currentQuestion) {
					return prev.map((question) => {
						if (question.questionId === data.id) {
							return {
								...question,
								answerId: Number(optionId),
							}
						}
						return question
					})
				}
				return [
					...prev,
					{
						questionId: data.id,
						answerId: Number(optionId),
					},
				]
			})
		},
		[data.id, setSelectedOptions],
	)

	const selectedOption = useMemo(
		() => selectedOptions.find((option) => option.questionId === data.id),
		[selectedOptions, data.id],
	)

	return (
		<div className='space-y-4 px-1 md:space-y-6'>
			<p className='text-center text-2xl font-bold md:text-3xl'>
				{data.question}
			</p>
			{data?.picture && (
				<Image
					priority
					src={data.picture}
					alt='Uploaded image'
					className='max-h-[250px] rounded-md object-contain shadow-sm sm:max-h-[320px] sm:max-w-full'
					width={1500}
					height={1000}
				/>
			)}
			<RadioGroup
				value={selectedOption?.answerId.toString() || ''}
				onValueChange={handleValueChange}
			>
				{data?.options?.map((option, index) => (
					<CustomRadio
						key={index}
						value={String(option.id)}
						baseClassName={
							selectedOption?.answerId === option.id ? 'border-primary' : ''
						}
					>
						{option.label}
					</CustomRadio>
				))}
			</RadioGroup>
		</div>
	)
}
