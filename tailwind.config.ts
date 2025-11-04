import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'krishna-blue': '#1e40af',
        'krishna-dark-blue': '#1e3a8a',
        'divine-gold': '#d4af37',
        'sacred-gold': '#fbbf24',
        'royal-purple': '#8b5cf6',
        'divine-purple': '#7c3aed',
        'sacred-green': '#059669',
        'enlightened-green': '#10b981',
        'pure-white': '#ffffff',
        'dark-bg': '#0f172a',
        'darker-bg': '#020617',
      },
      animation: {
        'divine-float': 'divine-float 6s ease-in-out infinite',
        'sacred-glow': 'sacred-glow 4s ease-in-out infinite',
        'flute-notes': 'flute-notes 6s linear infinite',
        'chakra-spin': 'chakra-spin 3s linear infinite',
        'lotus-bloom': 'lotus-bloom 8s ease-in-out infinite',
        'glow-slow': 'glow-slow 3s ease-in-out infinite',
      },
      keyframes: {
        'divine-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(120deg)' },
          '66%': { transform: 'translateY(-5px) rotate(240deg)' },
        },
        'sacred-glow': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)',
            filter: 'blur(40px)'
          },
          '50%': { 
            opacity: '0.6',
            transform: 'scale(1.1)',
            filter: 'blur(30px)'
          },
        },
        'flute-notes': {
          '0%': { 
            transform: 'translateY(100vh) rotate(0deg) scale(0.5)',
            opacity: '0'
          },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { 
            transform: 'translateY(-100px) rotate(360deg) scale(1.2)',
            opacity: '0'
          },
        },
        'chakra-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'lotus-bloom': {
          '0%': { 
            transform: 'scale(0.8) rotate(0deg)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'scale(1.1) rotate(180deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(0.8) rotate(360deg)',
            opacity: '0.7'
          },
        },
        'glow-slow': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
      },
      backgroundImage: {
        'divine-gradient': 'linear-gradient(135deg, #d4af37 0%, #fbbf24 100%)',
        'sacred-gradient': 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        'royal-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
        'krishna-radial': 'radial-gradient(ellipse at center, #1e3a8a 0%, #0f172a 100%)',
        'divine-combined': 'linear-gradient(135deg, #d4af37 0%, #fbbf24 50%, #8b5cf6 100%)',
      },
      screens: {
        'xs': '480px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
export default config
