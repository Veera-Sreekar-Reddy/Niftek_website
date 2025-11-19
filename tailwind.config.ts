import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'niftek-dark': '#2b6777',
        'niftek-light': '#c8d8e4',
        'niftek-medium': '#52ab98',
        'niftek-offwhite': '#f2f2f2',
      },
    },
  },
  plugins: [],
}
export default config

