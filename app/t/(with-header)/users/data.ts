import { IUser } from '@/types/user.interface'

export const users: IUser[] = [
	{
		id: 1,
		firstname: 'John',
		lastname: 'Doe',
		login: 'johndoe',
		isAdmin: false,
	},
	{
		id: 2,
		firstname: 'Mary',
		lastname: 'Jane',
		login: 'janedoe',
		isAdmin: false,
	},
]
