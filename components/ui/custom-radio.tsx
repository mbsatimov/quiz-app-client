import { cn } from '@/lib/utils'
import { Radio, RadioProps } from '@nextui-org/react'

interface CustomRadioProps extends RadioProps {
	baseClassName?: string
}

export const CustomRadio = (props: CustomRadioProps) => {
	const { children, color, baseClassName, ...otherProps } = props

	return (
		<Radio
			{...otherProps}
			color={color}
			classNames={{
				base: cn(
					'min-w-full border-2 flex m-0 items-center justify-between',
					'flex-row-reverse cursor-pointer rounded-lg gap-4 px-3 py-2',
					baseClassName,
				),
			}}
		>
			{children}
		</Radio>
	)
}
