'use client'

import { QUIZ_QUERY_KEY } from '@/const/query-keys'
import { QuizService } from '@/services/quiz.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useGetAllQuizzes = () => {
	return useQuery({
		queryKey: [QUIZ_QUERY_KEY],
		queryFn: QuizService.getAll,
		select: (data) => data.data,
	})
}

export const useGetAllQuizzesOfCurrentTeacher = () => {
	return useQuery({
		queryKey: [QUIZ_QUERY_KEY, 'teacher'],
		queryFn: QuizService.getAllOfCurrentTeacher,
		select: (data) => data.data,
	})
}

export const useGetAllVisibleQuizzes = () => {
	return useQuery({
		queryKey: [QUIZ_QUERY_KEY, { isVisible: true }],
		queryFn: QuizService.getAllVisible,
		select: (data) => data.data,
	})
}

export const useGetQuizById = (id: number) => {
	return useQuery({
		queryKey: [QUIZ_QUERY_KEY, id],
		queryFn: () => QuizService.getById(id),
		select: (data) => data.data,
	})
}

export const useGetQuizQuestionsById = (id: number) => {
	return useQuery({
		queryKey: [QUIZ_QUERY_KEY, id],
		queryFn: () => QuizService.getQuestionsById(id),
		select: (data) => data.data,
		enabled: !!id,
	})
}

export const useGetVisibleQuizzesByTeacherId = (teacherId: number) => {
	return useQuery({
		queryKey: [QUIZ_QUERY_KEY, { teacherId }],
		queryFn: () => QuizService.getVisibleByTeacherId(teacherId),
		select: (data) => data.data,
	})
}

export const useCreateQuiz = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: QuizService.create,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUIZ_QUERY_KEY] })
			toast.success('Quiz created successfully 😏')
		},
		onError: () => {
			toast.error('Quiz creation failed 😕')
		},
	})
}

export const useToggleQuizVisibility = (id: number, isVisible: boolean) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: QuizService.toggleVisibility,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUIZ_QUERY_KEY] })
			queryClient.invalidateQueries({ queryKey: [QUIZ_QUERY_KEY, id] })
			toast.success(`Quiz ${isVisible ? 'hidden' : 'visible'}`)
		},
		onError: () => {
			toast.error('Quiz visibility toggle failed 😕')
		},
	})
}

export const useUpdateQuiz = (id: number) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: QuizService.update,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUIZ_QUERY_KEY] })
			queryClient.invalidateQueries({ queryKey: [QUIZ_QUERY_KEY, id] })
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
			queryClient.invalidateQueries({ queryKey: [QUIZ_QUERY_KEY] })
			toast.success('Quiz deleted successfully 👌')
		},
		onError: () => {
			toast.error('Quiz deletion failed 😕')
		},
	})
}
