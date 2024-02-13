export interface IStudentQuiz {
	id: number
	title: string
	description: string | null
	startDateTime: string
	endDateTime: string
	duration: number
	quizItems: IStudentQuizItem[]
}

export interface IStudentQuizItem {
	id: number
	attachment: string | null
	question: string
	options: {
		option: string
		isCorrect: null
	}[]
}
