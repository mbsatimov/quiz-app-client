import { title } from '@/components/primitives'
import { StudentQuizList } from '@/components/student-quizzes/student-quiz-list'

export default function StudentQuizzesPage() {
	return (
		<main className='mx-auto max-w-2xl space-y-4 py-8'>
			<h1
				className={title({ size: 'sm', className: 'mb-6 block text-center' })}
			>
				Student Quizzes
			</h1>
			<StudentQuizList />
		</main>
	)
}
