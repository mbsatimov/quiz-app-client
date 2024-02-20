'use client'

import { Loading } from '@/components/loading'
import { EditUserForm } from '@/components/user-form/edit-user-form'
import { useDeleteUser, useGetUsers } from '@/hooks/use-user'
import {
	Button,
	Card,
	CardBody,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { Trash } from 'lucide-react'

export const UserList = () => {
	const users = useGetUsers()
	const deleteUser = useDeleteUser()

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const handleDelete = (id: number) => {
		deleteUser.mutateAsync(id).then(() => onOpenChange())
	}

	if (users.isLoading) return <Loading />

	if (!users.isSuccess) throw new Error()

	return (
		<div className='space-y-4'>
			{users.data.map((user) => (
				<Card
					key={user.id}
					shadow='sm'
				>
					<CardBody className='flex-row items-center justify-between'>
						<p className='text-lg font-semibold'>
							{user.firstName} {user.lastName}
						</p>
						<div className='flex gap-2'>
							<EditUserForm user={user} />
							<Button
								variant='flat'
								isIconOnly
								size='sm'
								color='danger'
								onPress={onOpen}
							>
								<Trash size={18} />
							</Button>
							<Modal
								isOpen={isOpen}
								onOpenChange={onOpenChange}
								backdrop='blur'
							>
								<ModalContent>
									{(onClose) => (
										<>
											<ModalHeader className='flex flex-col gap-1'>
												Delete Teacher
											</ModalHeader>
											<ModalBody>
												<p>Deleting teacher will delete all quizzes created by this teacher.</p>
											</ModalBody>
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
													onPress={() => handleDelete(user.id)}
													isLoading={deleteUser.isPending}
												>
													Delete
												</Button>
											</ModalFooter>
										</>
									)}
								</ModalContent>
							</Modal>
						</div>
					</CardBody>
				</Card>
			))}
		</div>
	)
}
