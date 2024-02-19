import { $api } from '@/api/interceptor'
import { IApiResponse } from '@/types/response/api-response.interface'
import { ICreateUser, IUser } from '@/types/user.interface'
import { AxiosResponse } from 'axios'

const USER_URL = '/users'

export const UserService = {
	getAll: (): Promise<AxiosResponse<IUser[]>> => {
		return $api.get<IUser[]>(USER_URL)
	},

	getById: (id: number): Promise<AxiosResponse<IUser>> => {
		return $api.get<IUser>(`${USER_URL}/${id}`)
	},

	create: (data: ICreateUser): Promise<AxiosResponse<IApiResponse>> => {
		return $api.post<IApiResponse>(USER_URL, data)
	},

	update: ({
		id,
		data,
	}: {
		id: number
		data: ICreateUser
	}): Promise<AxiosResponse<IApiResponse>> => {
		return $api.put<IApiResponse>(`${USER_URL}/${id}`, data)
	},

	delete: (id: number): Promise<AxiosResponse<IApiResponse>> => {
		return $api.delete<IApiResponse>(`${USER_URL}/${id}`)
	},
}
