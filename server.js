import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();

// Serve static assets from the 'dist/client' directory
app.use(express.static('dist/client'));

// Use Astro SSR handler for all other requests
app.use(ssrHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
