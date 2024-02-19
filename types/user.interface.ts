export interface IUser {
	id: number
	firstname: string
	lastname: string
	login: string
	isAdmin: boolean
}

export interface ICreateUser {
	firstname: string
	lastname: string
	login: string
	password: string
}
