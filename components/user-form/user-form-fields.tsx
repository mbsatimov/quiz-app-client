import { TCreateUser } from '@/lib/validation/user-schema'
import { Input, InputProps } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'

interface UserFormFieldsProps extends Omit<InputProps, 'form'> {
	form: UseFormReturn<TCreateUser>
}

export const UserFormFields: React.FC<UserFormFieldsProps> = ({ form }) => {
	const [isVisible, setIsVisible] = React.useState(false)

	const errors = form.formState.errors

	return (
		<>
			<Input
				{...form.register('firstname')}
				color='primary'
				label='Firstname'
				labelPlacement='outside'
				isInvalid={!!errors.firstname}
				defaultValue={form.getValues().firstname}
				errorMessage={errors.firstname?.message}
			/>
			<Input
				{...form.register('lastname')}
				color='primary'
				label='Lastname'
				labelPlacement='outside'
				isInvalid={!!errors.lastname}
				defaultValue={form.getValues().lastname}
				errorMessage={errors.lastname?.message}
			/>
			<Input
				{...form.register('login')}
				color='primary'
				label='Login'
				labelPlacement='outside'
				isInvalid={!!errors.login}
				defaultValue={form.getValues().login}
				errorMessage={errors.login?.message}
			/>
			<Input
				{...form.register('password')}
				color='primary'
				label='Password'
				labelPlacement='outside'
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
			<Input
				{...form.register('confirmPassword')}
				color='primary'
				label='Confirm password'
				labelPlacement='outside'
				isInvalid={!!errors.confirmPassword}
				defaultValue={form.getValues().confirmPassword}
				errorMessage={errors.confirmPassword?.message}
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
		</>
	)
}
