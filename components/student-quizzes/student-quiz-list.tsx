'use client'

import { useGetAllVisibleQuizzes } from '@/hooks/use-quiz'
import { Loading } from '../loading'
import { StudentQuizItem } from './student-quiz-item'

export const StudentQuizList = () => {
	const quizzes = useGetAllVisibleQuizzes()

	if (quizzes.isLoading) return <Loading />

	if (!quizzes.isSuccess) throw new Error()

	if (quizzes.data.length === 0)
		return <div className='text-center text-lg'>No Quizzes found</div>

	return (
		<div className='space-y-4'>
			{quizzes.data.map((quiz) => (
				<StudentQuizItem
					key={quiz.id}
					studentQuizItem={quiz}
				/>
			))}
		</div>
	)
}
