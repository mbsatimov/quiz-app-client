'use client'

import { Button } from '@nextui-org/react'
import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div className='mt-20 flex h-full flex-col items-center justify-center'>
			<div className='flex w-full flex-col items-center space-y-5 rounded-md border bg-accent/50 p-6 backdrop-blur-md sm:p-14 md:max-w-[700px] md:p-20'>
				<h1 className='text-7xl font-extrabold md:text-9xl'>500</h1>
				<h2 className='text-center text-2xl font-bold uppercase md:text-3xl'>
					Opps! Something went wrong
				</h2>
				<p className='text-center'>
					Sorry, the request could not be processed. If you think something is
					broken, report a problem.
				</p>
				<div className='flex w-full flex-col gap-4 sm:flex-row sm:justify-center'>
					<Button
						className='uppercase'
						variant='flat'
						color='primary'
						onClick={() => reset()}
					>
						Try again
					</Button>
				</div>
			</div>
		</div>
	)
}
