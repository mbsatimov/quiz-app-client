import { IOption } from './option.interface'

export interface IQuestion {
	id: number
	pictureUrl: string | undefined
	question: string
	options: IOption[]
}

export interface ICreateQuestion {
	pictureUrl: string | undefined
	question: string
	options: Omit<IOption, 'id'>[]
}
