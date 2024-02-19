'use client'

import { PAGES } from '@/const/routes'
import { useDeleteQuiz, useToggleQuizVisibility } from '@/hooks/use-quiz'
import { IQuizPreview } from '@/types/quiz.interface'
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Link,
	Modal,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Spinner,
	Switch,
	useDisclosure,
} from '@nextui-org/react'
import { Edit, Eye, EyeOff, MoreHorizontal, Trash } from 'lucide-react'
import React from 'react'

interface TeacherQuizItemProps {
	teacherQuizItem: IQuizPreview
}

export const TeacherQuizItem: React.FC<TeacherQuizItemProps> = ({
	teacherQuizItem: teacherQuizItem,
}) => {
	const toggleVisibility = useToggleQuizVisibility(
		teacherQuizItem.id,
		teacherQuizItem.isVisible,
	)
	const deleteQuiz = useDeleteQuiz()
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const handleDelete = () => {
		deleteQuiz.mutateAsync(teacherQuizItem.id).then(() => onOpenChange())
	}

	const handleToggleVisibility = () => {
		toggleVisibility.mutate(teacherQuizItem.id)
	}

	return (
		<Card shadow='sm'>
			<CardHeader className='justify-between'>
				<h3 className='text-lg font-semibold'>{teacherQuizItem.title}</h3>
				<div className='flex items-center'>
					<Dropdown placement='bottom-end'>
						<DropdownTrigger>
							<Button
								variant='light'
								isIconOnly
								size='sm'
							>
								<MoreHorizontal />
							</Button>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownItem
								key='edit'
								as={Link}
								href={PAGES.EDIT_QUIZ(teacherQuizItem.id)}
								aria-label='Dropdown menu with icons'
								startContent={<Edit size={18} />}
							>
								Edit quiz
							</DropdownItem>
							<DropdownItem
								key='delete'
								startContent={<Trash size={18} />}
								className='text-danger'
								color='danger'
								onPress={onOpen}
							>
								Delete quiz
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</CardHeader>
			<CardBody>
				<div className='flex items-end justify-between'>
					<div>
						<div className='mb-2'>
							<Switch
								color='primary'
								isSelected={teacherQuizItem.isVisible}
								startContent={<Eye />}
								endContent={<EyeOff />}
								onClick={handleToggleVisibility}
								thumbIcon={
									toggleVisibility.isPending ? <Spinner size='sm' /> : null
								}
							>
								{teacherQuizItem.isVisible ? 'Quiz Visible' : 'Quiz Hidden'}
							</Switch>
						</div>
						<p className='text-default-500'>{teacherQuizItem.description}</p>
					</div>
					<div>
						<Button
							href={PAGES.TEACHER_QUIZ(teacherQuizItem.id)}
							as={Link}
							color='success'
							variant='flat'
						>
							Start Quiz
						</Button>
					</div>
				</div>
			</CardBody>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				backdrop='blur'
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								Delete Quiz &quot;{teacherQuizItem.title}&quot;
							</ModalHeader>
							<ModalFooter>
								<Button
									color='danger'
									variant='light'
									onPress={onClose}
								>
									Close
								</Button>
								<Button
									color='danger'
									onPress={handleDelete}
									isLoading={deleteQuiz.isPending}
								>
									Delete
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</Card>
	)
}
