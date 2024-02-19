import { CreateUserForm } from '@/components/user-form/create-user-form'
import { UserList } from './user-list'

export default function UsersPage() {
	return (
		<div className='mx-auto max-w-xl space-y-4'>
			<CreateUserForm />
			<UserList />
		</div>
	)
}
