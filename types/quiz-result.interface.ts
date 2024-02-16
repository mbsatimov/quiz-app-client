import { IOption } from './option.interface'

export interface IQuestionResultRequest {
	questionId: number
	answerId: number
}

export interface IOverallResult {
	correct: number
	count: number
	percentage: number
}

export interface IDetailedResult {
	id: number
	pictureUrl: string
	question: string
	options: IOption[]
	answerId: number
}
