/**
 * Client-side authentication helper.
 * Replaces Firebase onAuthStateChanged with a simple API check.
 */

export async function checkAuth() {
  try {
    const response = await fetch('/api/auth/me');
    if (!response.ok) return null;
    const data = await response.json();
    if (data.authenticated) {
      return data.user;
    }
    return null;
  } catch {
    return null;
  }
}

export async function logout() {
  await fetch('/api/auth/logout', { method: 'POST' });
  window.location.href = '/crs';
}
