/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(15, 23, 42, 0.22)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 12% 8%, rgba(20, 184, 166, 0.24), transparent 30%), radial-gradient(circle at 86% 16%, rgba(245, 158, 11, 0.22), transparent 28%), radial-gradient(circle at 90% 85%, rgba(14, 116, 144, 0.2), transparent 30%), linear-gradient(180deg, #05252a 0%, #0a2d34 45%, #f6f8f7 45%, #f6f8f7 100%)',
      },
    },
  },
  plugins: [],
}