import { cn } from '@/lib/utils'
import { Radio, RadioProps } from '@nextui-org/react'

export const CustomRadio = (props: RadioProps) => {
	const { children, color, ...otherProps } = props

	return (
		<Radio
			{...otherProps}
			color={color}
			classNames={{
				base: cn(
					'min-w-full border-2 flex m-0 items-center justify-between',
					'flex-row-reverse cursor-pointer rounded-lg gap-4 px-3 py-2',
					`data-[selected=true]:border-${color ? color : 'primary'}`,
				),
			}}
		>
			{children}
		</Radio>
	)
}
