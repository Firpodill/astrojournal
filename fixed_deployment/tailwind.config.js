/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#050b2c',
        'cosmic-blue': '#0a1854',
        'nebula-blue': '#1a3a8f',
        'starlight': '#e0e7ff',
        'moon-silver': '#b8c6db',
        'nebula-pink': '#ff6ec7',
        'celestial-blue': '#4facfe',
        'cosmic-purple': '#7c3aed',
        'planet-orange': '#ff9d4a',
        'planet-red': '#ff5e62',
        'planet-teal': '#43e8d8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'twinkle': 'twinkle 4s infinite',
      },
      keyframes: {
        twinkle: {
          '0%': { opacity: 0.2 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.2 },
        },
      },
    },
  },
  plugins: [],
}
