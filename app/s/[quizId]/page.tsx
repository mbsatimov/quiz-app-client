import { QuizSolverContent } from '@/components/quiz-solver/quiz-solver-content'

export default function StudentQuizPage({
	params,
}: {
	params: { quizId: string }
}) {
	return <QuizSolverContent quizId={Number(params.quizId)} />
}
