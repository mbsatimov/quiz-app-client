'use client'

import { useGetQuizQuestionsById } from '@/hooks/use-quiz'
import { IQuestionResult } from '@/types/quiz-result.interface'
import {
	Button,
	Modal,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import React, { Key } from 'react'
import { Loading } from '../loading'
import { QuizResults } from '../quiz-result/quiz-results'
import { QuizSolverTabs } from './quiz-solver-tabs'

interface QuizSolverContentProps {
	quizId: number
}

export const QuizSolverContent: React.FC<QuizSolverContentProps> = ({
	quizId,
}) => {
	const questions = useGetQuizQuestionsById(quizId)

	const [selectedOptions, setSelectedOptions] = React.useState<
		IQuestionResult[]
	>([])

	const [isFinished, setIsFinished] = React.useState(false)

	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [currentTab, setCurrentTab] = React.useState<Key>('1')

	if (questions.isLoading) return <Loading />

	if (!questions.isSuccess) throw new Error()

	const isSelectedFirstTab = currentTab === '1'
	const isSelectedLastTab = currentTab === questions.data.length?.toString()

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
					data={questions.data}
					selectedOptions={selectedOptions}
				/>
			) : (
				<div className='relative mx-auto flex h-screen w-full max-w-2xl flex-col justify-between px-4 py-6 md:py-8'>
					<QuizSolverTabs
						selectedOptions={selectedOptions}
						setSelectedOptions={setSelectedOptions}
						data={questions.data}
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
