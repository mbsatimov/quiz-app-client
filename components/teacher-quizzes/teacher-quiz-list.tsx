'use client'

import { useGetAllQuizzesOfCurrentTeacher } from '@/hooks/use-quiz'
import { Loading } from '../loading'
import { TeacherQuizItem } from './teacher-quiz-item'

export const TeacherQuizList = () => {
	const quizzes = useGetAllQuizzesOfCurrentTeacher()

	if (quizzes.isLoading) return <Loading />

	if (!quizzes.isSuccess) throw new Error()

	if (quizzes.data.length === 0)
		return <div className='text-center text-lg'>No quizzes found.</div>

	return (
		<div className='space-y-4'>
			{quizzes.data
				.sort((a, b) => b.id - a.id)
				.map((quiz) => (
					<TeacherQuizItem
						key={quiz.id}
						teacherQuizItem={quiz}
					/>
				))}
		</div>
	)
}
