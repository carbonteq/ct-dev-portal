import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#d5cb85', 600: '#5b5000', 900: '#3a3300', 950: '#2a2400' };
const gray = { 100: '#f4f6fa', 200: '#e9eef4', 300: '#bcc3ca', 400: '#818d9b', 500: '#4e5966', 700: '#2f3945', 800: '#1e2833', 900: '#14191e' };

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