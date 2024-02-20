'use client'

import { PAGES } from '@/const/routes'
import { cn } from '@/lib/utils'
import { IQuestion } from '@/types/question.interface'
import { IQuestionResult } from '@/types/quiz-result.interface'
import { Tab, Tabs } from '@nextui-org/react'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

	const pathname = usePathname()

	const returnHome = pathname.startsWith(PAGES.TEACHER_QUIZZES)
		? PAGES.TEACHER_QUIZZES
		: PAGES.STUDENT_QUIZZES

	return (
		<>
			<div className='absolute left-4 top-10 text-default-500'>
				<Link href={returnHome}>
					<X size={28} />
				</Link>
			</div>
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
