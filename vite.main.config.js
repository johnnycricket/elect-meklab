import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  base: process.env.DEV_ENV == 'true' ? '/' : './',
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    mainFields: ['module', 'jsnext:main', 'jsnext'],
  },
  build: {
    outDir: '.vite/build',
  }
});
