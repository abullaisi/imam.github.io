import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        krona: ['Krona One', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        gunmetal: {
          DEFAULT: '#101828'
        },
        primary: {
          DEFAULT: '#444CE7'
        },
        'storm-gray': {
          DEFAULT: '#475467'
        }
      }
    }
  },
  plugins: []
}
export default config
