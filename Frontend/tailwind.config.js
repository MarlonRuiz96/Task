/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",   // Muy común en Angular
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],  // Agrega DaisyUI aquí
}
