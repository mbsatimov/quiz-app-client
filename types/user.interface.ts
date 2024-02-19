export const enum EnumRole {
	TEACHER = 'TEACHER',
	SUPER_TEACHER = 'TEACHER_ADMIN',
}

export interface IUser {
	id: number
	firstname: string
	lastname: string
	username: string
	role: EnumRole
}

export interface ICreateUser extends Omit<IUser, 'id' | 'role'> {
	password: string
}
