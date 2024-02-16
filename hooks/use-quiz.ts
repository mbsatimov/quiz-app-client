import { QUIZ } from '@/const/query-keys'
import { QuizService } from '@/services/quiz.service.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useGetAllQuizzes = () => {
	return useQuery({
		queryKey: [QUIZ],
		queryFn: QuizService.getAll,
		select: (data) => data.data,
	})
}

export const useGetQuizById = (id: number) => {
	return useQuery({
		queryKey: [QUIZ, id],
		queryFn: () => QuizService.getById(id),
		select: (data) => data.data,
		enabled: !!id,
	})
}

export const useCreateQuiz = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: QuizService.create,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUIZ] })
			toast.success('Quiz created successfully 😏')
		},
		onError: () => {
			toast.error('Quiz creation failed 😕')
		},
	})
}

export const useUpdateQuiz = (id: number) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: QuizService.update,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUIZ] })
			queryClient.invalidateQueries({ queryKey: [QUIZ, id] })
			toast.success('Quiz updated successfully 😉')
		},
		onError: () => {
			toast.error('Quiz update failed 😕')
		},
	})
}

export const useDeleteQuiz = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: QuizService.delete,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUIZ] })
			toast.success('Quiz deleted successfully 👌')
		},
		onError: () => {
			toast.error('Quiz deletion failed 😕')
		},
	})
}
