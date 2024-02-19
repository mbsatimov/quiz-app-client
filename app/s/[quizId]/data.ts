import { IQuiz } from '@/types/quiz.interface'

export const data: IQuiz = {
	id: 1,
	title: 'Quiz 1',
	description:
		'lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur adipiscing elit',
	isVisible: true,
	questions: [
		{
			id: 1,
			question: 'Question 1',
			pictureUrl: undefined,
			options: [
				{
					id: 1,
					label: 'Label 1',
					isCorrect: false,
				},
				{
					id: 2,
					label: 'Label 2',
					isCorrect: true,
				},
			],
		},
		{
			id: 2,
			question: 'Question 2',
			pictureUrl: undefined,
			options: [
				{
					id: 3,
					label: 'Label 1',
					isCorrect: false,
				},
				{
					id: 4,
					label: 'Label 2',
					isCorrect: true,
				},
				{
					id: 5,
					label: 'Label 3',
					isCorrect: false,
				},
			],
		},
		{
			id: 3,
			question: 'Question 3',
			pictureUrl: undefined,
			options: [
				{
					id: 6,
					label: 'Label 1',
					isCorrect: false,
				},
				{
					id: 7,
					label: 'Label 2',
					isCorrect: true,
				},
				{
					id: 8,
					label: 'Label 3',
					isCorrect: false,
				},
			],
		},
		{
			id: 4,
			question: 'Question 4',
			pictureUrl:
				'https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png',
			options: [
				{
					id: 9,
					label: 'Label 1',
					isCorrect: true,
				},
				{
					id: 10,
					label: 'Label 4',
					isCorrect: false,
				},
				{
					id: 11,
					label: 'Label 2',
					isCorrect: false,
				},
				{
					id: 12,
					label: 'Label 3',
					isCorrect: false,
				},
			],
		},
		{
			id: 5,
			question: 'Question 4',
			pictureUrl:
				'https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png',
			options: [
				{
					id: 13,
					label: 'Label 1',
					isCorrect: true,
				},
				{
					id: 14,
					label: 'Label 2',
					isCorrect: false,
				},
				{
					id: 15,
					label: 'Label 3',
					isCorrect: false,
				},
			],
		},
		{
			id: 8,
			question: 'Question 4',
			pictureUrl:
				'https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png',
			options: [
				{
					id: 16,
					label: 'Label 1',
					isCorrect: true,
				},
				{
					id: 17,
					label: 'Label 2',
					isCorrect: false,
				},
				{
					id: 18,
					label: 'Label 3',
					isCorrect: false,
				},
			],
		},
	],
}
