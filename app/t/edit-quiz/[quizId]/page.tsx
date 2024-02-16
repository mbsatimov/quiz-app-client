import { title } from '@/components/primitives'
import { EditQuizForm } from '@/components/quiz-form/edit-quiz-form'

export default function EditQuizPage({
	params: { quizId },
}: {
	params: { quizId: string }
}) {
	return (
		<div>
			<h1 className={title({ size: 'sm', className: 'block text-center' })}>
				Edit Quiz
			</h1>
			<div className='mx-auto max-w-xl py-6'>
				<EditQuizForm quizId={Number(quizId)} />
			</div>
		</div>
	)
}
