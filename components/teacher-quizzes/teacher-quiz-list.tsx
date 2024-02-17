import { IQuizPreview } from '@/types/quiz.interface'
import { TeacherQuizItem } from './teacher-quiz-item'

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

export const TeacherQuizList = () => {
	return (
		<div className='space-y-4'>
			{data.map((quiz) => (
				<TeacherQuizItem
					key={quiz.id}
					teacherQuizItem={quiz}
				/>
			))}
		</div>
	)
}
