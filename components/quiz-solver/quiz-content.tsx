import { IStudentQuiz } from '@/types/student-quiz'
import React from 'react'
import { QuizCarousel } from './quiz-carousel'

interface QuizContentProps {
	data: IStudentQuiz
}

export const QuizContent: React.FC<QuizContentProps> = ({ data }) => {
	return (
		<>
			<QuizCarousel data={data} />
		</>
	)
}
