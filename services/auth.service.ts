import { $apiAuth } from '@/api/interceptor'
import {
	getRefreshToken,
	removeAccessTokenFromStorage,
	removeCurrentUserFromStorage,
	removeRefreshTokenFromStorage,
	saveAccessTokenToStorage,
	saveCurrentUserToStorage,
	saveRefreshTokenToStorage,
} from '@/lib/helpers/auth.helper'
import { IAuthResponse } from '@/types/auth.interface'
import { AxiosResponse } from 'axios'
import { ILoginRequest } from '../types/auth.interface'

export const enum EnumTokens {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken',
	CURRENT_USER = 'currentUser',
}

const AUTH_URL = '/auth'

export const AuthService = {
	async login(data: ILoginRequest): Promise<AxiosResponse<IAuthResponse>> {
		const response = await $apiAuth.post<IAuthResponse>(
			`${AUTH_URL}/login`,
			data,
		)

		if (response.data.accessToken) {
			saveAccessTokenToStorage(response.data.accessToken)
			saveRefreshTokenToStorage(response.data.refreshToken)
			saveCurrentUserToStorage(response.data.user)
		}

		return response
	},

	async getNewTokens(): Promise<AxiosResponse<IAuthResponse>> {
		const refreshToken = getRefreshToken()
		const response = await $apiAuth.post<IAuthResponse>(
			`${AUTH_URL}/refresh`,
			{},
			{
				headers: {
					Authorization: `Bearer ${refreshToken}`,
				},
			},
		)

		if (response.data.accessToken) {
			saveAccessTokenToStorage(response.data.accessToken)
			saveRefreshTokenToStorage(response.data.refreshToken)
			saveCurrentUserToStorage(response.data.user)
		}

		return response
	},

	logout(): void {
		removeAccessTokenFromStorage()
		removeRefreshTokenFromStorage()
		removeCurrentUserFromStorage()
		window.location.href = '/auth/login'
	},
}
