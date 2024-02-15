export interface IQuestion {
	id: number
	pictureUrl: string | null
	question: string
	options: {
		id: number
		label: string
		isCorrect: boolean | null
	}[]
}

export interface ICreateQuestion {
	pictureUrl: string | null
	question: string
	options: {
		label: string
		isCorrect: boolean
	}[]
}
