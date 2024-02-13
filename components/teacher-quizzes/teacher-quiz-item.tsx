'use client'

import { PAGES } from '@/const/routes'
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
import { format } from 'date-fns'
import { Edit, MoreHorizontal, Trash, View } from 'lucide-react'
import React from 'react'

interface TeacherQuizItemProps {
	teacherQuizItem: IQuizPreview
}

export const TeacherQuizItem: React.FC<TeacherQuizItemProps> = ({
	teacherQuizItem: teacherQuizItem,
}) => {
	return (
		<Card shadow='sm'>
			<CardHeader className='justify-between'>
				<h3 className='text-lg font-semibold'>{teacherQuizItem.title}</h3>
				<Dropdown placement='bottom-end'>
					<DropdownTrigger>
						<Button variant='light' isIconOnly size='sm'>
							<MoreHorizontal />
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label='Action event example'
						onAction={(key) => alert(key)}
					>
						<DropdownItem
							key='demo'
							aria-label='Dropdown menu with icons'
							startContent={<View size={18} />}
						>
							Demonstrate
						</DropdownItem>
						<DropdownItem
							key='new'
							aria-label='Dropdown menu with icons'
							startContent={<Edit size={18} />}
						>
							Edit quiz
						</DropdownItem>
						<DropdownItem
							key='delete'
							aria-label='Dropdown menu with icons'
							startContent={<Trash size={18} />}
							className='text-danger'
							color='danger'
						>
							Delete quiz
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</CardHeader>
			<CardBody>
				<div className='flex justify-between items-end'>
					<div>
						<div>Duration: {teacherQuizItem.duration} min</div>
						<span className='text-sm'>
							{format(
								new Date(teacherQuizItem.startDateTime),
								'dd MMM yyyy HH:mm'
							)}
							{' - '}
							{format(
								new Date(teacherQuizItem.endDateTime),
								'dd MMM yyyy HH:mm'
							)}
						</span>
					</div>
					<div>
						<Button
							href={PAGES.QUIZZES}
							as={Link}
							color='primary'
							variant='flat'
						>
							Student results
						</Button>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
