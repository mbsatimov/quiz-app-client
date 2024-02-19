import { useGetAllVisibleQuizzes } from '@/hooks/use-quiz'
import { IQuizPreview } from '@/types/quiz.interface'
import { Loader2 } from 'lucide-react'
import { StudentQuizItem } from './student-quiz-item'

const data: IQuizPreview[] = [
	{
		id: 1,
		title: 'English 1',
		isVisible: true,
		description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
	},
	{
		id: 2,
		title: 'English 2',
		isVisible: true,
		description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
	},
]

interface StudentQuizListProps {
	quizId: number
}

export const StudentQuizList: React.FC<StudentQuizListProps> = ({ quizId }) => {
	const quizzes = useGetAllVisibleQuizzes()

	if (quizzes.isLoading) return <Loader2 className='h-6 w-6 animate-spin' />

	if (!quizzes.isSuccess)
		return (
			<div className='text-center text-xl text-danger'>
				Something went wrong. Please try again
			</div>
		)

	return (
		<div className='space-y-4'>
			{data.map((quiz) => (
				<StudentQuizItem
					key={quiz.id}
					studentQuizItem={quiz}
				/>
			))}
		</div>
	)
}
