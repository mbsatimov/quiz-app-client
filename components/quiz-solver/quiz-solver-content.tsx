'use client'

// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PAGES } from '@/const/routes'
import { IQuiz } from '@/types/quiz.interface'
import {
	Button,
	Link,
	Modal,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import React, { Key } from 'react'
import { QuizSolverTabs } from './quiz-solver-tabs'

interface QuizSolverContentProps {
	quizId: number
	data: IQuiz
}

export const QuizSolverContent: React.FC<QuizSolverContentProps> = ({
	data,
	quizId,
}) => {
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
		<div className='flex h-full flex-1 flex-col justify-between py-4'>
			<QuizSolverTabs
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
										as={Link}
										href={`${PAGES.STUDENT_QUIZZES}/${data.id}/${PAGES.STUDENT_QUIZ_RESULTS}`}
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
	)
}
