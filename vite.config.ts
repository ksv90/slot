import reactPlugin from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: './',
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  plugins: [reactPlugin(), splitVendorChunkPlugin(), tsconfigPaths(), dts()],
});
