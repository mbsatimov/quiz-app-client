'use client'

import { cn } from '@/lib/utils'
import { IStudentQuiz } from '@/types/student-quiz'
import { Button, Card, CardHeader } from '@nextui-org/react'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'

interface QuizControlProps {
	data: IStudentQuiz
	isStarted: boolean
	setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
}

export const QuizControl: React.FC<QuizControlProps> = ({
	data,
	isStarted,
	setIsStarted,
}) => {
	const [time, setTime] = useState(data.duration)

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime - 1000)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<Card
			className={cn('p-4', {
				'p-0': isStarted,
			})}
			shadow='sm'
		>
			<CardHeader className={cn({ 'justify-center': isStarted })}>
				<div
					className={cn('text-5xl font-bold transform duration-500', {
						'text-center text-3xl font-semibold': isStarted,
					})}
				>
					{format(new Date(time), 'HH:mm')}
				</div>
				<Button
					className={cn('ml-auto')}
					color={isStarted ? 'danger' : 'primary'}
					onClick={() => setIsStarted((prev) => !prev)}
				>
					{isStarted ? 'Finish Quiz' : 'Start Quiz'}
				</Button>
			</CardHeader>
		</Card>
	)
}
