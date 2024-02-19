import { useUpdateUser } from '@/hooks/use-user'
import { CreateUserSchema, TCreateUser } from '@/lib/validation/user-schema'
import { IUser } from '@/types/user.interface'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Button,
	ButtonProps,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { Edit } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { UserFormFields } from './user-form-fields'

interface EditUserFormProps extends ButtonProps {
	user: IUser
}

export const EditUserForm: React.FC<EditUserFormProps> = ({
	user,
	...props
}) => {
	const updateUser = useUpdateUser(user.id)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const form = useForm<TCreateUser>({
		resolver: zodResolver(CreateUserSchema),
		defaultValues: {
			firstname: user.firstname,
			lastname: user.lastname,
			username: user.username,
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit = (data: TCreateUser) => {
		updateUser.mutateAsync({ id: user.id, data }).then(() => onOpenChange())
	}

	return (
		<>
			<Button
				onClick={onOpen}
				isIconOnly
				color='primary'
				size='sm'
				variant='flat'
				{...props}
			>
				<Edit size={18} />
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
									isLoading={updateUser.isPending}
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
