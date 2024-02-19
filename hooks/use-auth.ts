'use client'

import { PAGES } from '@/const/routes'
import { AuthService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const useLogin = () => {
	const router = useRouter()
	return useMutation({
		mutationFn: AuthService.login,
		onSuccess: () => {
			toast.success('You have successfully logged in! 😏')

			router.push(PAGES.TEACHER_QUIZZES)
		},
		onError: () => {
			toast.error('Login failed 😕, try again later.')
		},
	})
}

export const useLogout = () => {
	return AuthService.logout
}
