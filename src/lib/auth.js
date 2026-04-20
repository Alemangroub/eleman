/**
 * Client-side authentication helper.
 * Works with both cookies and localStorage for maximum compatibility.
 */

export async function checkAuth() {
  try {
    const token = localStorage.getItem('auth_token');
    const headers = {};

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch('/api/auth/me', { headers });
    if (!response.ok) return null;
    const data = await response.json();
    if (data.authenticated) {
      return data.user;
    }
    return null;
  } catch (error) {
    console.error('Auth check error:', error);
    return null;
  }
}

export async function logout() {
  localStorage.removeItem('auth_token');
  await fetch('/api/auth/logout', { method: 'GET' }); // غيرناه لـ GET لضمان التوافق مع الاستضافة
  window.location.href = '/crs';
}

export function setAuthToken(token) {
  localStorage.setItem('auth_token', token);
}

export function getAuthHeaders(additionalHeaders = {}) {
  const token = localStorage.getItem('auth_token');
  const headers = { ...additionalHeaders };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}
