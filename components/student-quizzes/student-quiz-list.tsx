import { IQuizPreview } from '@/types/quiz.interface'
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
