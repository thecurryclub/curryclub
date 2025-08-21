import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee linear infinite',
      },
    
      colors: { brand: { 600: '#DB7F06', 700: '#B76306' } },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.08)' }
    }
  },
  plugins: [],
} satisfies Config
