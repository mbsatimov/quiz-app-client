'use client'

import { cn } from '@/lib/utils'
import { IStudentQuizItem } from '@/types/student-quiz'
import { Image, Radio, RadioGroup, RadioProps } from '@nextui-org/react'
import React from 'react'

interface QuizCarouselProps {
	data: IStudentQuizItem
}

export const QuizCarouselItem: React.FC<QuizCarouselProps> = ({ data }) => {
	return (
		<div className='space-y-4 px-1'>
			<p className='font-bold text-lg'>{data.question}</p>
			{/* {data.attachment && ( */}
			<div className='flex justify-center'>
				<Image
					src={
						'https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png'
					}
					alt='Uploaded image'
					className='sm:max-w-xs sm:max-h-[320px] max-w-[150px] max-h-[150px] object-contain'
				/>
			</div>
			{/* )} */}
			<RadioGroup>
				{data.options.map((option, index) => (
					<CustomRadio key={index} value={option.option}>
						{option.option}
					</CustomRadio>
				))}
			</RadioGroup>
		</div>
	)
}

export const CustomRadio = (props: RadioProps) => {
	const { children, color, ...otherProps } = props

	return (
		<Radio
			{...otherProps}
			color={color}
			classNames={{
				base: cn(
					'min-w-full border-2 border-default flex m-0 items-center justify-between',
					'flex-row-reverse cursor-pointer rounded-lg gap-4 px-3 py-2',
					`data-[selected=true]:border-${color ? color : 'primary'}`
				),
			}}
		>
			{children}
		</Radio>
	)
}
