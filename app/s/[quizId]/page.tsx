import { QuizSolverContent } from '@/components/quiz-solver/quiz-solver-content'
import { data } from './data'

export default function StudentQuizPage({
	params,
}: {
	params: { quizId: string }
}) {
	return (
		<QuizSolverContent
			quizId={Number(params.quizId)}
			data={data}
		/>
	)
}
