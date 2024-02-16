'use client'

import { useGetOverallResult } from '@/hooks/use-quiz-result'
import { Progress } from '@nextui-org/react'
import { Loader2 } from 'lucide-react'

interface OverallResultProps {
	quizId: number
}

export const OverallResult: React.FC<OverallResultProps> = ({ quizId }) => {
	const overallResults = useGetOverallResult(quizId)

	if (overallResults.isLoading)
		return <Loader2 className='h-6 w-6 animate-spin' />

	if (!overallResults.isSuccess) return <p>Something went wrong. Try again!</p>

	return (
		<Progress
			size='md'
			radius='lg'
			classNames={{
				track: 'drop-shadow-md border border-default',
				indicator: 'bg-gradient-to-r from-warning-500 to-success-500',
				label: 'tracking-wider font-medium text-default-600',
				value: 'text-foreground/60',
			}}
			label={`True answers ${overallResults.data.correct} / ${overallResults.data.count}`}
			value={overallResults.data.percentage}
			showValueLabel={true}
		/>
	)
}
