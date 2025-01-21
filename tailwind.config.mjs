/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // o 'media' si prefieres usar la preferencia del sistema
  theme: {
    extend: {
      colors: {
        // Cambiado "color" por "colors"
        primary: "#0b2c6f",
      },
    },
  },
  plugins: [],
};
