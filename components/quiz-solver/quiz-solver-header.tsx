'use client'

import { IStudentQuiz } from '@/types/student-quiz'
import { Button, Card, CardHeader } from '@nextui-org/react'
import { format } from 'date-fns'
import React, { useState } from 'react'

interface QuizSolverHeaderProps {
	data: IStudentQuiz
}

export const QuizSolverHeader: React.FC<QuizSolverHeaderProps> = ({ data }) => {
	const [time, setTime] = useState(data.duration / 1000)

	return (
		<Card shadow='sm'>
			<CardHeader className='justify-between p-2 md:p-3'>
				<div className='text-center text-2xl font-semibold md:text-3xl'>
					{format(new Date(time * 1000), 'HH:mm')}
				</div>
				<Button color='danger'>Finish Quiz</Button>
			</CardHeader>
		</Card>
	)
}
