import { title } from '@/components/primitives'
import { RefreshStudentQuizzesButton } from '@/components/refresh-student-quizzes-button'
import { StudentQuizList } from '@/components/student-quizzes/student-quiz-list'
import { Card, CardBody } from '@nextui-org/react'

export default function StudentQuizzesPage() {
	return (
		<main className='mx-auto max-w-2xl space-y-4 py-8'>
			<Card className='mb-8'>
				<CardBody className='flex-row items-center justify-between'>
					<h1 className='text-2xl font-semibold'>Student Quizzes</h1>
					<RefreshStudentQuizzesButton />
				</CardBody>
			</Card>
			<StudentQuizList />
		</main>
	)
}
