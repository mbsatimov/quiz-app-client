import { title } from '@/components/primitives'
import { IStudentQuiz } from '@/types/student-quiz'
import { format } from 'date-fns'

const data: IStudentQuiz = {
	id: 1,
	duration: 10,
	title: 'Quiz 1',
	description:
		'lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur adipiscing elit',
	startDateTime: '2022-01-01',
	endDateTime: '2022-01-02',
	quizItems: [],
}

export default function StudentQuizPage({
	params,
}: {
	params: { quizId: string }
}) {
	return (
		<div>
			<h1 className={title({ size: 'sm', className: 'text-center block' })}>
				{data.title}
			</h1>
			<p>{data.description}</p>
			<p>
				{format(new Date(data.startDateTime), 'dd MMM yyyy HH:mm')}
				{' - '}
				{format(new Date(data.endDateTime), 'dd MMM yyyy HH:mm')}
			</p>
		</div>
	)
}
