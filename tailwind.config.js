/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/features/**/*.{ts,tsx}',
    './src/shared/components/**/*.{ts,tsx}',
    './src/routes/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
