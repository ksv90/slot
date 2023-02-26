import legacyPlugin from '@vitejs/plugin-legacy';
import reactPlugin from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

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
	plugins: [
		reactPlugin(),
		splitVendorChunkPlugin(),
		legacyPlugin({
			targets: ['defaults', '> 0.2% and not dead', 'last 2 years'],
		}),
	],
});
