import { PAGES } from '@/const/routes'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: 'Quiz App',
	description: 'The Quiz App.',
	navItems: [
		{
			label: 'Home',
			href: PAGES.HOME,
		},
		{
			label: 'Create Quiz',
			href: PAGES.CREATE_QUIZ,
		},
	],
}
