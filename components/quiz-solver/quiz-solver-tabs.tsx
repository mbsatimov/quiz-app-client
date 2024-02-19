'use client'

import { cn } from '@/lib/utils'
import { IQuestion } from '@/types/question.interface'
import { IQuestionResult } from '@/types/quiz-result.interface'
import { Tab, Tabs } from '@nextui-org/react'
import React, { Key } from 'react'
import { QuizSolverTabItem } from './quiz-solver-tab-item'

interface QuizSolverTabsProps {
	data: IQuestion[]
	currentTab: Key
	setCurrentTab: React.Dispatch<React.SetStateAction<Key>>
	selectedOptions: IQuestionResult[]
	setSelectedOptions: React.Dispatch<React.SetStateAction<IQuestionResult[]>>
}

export const QuizSolverTabs: React.FC<QuizSolverTabsProps> = ({
	data,
	currentTab,
	setCurrentTab,
	selectedOptions,
	setSelectedOptions,
}) => {
	const isQuestionSolved = (questionId: number) => {
		return selectedOptions.some((option) => option.questionId === questionId)
	}

	return (
		<>
			<Tabs
				selectedKey={currentTab}
				onSelectionChange={setCurrentTab}
				color='primary'
				className='justify-center'
				size='lg'
			>
				{data.map((quizItem, index) => (
					<Tab
						key={index + 1}
						title={
							<div
								className={cn('flex items-center justify-center', {
									'font-bold text-success': isQuestionSolved(quizItem.id),
								})}
							>
								{String(index + 1)}
							</div>
						}
					>
						<QuizSolverTabItem
							selectedOptions={selectedOptions}
							setSelectedOptions={setSelectedOptions}
							data={quizItem}
						/>
					</Tab>
				))}
			</Tabs>
		</>
	)
}
