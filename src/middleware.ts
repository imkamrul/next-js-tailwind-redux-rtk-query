import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware called");
  const token = request.cookies.get("tokenV1");

  const publicRoute = ["/login"];
  const protectedRoute = ["/dashboard"];

  const baseUrl = request.nextUrl.origin; // Retrieve the origin of the request

  // Redirect to login if no token and trying to access the root path
  //   if (!token && request.nextUrl.pathname === "/") {
  //     return NextResponse.redirect(new URL("/login", baseUrl));
  //   }

  //   if (token && request.nextUrl.pathname === "/") {
  //     return NextResponse.redirect(new URL("/dashboard", baseUrl));
  //   }

  // Redirect to login if no token and trying to access protected routes
  //   if (
  //     !token &&
  //     protectedRoute.some((path) => request.nextUrl.pathname.startsWith(path))
  //   ) {
  //     return NextResponse.redirect(new URL("/login", baseUrl));
  //   }

  // Continue with the request if none of the conditions are met
  return NextResponse.next();
}
