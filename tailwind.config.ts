import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: 'var(--gold)',
          light: 'var(--gold-light)',
          dark: 'var(--gold-dark)',
        },
        navy: {
          DEFAULT: 'var(--navy)',
          light: 'var(--navy-light)',
          dark: 'var(--navy-dark)',
        },
      },
      fontFamily: {
        display: ['"Luxurious Roman"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
