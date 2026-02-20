
import type { APIRoute } from 'astro';
import { auth } from '../../../firebase/admin'; // Corrected import

export const POST: APIRoute = async ({ request, cookies }) => {
  const { idToken } = await request.json();

  // Check if auth was initialized correctly
  if (!auth) {
    return new Response(JSON.stringify({ error: "Firebase auth not initialized" }), { status: 500 });
  }

  try {
    // 7 days
    const expiresIn = 60 * 60 * 24 * 7 * 1000;
    // Use the correctly imported auth object
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    cookies.set("session", sessionCookie, {
      path: "/",
      httpOnly: true,
      secure: true,
      maxAge: expiresIn,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create session cookie" }), { status: 500 });
  }
};
