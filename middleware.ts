import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './services/auth.service'
import { IUser } from './types/user.interface'

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl

	const isLoginPage = pathname === '/auth/login'
	// Parse current user from cookies
	const currentUserJSON = req.cookies.get(EnumTokens.CURRENT_USER)?.value
	const currentUser = currentUserJSON
		? (JSON.parse(currentUserJSON) as IUser)
		: null

	const isAuthenticated =
		req.cookies.get(EnumTokens.ACCESS_TOKEN) &&
		req.cookies.get(EnumTokens.REFRESH_TOKEN) &&
		currentUser

	// if (isAuthenticated) {
	// 	if (isLoginPage) {
	// 		return NextResponse.redirect(new URL('/t', req.url))
	// 	}
	// } else {
	// 	if (isLoginPage) {
	// 		return NextResponse.next()
	// 	}
	// 	return NextResponse.redirect(new URL('/auth/login', req.url))
	// }
}

// export const config = {
// 	matcher: ['/t/:path*', '/auth/:path*'],
// }
