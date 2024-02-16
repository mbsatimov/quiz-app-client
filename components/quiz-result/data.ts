import { IDetailedResult } from '@/types/quiz-result.interface'

export const data: IDetailedResult[] = [
	{
		id: 1,
		question: 'Question 1',
		pictureUrl:
			'https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png',
		options: [
			{
				id: 1,
				label: 'Label 1',
				isCorrect: false,
			},

			{
				id: 2,
				label: 'Label 2',
				isCorrect: false,
			},
			{
				id: 3,
				label: 'Label 3',
				isCorrect: true,
			},
		],
		answerId: 1,
	},
	{
		id: 2,
		question: 'Question 2',
		pictureUrl: '',
		options: [
			{
				id: 1,
				label: 'Label 1',
				isCorrect: false,
			},

			{
				id: 2,
				label: 'Label 2',
				isCorrect: false,
			},
			{
				id: 3,
				label: 'Label 3',
				isCorrect: true,
			},
		],
		answerId: 3,
	},
]
