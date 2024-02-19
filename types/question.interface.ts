import { IOption } from './option.interface'

export interface IQuestion {
	id: number
	picture: string | null
	question: string
	options: IOption[]
}

export interface ICreateQuestion {
	picture: string | null
	question: string
	options: Omit<IOption, 'id'>[]
}
