import { Button } from '@nextui-org/react'
import Link from 'next/link'

function NotFound() {
	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center'>
			<div className='flex w-full flex-col items-center space-y-5 rounded-md border bg-accent/50 p-6 backdrop-blur-md sm:p-14 md:max-w-[700px] md:p-20'>
				<h1 className='text-7xl font-extrabold md:text-9xl'>404</h1>
				<h2 className='text-center text-2xl font-bold uppercase md:text-3xl'>
					Opps! page not found
				</h2>
				<p className='text-center'>
					Sorry, the page you are looking for doesn&apos;t exist. If you think
					something is broken, report a problem.
				</p>
				<Button
					as={Link}
					href='/t'
					variant='flat'
					color='primary'
					className='uppercase'
				>
					back to home page
				</Button>
			</div>
		</div>
	)
}

export default NotFound
