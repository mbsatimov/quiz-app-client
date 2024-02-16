import { title } from '@/components/primitives'
import { TeacherQuizList } from '@/components/teacher-quizzes/teacher-quiz-list'
import { PAGES } from '@/const/routes'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function Home() {
	return (
		<section className='mx-auto max-w-2xl space-y-4'>
			<h1
				className={title({ size: 'sm', className: 'mb-6 block text-center' })}
			>
				Quizzes
			</h1>
			<TeacherQuizList />
			<Button
				as={Link}
				href={PAGES.CREATE_QUIZ}
				variant='shadow'
				color='primary'
				className='mx-auto flex w-fit'
			>
				Create Quiz
			</Button>
		</section>
	)
}
