'use client'

import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@nextui-org/react'

import { NavbarItem as NextUINavbarItem } from '@nextui-org/navbar'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarItemProps extends ButtonProps {
	item: {
		label: string
		href: string
	}
}

export function NavbarItem({ item, className, ...props }: NavbarItemProps) {
	const pathname = usePathname()

	return (
		<NextUINavbarItem
			key={item.href}
			isActive={pathname === item.href}
		>
			<Button
				as={Link}
				variant={pathname === item.href ? 'flat' : 'light'}
				color='primary'
				className={cn(
					'text-lg data-[active=true]:font-semibold data-[active=true]:text-primary',
					className,
				)}
				href={item.href}
				{...props}
			>
				{item.label}
			</Button>
		</NextUINavbarItem>
	)
}
