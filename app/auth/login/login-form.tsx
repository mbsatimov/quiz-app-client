'use client'

import { useLogin } from '@/hooks/use-auth'
import { LoginSchema, TLogin } from '@/lib/validation/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
} from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
	const [isVisible, setIsVisible] = React.useState(false)

	const login = useLogin()
	const form = useForm<TLogin>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	})

	const handleSubmit = (data: TLogin) => {
		login.mutate(data)
	}

	const errors = form.formState.errors

	return (
		<form onSubmit={form.handleSubmit(handleSubmit)}>
			<Card shadow='sm'>
				<CardHeader className='flex-col'>
					<h1 className='mb-3 text-3xl font-semibold'>Login</h1>
					<p>
						Enter your credentials. To get access to the system as a teacher.
					</p>
				</CardHeader>
				<CardBody className='space-y-8'>
					<Input
						{...form.register('username')}
						color='primary'
						label='Username'
						placeholder='Enter your username'
						isInvalid={!!errors.username}
						defaultValue={form.getValues().username}
						errorMessage={errors.username?.message}
					/>
					<Input
						{...form.register('password')}
						color='primary'
						label='Password'
						placeholder='Enter your password'
						isInvalid={!!errors.password}
						defaultValue={form.getValues().password}
						errorMessage={errors.password?.message}
						endContent={
							<button
								className='focus:outline-none'
								type='button'
								onClick={() => setIsVisible(!isVisible)}
							>
								{isVisible ? (
									<Eye
										size={20}
										className='pointer-events-none text-default-400'
									/>
								) : (
									<EyeOff
										size={20}
										className='pointer-events-none text-default-400'
									/>
								)}
							</button>
						}
						type={isVisible ? 'text' : 'password'}
					/>
				</CardBody>
				<CardFooter className='py-8'>
					<Button
						type='submit'
						isLoading={login.isPending}
						color='primary'
						className='w-full'
					>
						Login
					</Button>
				</CardFooter>
			</Card>
		</form>
	)
}
