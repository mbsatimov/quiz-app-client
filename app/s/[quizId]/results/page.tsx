import { DetailedResult } from '@/components/quiz-result/detailed-results'
import { OverallResult } from '@/components/quiz-result/overall-result'

export default function ResultsPage({
	params,
}: {
	params: { quizId: string }
}) {
	return (
		<div className='mx-auto max-w-2xl px-4 py-6 md:py-8'>
			<h1 className='text-center text-3xl'>Quiz Results</h1>
			<div className='my-20 flex justify-center'>
				<OverallResult quizId={Number(params.quizId)} />
			</div>
			<DetailedResult quizId={Number(params.quizId)} />
		</div>
	)
}
