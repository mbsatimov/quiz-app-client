'use client'

import { Loading } from '@/components/loading'
import { EditUserForm } from '@/components/user-form/edit-user-form'
import { useGetUsers } from '@/hooks/use-user'
import { Card, CardBody } from '@nextui-org/react'

export const UserList = () => {
	const users = useGetUsers()

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
							{user.firstname} {user.lastname}
						</p>
						<EditUserForm user={user} />
					</CardBody>
				</Card>
			))}
		</div>
	)
}
