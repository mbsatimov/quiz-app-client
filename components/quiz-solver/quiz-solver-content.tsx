'use client'

import { IQuestionResult } from '@/types/quiz-result.interface'
import { IQuiz } from '@/types/quiz.interface'
import {
	Button,
	Modal,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import React, { Key } from 'react'
import { QuizResults } from '../quiz-result/quiz-results'
import { QuizSolverTabs } from './quiz-solver-tabs'

interface QuizSolverContentProps {
	quizId: number
	data: IQuiz
}

export const QuizSolverContent: React.FC<QuizSolverContentProps> = ({
	data,
	quizId,
}) => {
	const [selectedOptions, setSelectedOptions] = React.useState<
		IQuestionResult[]
	>([])

	const [isFinished, setIsFinished] = React.useState(false)

	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [currentTab, setCurrentTab] = React.useState<Key>('1')

	const isSelectedFirstTab = currentTab === '1'
	const isSelectedLastTab = currentTab === data.questions.length.toString()

	const handlePrev = () => {
		if (isSelectedFirstTab) return
		setCurrentTab((prev) => String(Number(prev) - 1))
	}

	const handleNext = () => {
		if (isSelectedLastTab) return
		setCurrentTab((prev) => String(Number(prev) + 1))
	}

	return (
		<>
			{isFinished ? (
				<QuizResults
					data={data}
					selectedOptions={selectedOptions}
				/>
			) : (
				<div className='mx-auto flex h-screen w-full max-w-2xl flex-col justify-between px-4 py-6 md:py-8'>
					<QuizSolverTabs
						selectedOptions={selectedOptions}
						setSelectedOptions={setSelectedOptions}
						data={data.questions}
						currentTab={currentTab}
						setCurrentTab={setCurrentTab}
					/>
					<div className='flex justify-between'>
						<Button
							size='lg'
							color='primary'
							variant='flat'
							onClick={handlePrev}
							isDisabled={isSelectedFirstTab}
						>
							Prev
						</Button>
						{isSelectedLastTab ? (
							<Button
								color='danger'
								size='lg'
								onPress={onOpen}
							>
								Finish Quiz
							</Button>
						) : (
							<Button
								size='lg'
								color='primary'
								variant='flat'
								onClick={handleNext}
								isDisabled={isSelectedLastTab}
							>
								Next
							</Button>
						)}
						<Modal
							isOpen={isOpen}
							onOpenChange={onOpenChange}
							backdrop='blur'
						>
							<ModalContent>
								{(onClose) => (
									<>
										<ModalHeader className='flex flex-col gap-1'>
											Are you sure you want to finish the quiz?
										</ModalHeader>
										<ModalFooter>
											<Button
												variant='light'
												onPress={onClose}
											>
												Cancel
											</Button>
											<Button
												color='danger'
												onPress={() => {
													setIsFinished(true)
												}}
											>
												See Result
											</Button>
										</ModalFooter>
									</>
								)}
							</ModalContent>
						</Modal>
					</div>
				</div>
			)}
		</>
	)
}
