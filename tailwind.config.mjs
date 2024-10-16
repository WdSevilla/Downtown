/** @type {import('tailwindcss').Config} */
export default {
	
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		
		extend: {

			
			backgroundImage:{
				'fondo1': "url('/src/assets/fondo1.webp')",
				'fondo2': "url('/src/assets/fondo2cc.png')",
				
			},
			colors:{
				rojo: '#6A28331',
				azulOscuro: '#424B59',
				fondo: '#FFF5E4',
				gold:"#ddb97f"
			},

			fontFamily: {
				BadScript: ["Bad Script", "sans-serif"],
				Lobster: ["Lobster", "sans-serif"],
				Montserrat: ["Montserrat", "sans-serif"],
			  },
			  
		},

	},
	plugins: [
		require('flowbite/plugin')
	],
}
