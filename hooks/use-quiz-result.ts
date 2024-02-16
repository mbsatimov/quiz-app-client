import { QUIZ_RESULT } from '@/const/query-keys'
import { QuizResultService } from '@/services/quiz-result.service'
import { useQuery } from '@tanstack/react-query'

export const useGetOverallResult = (id: number) => {
	return useQuery({
		queryKey: [QUIZ_RESULT, id, 'overall'],
		queryFn: () => QuizResultService.getOverallResult(id),
		select: (data) => data.data,
		enabled: !!id,
	})
}

export const useGetDetailedResults = (id: number) => {
	return useQuery({
		queryKey: [QUIZ_RESULT, id, 'detailed'],
		queryFn: () => QuizResultService.getDetailedResults(id),
		select: (data) => data.data,
		enabled: !!id,
	})
}
