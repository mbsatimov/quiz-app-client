import { Navbar } from '@/components/navbar/navbar'
import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import '@/styles/globals.css'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Toaster } from 'sonner'
import { Providers } from './providers'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: '/quiz-logo.png',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
					<div className='relative flex flex-col min-h-screen'>
						<Navbar />
						<main className='container mx-auto pt-6 md:pt-12 px-4 md:px-6 flex-grow max-w-4xl'>
							{children}
						</main>
					</div>
				</Providers>
				<Toaster position='top-center' richColors closeButton />
			</body>
		</html>
	)
}
