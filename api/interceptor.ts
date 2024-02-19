import { getAccessToken } from '@/lib/helpers/auth.helper'
import { AuthService } from '@/services/auth.service'
import axios, { CreateAxiosDefaults } from 'axios'

export const API_URL = process.env.API_URL

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	withCredentials: true,
}

const $api = axios.create(options)
const $apiAuth = axios.create({
	baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
	const accessToken = getAccessToken()
	if (config.headers && accessToken) {
		config.headers.Authorization = 'Bearer ' + getAccessToken()
	}
	return config
})

$api.interceptors.response.use(
	(config) => {
		return config
	},
	async (error) => {
		const originalRequest = error.config
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return $api.request(originalRequest)
			} catch (e: any) {
				if (e.response.status === 401) {
					AuthService.logout()
				}
			}
		}
		throw error
	},
)

export { $api, $apiAuth }
