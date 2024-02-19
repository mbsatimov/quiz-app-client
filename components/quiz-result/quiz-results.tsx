'use client'

import { PAGES } from '@/const/routes'
import { IQuestionResult } from '@/types/quiz-result.interface'
import { IQuiz } from '@/types/quiz.interface'
import { Button, Card, CardBody, Link } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { DetailedResult } from './detailed-results'
import { OverallResult } from './overall-result'

interface QuizResultsProps {
	data: IQuiz
	selectedOptions: IQuestionResult[]
}

export const QuizResults: React.FC<QuizResultsProps> = ({
	data,
	selectedOptions,
}) => {
	const pathname = usePathname()

	const returnHome = pathname.startsWith(PAGES.TEACHER_QUIZZES)
		? PAGES.TEACHER_QUIZZES
		: PAGES.STUDENT_QUIZZES

	return (
		<div className='mx-auto w-full max-w-2xl px-4 py-6 md:py-8'>
			<Card shadow='sm'>
				<CardBody className='flex-row items-center justify-between'>
					<h1 className='text-2xl'>Quiz Results</h1>
					<Button
						as={Link}
						href={returnHome}
						color='primary'
						variant='flat'
					>
						Back to Home
					</Button>
				</CardBody>
			</Card>
			<div className='my-20 flex justify-center'>
				<OverallResult
					data={data}
					selectedOptions={selectedOptions}
				/>
			</div>
			<DetailedResult
				data={data}
				selectedOptions={selectedOptions}
			/>
		</div>
	)
}
