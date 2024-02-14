import { IStudentQuiz } from '@/types/student-quiz'
import { format } from 'date-fns'
import React from 'react'
import { title } from '../primitives'

interface QuizSolverHeaderProps {
	data: IStudentQuiz
}

export const QuizSolverHeader: React.FC<QuizSolverHeaderProps> = ({ data }) => {
	return (
		<>
			<h1 className={title({ size: 'sm', className: 'text-center block' })}>
				{data.title}
			</h1>
			<p>{data.description}</p>
			<p>
				{format(new Date(data.startDateTime), 'dd MMM yyyy HH:mm')}
				{' - '}
				{format(new Date(data.endDateTime), 'dd MMM yyyy HH:mm')}
			</p>
		</>
	)
}
