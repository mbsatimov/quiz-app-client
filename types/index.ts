import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number
}

export interface IQuizItem {
	id: string
	attachment: string | null
	question: string | null
	options: {
		option: string
		isCorrect: boolean
	}[]
}

export interface IQuiz {
	id: string
	title: string
	description: string
	startDateTime: string
	endDateTime: string
	duration: number
	quizItems: IQuizItem[]
}

export interface ICreateQuiz extends Omit<IQuiz, 'id'> {}
