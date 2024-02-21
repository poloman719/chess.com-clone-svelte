/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: {
					700: '#c0bfbf',
					600: '#51504D',
					500: '#403e3c',
					400: '#373634',
					350: '#3D3C3A',
					300: '#333230',
					200: '#302e2b',
					100: '#262522',
          50: '#211f1d',
          25: '#141413',
					10: '#111111'
				},
				green: {
					400: '#9dcb5e',
					300: '#88bb51',
					250: '#558D44',
					200: '#45753c',
					100: '#5e9948',
					50: '#45753c',
				},
				board: {
					white: '#ebecd0',
					black: '#779556'
				}
			}
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif']
		}
	},
	plugins: []
};
