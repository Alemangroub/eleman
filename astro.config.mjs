import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server', // Set to 'server' for SSR (Server-Side Rendering)
  integrations: [tailwind(), react()]
});