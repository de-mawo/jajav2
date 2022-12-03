import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const ROLES_ALLOWED_TO_AUTH = ["admin", "judge", "user"];

export default withAuth(
  function middleware(req) {
    // console.log(req);


    //TODO: Refactor this code

    if (
      
    req.nextUrl.pathname.startsWith("/dashboard/settings") &&
        req.nextauth.token?.role !== "admin" 
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } else if (
      req.nextUrl.pathname.startsWith("/dashboard/marking") &&
      req.nextauth.token?.role !== "admin" && req.nextauth.token?.role !== "judge" 
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }else if (
        req.nextUrl.pathname.startsWith("/dashboard/scores") &&
        req.nextauth.token?.role !== "admin" && req.nextauth.token?.role !== "judge" 
      ) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }else if (
        req.nextUrl.pathname.startsWith("/dashboard/users") &&
        req.nextauth.token?.role !== "admin" 
      ) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
  },
  {
    callbacks: {
      authorized: ({ token }) =>
        token?.role !== undefined && ROLES_ALLOWED_TO_AUTH.includes(token.role),
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/dashboard",
  ],
};
