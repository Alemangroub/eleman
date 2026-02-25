
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

// Determine the adapter based on the environment
const getAdapter = () => {
  if (process.env.VERCEL) {
    return vercel({
      webAnalytics: { enabled: true }
    });
  }
  // Default to node adapter for other environments (local, App Hosting, etc.)
  return node({
    mode: "standalone"
  });
};

export default defineConfig({
  output: "hybrid",
  adapter: getAdapter(),
  integrations: [tailwind()],
  vite: {
    // Vite-specific configurations
    ssr: {
      // Ensure Firebase Admin SDK is externalized during SSR
      external: ['firebase-admin']
    }
  }
});
