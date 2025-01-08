import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#c3d18e', 600: '#495300', 900: '#2f3700', 950: '#212700' };
const gray = { 100: '#f2f7f9', 200: '#e5f0f3', 300: '#b8c5c8', 400: '#779197', 500: '#455d63', 700: '#263c42', 800: '#142b30', 900: '#101a1c' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};