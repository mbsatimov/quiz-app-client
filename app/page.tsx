import { getSession } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation'

export default async function MainPage() {
	const session = await getSession()

	if (session?.user) {
		redirect('/s')
	}
	return (
		<div>
			<a href='/api/auth/login'>Login</a>
		</div>
	)
}
