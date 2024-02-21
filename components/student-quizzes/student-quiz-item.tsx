'use client'

import { PAGES } from '@/const/routes'
import { IQuizPreview } from '@/types/quiz.interface'
import { Button, Card, CardBody } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

interface StudentQuizItemProps {
	studentQuizItem: IQuizPreview
}

export const StudentQuizItem: React.FC<StudentQuizItemProps> = ({
	studentQuizItem: studentQuizItem,
}) => {
	return (
		<Card shadow='sm'>
			<CardBody>
				<div className='flex items-end justify-between gap-4'>
					<div>
						<h3 className='text-lg font-semibold'>
							{studentQuizItem.title}{' '}
							<span>(by {studentQuizItem.teacherName})</span>
						</h3>
						<p>Number of questions: {studentQuizItem.testItemsCount}</p>
						<p className='text-sm text-default-500'>
							{studentQuizItem.description}
						</p>
					</div>
					<div>
						<Button
							href={PAGES.STUDENT_QUIZ(studentQuizItem.id)}
							as={Link}
							color='success'
							variant='flat'
						>
							Start Quiz
						</Button>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
