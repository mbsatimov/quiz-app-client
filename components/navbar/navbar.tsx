'use client'

import {
	NavbarBrand,
	NavbarContent,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar,
	NavbarItem as NextUINavbarItem,
} from '@nextui-org/navbar'

import { siteConfig } from '@/config/site'
import NextLink from 'next/link'

import { LogOut } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { LogoutModal } from '../logout-modal'
import { NavbarItem } from './navbar-item'

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	return (
		<NextUINavbar
			maxWidth='lg'
			position='sticky'
			className='bg-primary-500/20'
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent>
				<NavbarBrand
					as='li'
					className='max-w-fit gap-3'
				>
					<NextLink href='/'>
						<Image
							src='/quiz-logo.png'
							width={50}
							height={50}
							alt='quiz logo'
						/>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent
				justify='center'
				className='hidden sm:flex'
			>
				<ul className='flex gap-4'>
					{siteConfig.navItems.map((item) => (
						<NavbarItem
							key={item.href}
							item={item}
						/>
					))}
				</ul>
				<NextUINavbarItem>
					<LogoutModal
						variant='flat'
						color='danger'
						startContent={<LogOut size={18} />}
					>
						Logout
					</LogoutModal>
				</NextUINavbarItem>
			</NavbarContent>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden'
			/>
			<NavbarMenu className='flex items-center justify-center gap-4'>
				{siteConfig.navItems.map((item) => (
					<NavbarMenuItem key={item.href}>
						<NavbarItem
							key={item.href}
							item={item}
							className='text-2xl'
							size='lg'
							onPress={() => setIsMenuOpen(false)}
						/>
					</NavbarMenuItem>
				))}
				<NavbarMenuItem>
					<LogoutModal
						color='danger'
						variant='flat'
						startContent={<LogOut />}
					>
						Logout
					</LogoutModal>
				</NavbarMenuItem>
			</NavbarMenu>
		</NextUINavbar>
	)
}
