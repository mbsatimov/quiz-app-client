import { IUser } from './user.interface'

export interface IAuthResponse {
	accessToken: string
	refreshToken: string
	user: IUser
}

export interface ILoginRequest {
	username: string
	password: string
}
