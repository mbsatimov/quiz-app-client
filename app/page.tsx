import { PAGES } from '@/const/routes'
import { Button, Link } from '@nextui-org/react'

export default function HomePage() {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<div className='mb-4 space-y-2'>
				<h1 className='text-center text-3xl font-bold'>Welcome to Quiz App</h1>
				<p className='text-center'>Please, choose your role to start</p>
			</div>
			<div className='flex flex-col gap-6 md:flex-row'>
				<Button
					as={Link}
					href={PAGES.TEACHER_QUIZZES}
					size='lg'
					variant='flat'
					color='success'
				>
					I am a teacher
				</Button>
				<Button
					as={Link}
					href={PAGES.STUDENT_QUIZZES}
					size='lg'
					variant='flat'
					color='primary'
				>
					I am a student
				</Button>
			</div>
		</div>
	)
}
