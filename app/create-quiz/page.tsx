import { title } from '@/components/primitives'
import { CreateQuizForm } from '@/components/quiz-form/create-quiz-form'

export default function CreateQuizPage() {
	return (
		<div>
			<h1 className={title({ size: 'sm', className: 'text-center block' })}>
				Create Quiz
			</h1>
			<div className='mx-auto max-w-xl py-6'>
				<CreateQuizForm />
			</div>
		</div>
	)
}
