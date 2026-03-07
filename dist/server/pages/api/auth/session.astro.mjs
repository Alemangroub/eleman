import { a as auth } from '../../../chunks/admin_B4VhlVdo.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies }) => {
  const { idToken } = await request.json();
  if (!auth) {
    return new Response(JSON.stringify({ error: "Firebase auth not initialized" }), { status: 500 });
  }
  try {
    const expiresIn = 60 * 60 * 24 * 7 * 1e3;
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    cookies.set("session", sessionCookie, {
      path: "/",
      httpOnly: true,
      secure: true,
      maxAge: expiresIn
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create session cookie" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
