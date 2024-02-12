import {
	NavbarBrand,
	NavbarContent,
	Navbar as NextUINavbar,
} from '@nextui-org/navbar'

import { siteConfig } from '@/config/site'
import NextLink from 'next/link'

import Image from 'next/image'
import { NavbarItem } from './navbar-item'

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth='md' position='sticky' className='bg-primary-500/20'>
			<NavbarBrand as='li' className='gap-3 max-w-fit'>
				<NextLink href='/'>
					<Image src='/quiz-logo.png' width={50} height={50} alt='quiz logo' />
				</NextLink>
			</NavbarBrand>
			<NavbarContent justify='center'>
				<ul className='flex gap-4'>
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href} item={item} />
					))}
				</ul>
			</NavbarContent>
			{/* <NextUINavbarItem className='flex gap-2'>
				<ThemeSwitch />
			</NextUINavbarItem> */}
		</NextUINavbar>
	)
}
