import { $api, $apiAuth } from '@/api/interceptor'
import { IQuestion } from '@/types/question.interface'
import { ICreateQuiz, IQuiz, IQuizPreview } from '@/types/quiz.interface'
import { IApiResponse } from '@/types/response/api-response.interface'
import { AxiosResponse } from 'axios'

const QUIZ_URL = '/quiz'

export const QuizService = {
	getAll: (): Promise<AxiosResponse<IQuizPreview[]>> => {
		return $api.get<IQuizPreview[]>(QUIZ_URL)
	},

	getAllOfCurrentTeacher: (): Promise<AxiosResponse<IQuizPreview[]>> => {
		return $api.get<IQuizPreview[]>(`${QUIZ_URL}/teacher`)
	},

	getAllVisible: (): Promise<AxiosResponse<IQuizPreview[]>> => {
		return $apiAuth.get<IQuizPreview[]>(`/open/visible`)
	},

	getById: (id: number): Promise<AxiosResponse<IQuiz>> => {
		return $api.get<IQuiz>(`${QUIZ_URL}/${id}`)
	},

	getQuestionsById: (id: number): Promise<AxiosResponse<IQuestion[]>> => {
		return $api.get<IQuestion[]>(`/open/${id}`)
	},

	getVisibleByTeacherId: (
		id: number,
	): Promise<AxiosResponse<IQuizPreview[]>> => {
		return $apiAuth.get<IQuizPreview[]>(`/open/visible/${id}`)
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

	toggleVisibility: (id: number): Promise<AxiosResponse<IApiResponse>> => {
		return $api.patch<IApiResponse>(`${QUIZ_URL}/${id}/visible-toggle`)
	},

	delete: (id: number): Promise<AxiosResponse<IApiResponse>> => {
		return $api.delete<IApiResponse>(`${QUIZ_URL}/${id}`)
	},
}
