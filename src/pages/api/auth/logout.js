import { clearAuthCookie } from "../../../lib/server-auth.js";

export async function POST() {
    const headers = new Headers();
    headers.append("Set-Cookie", clearAuthCookie());

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
}
