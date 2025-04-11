import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async authorized({ token }) {
      // Ha nincs token, nem jelentkezett be
      if (!token) return false;

      // Csak akkor engedjük tovább, ha admin
      return token?.role === "admin";
    },
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
