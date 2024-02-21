import { useLogout } from '@/hooks/use-auth'
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
import React from 'react'

interface LogoutModalProps extends ButtonProps {
	children: React.ReactNode
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ ...props }) => {
	const logout = useLogout()

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const handleLogout = () => {
		logout()
		onOpenChange()
	}

	return (
		<>
			<Button
				onClick={onOpen}
				{...props}
			/>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Logout</ModalHeader>
							<ModalBody>Are you sure you want to logout?</ModalBody>
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
									onPress={handleLogout}
								>
									Logout
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
