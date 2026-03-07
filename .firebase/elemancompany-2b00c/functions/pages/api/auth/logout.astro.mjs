export { renderers } from '../../../renderers.mjs';

const POST = async ({ cookies }) => {
  cookies.delete("__session", {
    path: "/"
  });
  return new Response(JSON.stringify({ message: "Logout successful" }), {
    status: 200
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
