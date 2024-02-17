import { Navbar } from '@/components/navbar/navbar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className='container mx-auto pt-6 md:pt-12 px-4 md:px-6 flex-grow max-w-4xl'>
				{children}
			</main>
		</>
	)
}
