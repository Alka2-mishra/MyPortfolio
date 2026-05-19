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
          'radial-gradient(circle at top left, rgba(45, 212, 191, 0.18), transparent 28%), radial-gradient(circle at top right, rgba(251, 191, 36, 0.16), transparent 22%), linear-gradient(180deg, #07111f 0%, #0b1220 48%, #f8fafc 48%, #f8fafc 100%)',
      },
    },
  },
  plugins: [],
}