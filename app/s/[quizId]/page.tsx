'use client'

import { QuizContent } from '@/components/quiz-solver/quiz-content'
import { QuizControl } from '@/components/quiz-solver/quiz-control'
import { QuizSolverHeader } from '@/components/quiz-solver/quiz-solver-header'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { data } from './data'

export default function StudentQuizPage({
	params,
}: {
	params: { quizId: string }
}) {
	const [isStarted, setIsStarted] = useState<boolean>(false)

	return (
		<div className='h-full relative max-w-2xl w-full mx-auto'>
			<div
				className={cn(
					'z-20 left-0 right-0 transform duration-1000 absolute top-[85%]',
					{ 'top-0': isStarted }
				)}
			>
				<QuizControl
					data={data}
					isStarted={isStarted}
					setIsStarted={setIsStarted}
				/>
			</div>
			<div
				className={cn('transition-all', {
					'opacity-0 invisible hidden': isStarted,
				})}
			>
				<QuizSolverHeader data={data} />
			</div>
			{isStarted && (
				<div className='absolute top-0 bottom-0 left-0 right-0'>
					<QuizContent /* quizId={params.quizId} */ data={data} />
				</div>
			)}
		</div>
	)
}
