import { QuizSolverContent } from '@/components/quiz-solver/quiz-solver-content'
import { QuizSolverHeader } from '@/components/quiz-solver/quiz-solver-header'
import { data } from './data'

export default function StudentQuizPage({
	params,
}: {
	params: { quizId: string }
}) {
	return (
		<div className='mx-auto flex h-full max-w-2xl flex-col'>
			<QuizSolverHeader data={data} />
			<QuizSolverContent data={data} />
		</div>
	)
}
