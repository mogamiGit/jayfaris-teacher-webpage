/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				'main': ['Kalnia', 'Georgia', 'serif'],
				'secondary': ['Hubot-Sans', 'Helvetica', 'sans-serif']
			},
			borderWidth: {
				'light' : '0.5px'
			},
		},
		colors: {
			'backgroundColor': '#FBF6E9',
			'mainColor': '#161179',
			'accentColor': '#D61E1B',
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss-animated'),
		require('@tailwindcss/aspect-ratio')
	],
}
