export const enum EnumRole {
	TEACHER = 'TEACHER',
	SUPER_TEACHER = 'SUPER_TEACHER',
}

export interface IUser {
	id: number
	firstName: string
	lastName: string
	username: string
	role: EnumRole
}

export interface ICreateUser extends Omit<IUser, 'id' | 'role'> {
	password: string
}
