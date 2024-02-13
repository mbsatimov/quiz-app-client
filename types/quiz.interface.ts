export interface IQuizItem {
	id: number
	attachment: string | null
	question: string
	options: {
		option: string
		isCorrect: boolean
	}[]
}

export interface IQuiz {
	id: number
	title: string
	description: string | null
	startDateTime: string
	endDateTime: string
	duration: number
	quizItems: IQuizItem[]
}

export interface IQuizPreview
	extends Omit<IQuiz, 'description' | 'quizItems'> {}

export interface ICreateQuiz extends Omit<IQuiz, 'id'> {}
