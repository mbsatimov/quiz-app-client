import { USER_QUERY_KEY } from '@/const/query-keys'
import { UserService } from '@/services/user.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useGetUsers = () => {
	return useQuery({
		queryKey: ['users'],
		queryFn: () => UserService.getAll(),
		select: (data) => data.data,
	})
}

export const useGetUserById = (id: number) => {
	return useQuery({
		queryKey: [USER_QUERY_KEY, id],
		queryFn: () => UserService.getById(id),
		select: (data) => data.data,
		enabled: !!id,
	})
}

export const useCreateUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: UserService.create,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] })
			toast.success('Teacher created successfully 😊')
		},
		onError: () => {
			toast.error('Teacher creation failed 😕')
		},
	})
}

export const useUpdateUser = (id: number) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: UserService.update,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] })
			toast.success('Teacher updated successfully 😉')
		},
		onError: () => {
			toast.error('Teacher update failed 😕')
		},
	})
}

export const useDeleteUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: UserService.delete,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] })
			toast.success('Teacher deleted successfully 👌')
		},
		onError: () => {
			toast.error('Teacher deletion failed 😕')
		},
	})
}
