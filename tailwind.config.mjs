/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				'main': ['Kirang Haerang', 'system-ui'],
				'secondary': ['Nunito', 'Helvetica', 'sans-serif']
			},
			borderWidth: {
				'light' : '0.5px'
			},
      maskImage: {
        wave: "url('/public/images/wave-mask.svg')",
      },
      maskSize: {
        cover: '100% 100%',
      },
      maskRepeat: {
        'no-repeat': 'no-repeat',
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
		require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities, theme }) {
      const masks = theme('maskImage');
      const newUtils = Object.entries(masks).map(([name, url]) => {
        return [`.mask-${name}`, { maskImage: url, WebkitMaskImage: url }];
      });
      addUtilities(Object.fromEntries(newUtils));
    },
	],
}
