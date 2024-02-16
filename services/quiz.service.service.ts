import { $api } from '@/api/interceptor'
import { ICreateQuiz, IQuiz, IQuizPreview } from '@/types/quiz.interface'
import { IApiResponse } from '@/types/response/api-response.interface'
import { AxiosResponse } from 'axios'

const QUIZ_URL = 'quiz'

export const QuizService = {
	getAll: (): Promise<AxiosResponse<IQuizPreview[]>> => {
		return $api.get<IQuizPreview[]>(QUIZ_URL)
	},

	getById: (id: number): Promise<AxiosResponse<IQuiz>> => {
		return $api.get<IQuiz>(`${QUIZ_URL}/${id}`)
	},

	create: (data: ICreateQuiz): Promise<AxiosResponse<IApiResponse>> => {
		return $api.post<IApiResponse>(QUIZ_URL, data)
	},

	update: ({
		id,
		data,
	}: {
		id: number
		data: ICreateQuiz
	}): Promise<AxiosResponse<IApiResponse>> => {
		return $api.put<IApiResponse>(`${QUIZ_URL}/${id}`, data)
	},

	delete: (id: number): Promise<AxiosResponse<IApiResponse>> => {
		return $api.delete<IApiResponse>(`${QUIZ_URL}/${id}`)
	},
}
