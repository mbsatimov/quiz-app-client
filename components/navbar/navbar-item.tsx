'use client'

import { cn } from '@/lib/utils'
import { Button } from '@nextui-org/react'

import { NavbarItem as NextUINavbarItem } from '@nextui-org/navbar'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavbarItemProps {
	item: {
		label: string
		href: string
	}
}

export function NavbarItem({ item }: NavbarItemProps) {
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
				)}
				href={item.href}
			>
				{item.label}
			</Button>
		</NextUINavbarItem>
	)
}
