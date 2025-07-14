import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Asegúrate de que esta línea esté presente
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ejemplo de cómo añadir una fuente personalizada
        // Puedes usar 'serif' o 'sans' y configurarla en globals.css
        // dragon: ['"Dragon Font Name"', 'serif'], // Si tienes una fuente personalizada
        medieval: ['MedievalSharp', 'cursive']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;