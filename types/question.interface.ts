import { IOption } from './option.interface'

export interface IQuestion {
	id: number
	pictureUrl: string | null
	question: string
	options: IOption[]
}

export interface ICreateQuestion {
	pictureUrl: string | null
	question: string
	options: Omit<IOption, 'id'>[]
}
