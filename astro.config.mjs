import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server', // Set to 'server' for SSR (Server-Side Rendering)
  adapter: node({ mode: 'standalone' }), // Add the Node.js adapter in standalone mode
  integrations: [tailwind(), react()]
});