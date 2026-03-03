
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ cookies }) => {
  // Clear the session cookie to log the user out
  cookies.delete("__session", {
    path: "/",
  });
  
  // Return a success response
  return new Response(JSON.stringify({ message: "Logout successful" }), {
    status: 200,
  });
};
