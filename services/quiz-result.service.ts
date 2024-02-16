import { $api } from '@/api/interceptor'
import { IDetailedResult, IOverallResult } from '@/types/quiz-result.interface'
import { AxiosResponse } from 'axios'

const QUIZ_RESULT_URL = '/quiz-result'

export const QuizResultService = {
	getOverallResult: (id: number): Promise<AxiosResponse<IOverallResult>> => {
		return $api.get<IOverallResult>(`${QUIZ_RESULT_URL}/${id}/overall`)
	},

	getDetailedResults: (
		id: number,
	): Promise<AxiosResponse<IDetailedResult[]>> => {
		return $api.get<IDetailedResult[]>(`${QUIZ_RESULT_URL}/${id}/detailed`)
	},
}
