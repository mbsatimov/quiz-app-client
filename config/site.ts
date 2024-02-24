import { PAGES } from '@/const/routes'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: 'PictureEnglish Tutorial',
	description: 'The PictureEnglish Tutorial.',
	navItems: [
		{
			label: 'Home',
			href: PAGES.TEACHER_QUIZZES,
		},
		{
			label: 'Create Quiz',
			href: PAGES.CREATE_QUIZ,
		},
		{
			label: 'Teachers',
			href: PAGES.USERS,
		},
	],
}
