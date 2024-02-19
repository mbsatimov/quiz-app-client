'use client'

import { EditUserForm } from '@/components/user-form/edit-user-form'
import { useGetUsers } from '@/hooks/use-user'
import { Card, CardBody } from '@nextui-org/react'
import { Loader2 } from 'lucide-react'
import { users } from './data'

export const UserList = () => {
	// const users = useGetUsers()

	// if (users.isLoading) return <Loader2 className='animate-spin' />

	// if (!users.isSuccess)
	// 	return (
	// 		<p className='text-center text-lg text-red-500'>Something went wrong</p>
	// 	)

	return (
		<div className='space-y-4'>
			{users.map((user) => (
				<Card
					key={user.id}
					shadow='sm'
				>
					<CardBody className='flex-row items-center justify-between'>
						<p className='text-lg font-semibold'>
							{user.firstname} {user.lastname}
						</p>
						<EditUserForm user={user} />
					</CardBody>
				</Card>
			))}
		</div>
	)
}
