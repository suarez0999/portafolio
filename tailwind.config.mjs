/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // o 'media' si prefieres usar la preferencia del sistema
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["OpenSansFont", "sans-serif", "system-ui"],
        Monserrat: ["MonserratFont", "sans-serif", "system-ui"],
        Poppins: ["PoppinsFont", "sans-serif", "system-ui"],
      },
      colors: {
        // Cambiado "color" por "colors"
        primary: "#0b2c6f",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #0b2c6f 0%, #2196f3 160%)",
      },
    },
  },
  plugins: [],
};
