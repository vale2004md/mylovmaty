/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['Minecraft', 'monospace'],
        minecraftAlt: ['Minecraft Alt', 'monospace'],
      },
    },
  },
  plugins: [],
};