import { AccessDenied } from '@/components/access-denied'
import { CreateUserForm } from '@/components/user-form/create-user-form'
import { EnumRole, IUser } from '@/types/user.interface'
import { cookies } from 'next/headers'
import { UserList } from './user-list'

export default function UsersPage() {
	const currentUser = JSON.parse(
		cookies().get('currentUser')?.value || 'null',
	) as IUser

	if (!currentUser || currentUser.role !== EnumRole.SUPER_TEACHER)
		return <AccessDenied />

	return (
		<div className='mx-auto max-w-xl space-y-4'>
			<CreateUserForm />
			<UserList />
		</div>
	)
}
