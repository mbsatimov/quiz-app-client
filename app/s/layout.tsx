import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='h-screen mx-auto py-4 sm:py-6 px-4 md:px-6 max-w-4xl'>
			{children}
		</main>
	)
}
