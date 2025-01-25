/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'figma-light': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)', // Sombra suave
        'figma-hover': '2px 3px 16px rgba(0, 147, 193, 0.4), 3px 1px 2px rgba(0, 0, 0, 0.06)', // Sombra al interactuar // Sombra intensa
      },
    },
  },
  plugins: [],
}