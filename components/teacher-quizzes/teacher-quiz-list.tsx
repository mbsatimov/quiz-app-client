import { IQuizPreview } from '@/types/quiz.interface'
import { TeacherQuizItem } from './teacher-quiz-item'

const data: IQuizPreview[] = [
	{
		id: 1,
		title: 'English 1',
		startDateTime: '2022-01-01 10:10',
		endDateTime: '2022-01-02 10:10',
		duration: 60,
	},
	{
		id: 2,
		title: 'English 2',
		startDateTime: '2022-01-01 10:10',
		endDateTime: '2022-01-02 10:10',
		duration: 60,
	},
]

export const TeacherTestList = () => {
	return (
		<div className='space-y-4'>
			{data.map((quiz) => (
				<TeacherQuizItem key={quiz.id} teacherQuizItem={quiz} />
			))}
		</div>
	)
}
