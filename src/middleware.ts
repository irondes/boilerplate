import { NextResponse, type NextRequest } from "next/server";
import { stackServerApp } from "./stack";
// import { logtoMiddleware } from "./lib/logto/middleware";

const puplicRoutes = ["/handler/sign-in", "/handler/sign-out"];

export async function middleware(request: NextRequest) {
	const user = await stackServerApp.getUser();
	if (!user) {
		return NextResponse.redirect(new URL("/handler/sign-in", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: "/cadastros/:path*",
};
