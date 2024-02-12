import { cn } from '@/lib/utils'
import React from 'react'

import ReactInputMask, { Props } from 'react-input-mask'

export interface InputProps extends Props {}

const InputWithMask = React.forwardRef<ReactInputMask, InputProps>(
	({ mask, className, ...props }, ref) => {
		return (
			<ReactInputMask
				ref={ref}
				mask={mask}
				className={cn(
					'relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 h-unit-10 min-h-unit-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 bg-primary-50 data-[hover=true]:bg-primary-100 text-primary group-data-[focus=true]:bg-primary-50 placeholder:text-primary outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background hover:bg-primary-500/20',
					className
				)}
				{...props}
			/>
		)
	}
)
InputWithMask.displayName = 'InputWithMask'

export { InputWithMask }
