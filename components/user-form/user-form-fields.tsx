import { TCreateUser } from '@/lib/validation/user-schema'
import { Input, InputProps } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'
import React from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'

interface UserFormFieldsProps extends Omit<InputProps, 'form'> {
	form: UseFormReturn<TCreateUser>
}

export const UserFormFields: React.FC<UserFormFieldsProps> = ({ form }) => {
	const [isVisible, setIsVisible] = React.useState(false)

	const errors = form.formState.errors

	return (
		<>
			<Controller
				control={form.control}
				name='firstName'
				render={({ field }) => (
					<Input
						{...field}
						color='primary'
						label='Firstname'
						labelPlacement='outside'
						isInvalid={!!errors.firstName}
						defaultValue={form.getValues().firstName}
						errorMessage={errors.firstName?.message}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='lastName'
				render={({ field }) => (
					<Input
						{...field}
						color='primary'
						label='Lastname'
						labelPlacement='outside'
						isInvalid={!!errors.lastName}
						defaultValue={form.getValues().lastName}
						errorMessage={errors.lastName?.message}
					/>
				)}
			/>
			<Controller
				control={form.control}
				name='username'
				render={({ field }) => (
					<Input
						{...field}
						color='primary'
						label='Username'
						labelPlacement='outside'
						isInvalid={!!errors.username}
						defaultValue={form.getValues().username}
						errorMessage={errors.username?.message}
					/>
				)}
			/>
			<Input
				{...form.register('password')}
				color='primary'
				label='Password'
				labelPlacement='outside'
				isInvalid={!!errors.password}
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
