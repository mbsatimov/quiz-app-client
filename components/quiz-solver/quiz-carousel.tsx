'use client'

import { IStudentQuiz } from '@/types/student-quiz'
import React from 'react'
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'

import { cn } from '@/lib/utils'
import { Button } from '@nextui-org/react'
import { QuizCarouselItem } from './quiz-carousel-item'

interface QuizCarouselProps {
	data: IStudentQuiz
}

export const QuizCarousel: React.FC<QuizCarouselProps> = ({ data }) => {
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)

	React.useEffect(() => {
		if (!api) {
			return
		}

		setCurrent(api.selectedScrollSnap() + 1)

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<Carousel
			setApi={setApi}
			className='flex h-full flex-col justify-between space-y-4 pt-[87px]'
		>
			<CarouselContent>
				{data.quizItems.map((quizItem) => (
					<CarouselItem key={quizItem.id}>
						<QuizCarouselItem data={quizItem} />
					</CarouselItem>
				))}
			</CarouselContent>
			<div className='flex justify-center space-x-2'>
				{data.quizItems.map((quizItem, index) => (
					<Button
						key={quizItem.id}
						isIconOnly
						size='sm'
						color={current === index + 1 ? 'success' : 'primary'}
						onClick={() => api?.scrollTo(index)}
					>
						{index + 1}
					</Button>
				))}
			</div>
			<div className='mt-4 flex justify-between px-1'>
				<CarouselPrevious
					color='primary'
					variant={'flat'}
					className='static translate-x-0 translate-y-0'
				>
					Prev
				</CarouselPrevious>
				<CarouselNext
					color='primary'
					variant={'flat'}
					className={cn('static translate-x-0 translate-y-0')}
				>
					Next
				</CarouselNext>
			</div>
		</Carousel>
	)
}
