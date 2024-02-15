'use client'

import { IQuestion } from '@/types/question.interface'
import { Button, Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import { QuizSolverTabItem } from './quiz-solver-tab-item'

interface QuizSolverTabsProps {
	data: IQuestion[]
}

export const QuizSolverTabs: React.FC<QuizSolverTabsProps> = ({ data }) => {
	const [selected, setSelected] = React.useState('1')

	const isSelectedFirstTab = selected === '1'
	const isSelectedLastTab = selected === data.length.toString()

	const handlePrev = () => {
		if (isSelectedFirstTab) return
		setSelected((prev) => String(Number(prev) - 1))
	}

	const handleNext = () => {
		if (isSelectedLastTab) return
		setSelected((prev) => String(Number(prev) + 1))
	}
	return (
		<>
			<Tabs
				selectedKey={selected}
				onSelectionChange={setSelected}
				color='primary'
				className='justify-center'
			>
				{data.map((quizItem, index) => (
					<Tab
						key={index + 1}
						title={String(index + 1)}
					>
						<QuizSolverTabItem data={quizItem} />
					</Tab>
				))}
			</Tabs>
			<div className='flex justify-between'>
				<Button
					color='primary'
					variant='flat'
					onClick={handlePrev}
					isDisabled={isSelectedFirstTab}
				>
					Prev
				</Button>
				<Button
					color='primary'
					variant='flat'
					onClick={handleNext}
					isDisabled={isSelectedLastTab}
				>
					Next
				</Button>
			</div>
		</>
	)
}
