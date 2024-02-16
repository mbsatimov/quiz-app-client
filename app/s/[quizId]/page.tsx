import { QuizSolverContent } from '@/components/quiz-solver/quiz-solver-content'
import { data } from './data'

export default function StudentQuizPage({
	params,
}: {
	params: { quizId: string }
}) {
	return (
		<div className='mx-auto h-screen max-w-2xl px-4 py-6 md:py-8'>
			<QuizSolverContent
				quizId={Number(params.quizId)}
				data={data}
			/>
		</div>
	)
}
