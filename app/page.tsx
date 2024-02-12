import { TeacherTestList } from '@/components/teacher-test-list.tsx/teacher-test-list'
import { PAGES } from '@/const/routes'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function Home() {
	return (
		<section className='space-y-4'>
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
