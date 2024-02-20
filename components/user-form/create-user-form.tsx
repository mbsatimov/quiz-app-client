'use client'

import { useCreateUser } from '@/hooks/use-user'
import { CreateUserSchema, TCreateUser } from '@/lib/validation/user-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { UserFormFields } from './user-form-fields'

export const CreateUserForm = () => {
	const createUser = useCreateUser()
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const form = useForm<TCreateUser>({
		resolver: zodResolver(CreateUserSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			username: '',
			password: '',
		},
	})

	const onSubmit = (data: TCreateUser) => {
		const { confirmPassword, ...rest } = data

		createUser.mutateAsync(rest).then(() => onOpenChange())
	}

	return (
		<>
			<Button
				onClick={onOpen}
				color='primary'
				variant='flat'
			>
				Add new Teacher
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				backdrop='blur'
			>
				<ModalContent>
					{(onClose) => (
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<ModalHeader className='flex flex-col gap-1'>
								Add New Teacher
							</ModalHeader>
							<ModalBody>
								<UserFormFields form={form} />
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
									variant='flat'
									color='success'
									type='submit'
									isLoading={createUser.isPending}
								>
									Save
								</Button>
							</ModalFooter>
						</form>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
