'use client'

import { IQuestion } from '@/types/question.interface'
import { Image, RadioGroup } from '@nextui-org/react'
import React from 'react'
import { CustomRadio } from '../ui/custom-radio'

interface QuizSolverProps {
	data: IQuestion
}

export const QuizSolverTabItem: React.FC<QuizSolverProps> = ({ data }) => {
	return (
		<div className='space-y-4 px-1'>
			<p className='text-lg font-bold'>{data.question}</p>
			{/* {data.attachment && ( */}
			<div className='flex justify-center'>
				<Image
					src={
						'https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png'
					}
					alt='Uploaded image'
					className=' max-h-[150px] max-w-[300px] object-contain sm:max-h-[320px]'
				/>
			</div>
			{/* )} */}
			<RadioGroup>
				{data.options.map((option, index) => (
					<CustomRadio
						key={index}
						value={option.label}
					>
						{option.label}
					</CustomRadio>
				))}
			</RadioGroup>
		</div>
	)
}
