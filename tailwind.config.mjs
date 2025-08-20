/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // o 'media' si prefieres usar la preferencia del sistema
  theme: {
    extend: {
      fontFamily: {
        sans: ["OpenSansFont", "sans-serif", "system-ui"], // Texto base
        heading: ["PoppinsFont", "sans-serif", "system-ui"], // Títulos
        accent: ["MarykateFont", "sans-serif", "system-ui"], // Decorativa
        mono: ["MonserratFont", "sans-serif", "system-ui"], // opcional
      },

      colors: {
        brand: {
          black: "#070101",   // negro profundo de marca
          red: "#dc2626",     // rojo principal (identidad / fuerza)
          orange: "#ea580c",  // naranja secundario (energía)
          yellow: "#ca8a04",  // amarillo secundario (dinamismo)
          green: "#16a34a",   // verde acento (éxito / positivo)
          blue: "#0284c7",    // azul acento (tecnología / confianza)
        },
      },

      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #0b2c6f 0%, #2196f3 160%)",
        light: "linear-gradient(135deg, #ffffff, #f5f5f5, #d6d6d6, #aaaaaa)",
      },
    },
  },
  plugins: [],
};
