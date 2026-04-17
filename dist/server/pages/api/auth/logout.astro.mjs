import { a as clearAuthCookie } from '../../../chunks/server-auth_CR4aO5JM.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST() {
    const headers = new Headers();
    headers.append("Set-Cookie", clearAuthCookie());

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
