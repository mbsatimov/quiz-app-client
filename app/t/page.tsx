import { title } from '@/components/primitives'
import { TeacherTestList } from '@/components/teacher-quizzes/teacher-quiz-list'
import { PAGES } from '@/const/routes'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function Home() {
	return (
		<section className='space-y-4 max-w-2xl mx-auto'>
			<h1
				className={title({ size: 'sm', className: 'text-center block mb-6' })}
			>
				Quizzes
			</h1>
			<TeacherTestList />
			<Button
				as={Link}
				href={PAGES.CREATE_QUIZ}
				radius='full'
				variant='shadow'
				color='primary'
				className='mx-auto flex w-fit'
			>
				Create Quiz
			</Button>
		</section>
	)
}
