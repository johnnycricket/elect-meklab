import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-unresolved

// https://vitejs.dev/config
export default defineConfig({
  base: process.env.DEV_ENV == 'true' ? '/' : './',
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    mainFields: ['module', 'jsnext:main', 'jsnext'],
  },
  build: {
    rollupOptions: {
      external: [
        'svelte'
      ]
    },
    outDir: '.vite/build'
  }
});
