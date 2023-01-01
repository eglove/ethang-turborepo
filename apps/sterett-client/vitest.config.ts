import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-expect-error https://github.com/vercel/next.js/blob/canary/examples/with-vitest/vitest.config.ts
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
});
