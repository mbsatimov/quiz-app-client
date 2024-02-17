'use client'

import { PAGES } from '@/const/routes'
import { useDeleteQuiz } from '@/hooks/use-quiz'
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
} from '@nextui-org/react'
import { Edit, MoreHorizontal, Trash } from 'lucide-react'
import React from 'react'

interface TeacherQuizItemProps {
	teacherQuizItem: IQuizPreview
}

export const TeacherQuizItem: React.FC<TeacherQuizItemProps> = ({
	teacherQuizItem: teacherQuizItem,
}) => {
	const deleteQuiz = useDeleteQuiz()

	const handleDelete = () => {
		deleteQuiz.mutate(teacherQuizItem.id)
	}

	return (
		<Card shadow='sm'>
			<CardHeader className='justify-between'>
				<h3 className='text-lg font-semibold'>{teacherQuizItem.title}</h3>
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
							href={`${PAGES.EDIT_QUIZ}/${teacherQuizItem.id}`}
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
							onPress={handleDelete}
						>
							Delete quiz
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</CardHeader>
			<CardBody>
				<div className='flex items-end justify-between'>
					<div>
						<p className='text-default-500'>{teacherQuizItem.description}</p>
					</div>
					<div>
						<Button
							href={`${PAGES.QUIZZES}/${teacherQuizItem.id}`}
							as={Link}
							color='success'
							variant='flat'
						>
							Start Quiz
						</Button>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
