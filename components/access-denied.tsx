import { PAGES } from '@/const/routes'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export const AccessDenied = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='flex w-full flex-col items-center space-y-5 rounded-md border bg-accent/50 p-6 backdrop-blur-md sm:p-14 md:max-w-[700px] md:p-20'>
				<h1 className='text-7xl font-extrabold md:text-9xl'>403</h1>
				<h2 className='text-center text-2xl font-bold uppercase md:text-3xl'>
					Opps! page access denied
				</h2>
				<p className='text-center'>
					Sorry, you don&apos;t have access to this page. Only teacher with
					admin role can access this page.
				</p>
				<Button
					as={Link}
					href={PAGES.TEACHER_QUIZZES}
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
