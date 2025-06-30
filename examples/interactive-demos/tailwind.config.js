/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 1s ease-in-out 2',
      },
      colors: {
        algorithm: {
          start: '#3B82F6',
          explore: '#F59E0B',
          use: '#10B981',
          skip: '#EF4444',
          backtrack: '#F97316',
          found: '#059669',
          complete: '#7C3AED',
        },
      },
    },
  },
  plugins: [],
};
