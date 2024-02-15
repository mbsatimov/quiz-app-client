'use client'

// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { IQuiz } from '@/types/quiz.interface'
import React from 'react'
import { QuizSolverTabs } from './quiz-solver-tabs'

interface QuizSolverContentProps {
	data: IQuiz
}

export const QuizSolverContent: React.FC<QuizSolverContentProps> = ({
	data,
}) => {
	return (
		<div className='flex flex-1 flex-col justify-between pt-4'>
			<QuizSolverTabs data={data.questions} />
		</div>
	)
}
