'use client'

import { IQuestion } from '@/types/question.interface'
import { IQuestionResult } from '@/types/quiz-result.interface'
import { IQuiz } from '@/types/quiz.interface'
import { Progress } from '@nextui-org/react'

interface OverallResultProps {
	data: IQuestion[]
	selectedOptions: IQuestionResult[]
}

export const OverallResult: React.FC<OverallResultProps> = ({
	data,
	selectedOptions,
}) => {
	const getQuestionAnswer = (questionId: number) => {
		return selectedOptions.find((option) => option.questionId === questionId)
			?.answerId
	}

	const correct = data
		.map(
			(result) =>
				getQuestionAnswer(result.id) ===
				result.options.find((option) => option.isCorrect)?.id,
		)
		.filter(Boolean).length

	const count = data.length

	const percentage = Math.round((correct / count) * 100)

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
			label={`True answers ${correct} / ${count}`}
			value={percentage}
			showValueLabel={true}
		/>
	)
}
