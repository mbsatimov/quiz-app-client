import { ICreateQuestion, IQuestion } from '@/types/question.interface'

export interface IQuiz {
	id: number
	title: string
	description: string | null
	isVisible: boolean
	duration: number
	questions: IQuestion[]
}

export interface IQuizPreview extends Omit<IQuiz, 'questions'> {}

export interface ICreateQuiz extends Omit<IQuiz, 'id' | 'questions'> {
	questions: ICreateQuestion[]
}
