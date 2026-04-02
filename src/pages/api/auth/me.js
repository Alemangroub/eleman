import jwt from "jsonwebtoken";
import cookie from "cookie";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-dev-only";

export async function GET({ request }) {
    try {
        const cookieHeader = request.headers.get("cookie") || "";
        const cookies = cookie.parse(cookieHeader);
        const token = cookies.auth_token;

        if (!token) {
            return new Response(JSON.stringify({ authenticated: false }), { status: 401 });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        return new Response(JSON.stringify({
            authenticated: true,
            user: {
                userId: decoded.userId,
                email: decoded.email,
                role: decoded.role,
                name: decoded.name
            }
        }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ authenticated: false }), { status: 401 });
    }
}
