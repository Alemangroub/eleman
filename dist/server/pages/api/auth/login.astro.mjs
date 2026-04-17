import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { g as getJwtSecretOrThrow, c as createAuthCookie } from '../../../chunks/server-auth_CR4aO5JM.mjs';
export { renderers } from '../../../renderers.mjs';

const LOGIN_WINDOW_MS = 15 * 60 * 1e3;
const MAX_LOGIN_ATTEMPTS = 10;
const loginAttempts = /* @__PURE__ */ new Map();
function getClientKey(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}
function isRateLimited(clientKey) {
  const now = Date.now();
  const entry = loginAttempts.get(clientKey);
  if (!entry || now > entry.resetAt) {
    loginAttempts.set(clientKey, { count: 0, resetAt: now + LOGIN_WINDOW_MS });
    return false;
  }
  return entry.count >= MAX_LOGIN_ATTEMPTS;
}
function recordFailedAttempt(clientKey) {
  const now = Date.now();
  const current = loginAttempts.get(clientKey);
  if (!current || now > current.resetAt) {
    loginAttempts.set(clientKey, { count: 1, resetAt: now + LOGIN_WINDOW_MS });
    return;
  }
  current.count += 1;
  loginAttempts.set(clientKey, current);
}
function clearFailedAttempts(clientKey) {
  loginAttempts.delete(clientKey);
}
async function POST({ request }) {
  try {
    const clientKey = getClientKey(request);
    if (isRateLimited(clientKey)) {
      return new Response(JSON.stringify({ error: "تم تجاوز عدد محاولات تسجيل الدخول، حاول لاحقًا" }), { status: 429 });
    }
    const { email, password } = await request.json();
    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    if (!normalizedEmail || !password) {
      return new Response(JSON.stringify({ error: "الإيميل والباسورد مطلوبين" }), { status: 400 });
    }
    const user = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (!user || !user.password) {
      recordFailedAttempt(clientKey);
      return new Response(JSON.stringify({ error: "بيانات الدخول غير صحيحة" }), { status: 401 });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      recordFailedAttempt(clientKey);
      return new Response(JSON.stringify({ error: "بيانات الدخول غير صحيحة" }), { status: 401 });
    }
    clearFailedAttempts(clientKey);
    const jwtSecret = getJwtSecretOrThrow();
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role, name: user.name },
      jwtSecret,
      { expiresIn: "7d" }
    );
    const headers = new Headers();
    const isDev = false;
    headers.append("Set-Cookie", createAuthCookie(token));
    return new Response(JSON.stringify({
      success: true,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      token: isDev ? token : void 0
    }), { status: 200, headers });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ error: "حدث خطأ في السيرفر" }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
