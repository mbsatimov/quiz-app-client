'use client'

import { useGetAllQuizzesOfCurrentTeacher } from '@/hooks/use-quiz'
import { Loader2 } from 'lucide-react'
import { TeacherQuizItem } from './teacher-quiz-item'

export const TeacherQuizList = () => {
	const quizzes = useGetAllQuizzesOfCurrentTeacher()

	if (quizzes.isLoading) return <Loader2 className='h-6 w-6 animate-spin' />

	if (!quizzes.isSuccess)
		return (
			<div className='text-center text-xl text-danger'>
				Something went wrong. Please try again
			</div>
		)

	return (
		<div className='space-y-4'>
			{quizzes.data.map((quiz) => (
				<TeacherQuizItem
					key={quiz.id}
					teacherQuizItem={quiz}
				/>
			))}
		</div>
	)
}
