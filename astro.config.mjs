// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@ui": "/src/components/ui",
        "@icons": "/src/components/icons",
        "@images": "/public/images",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@fonts": "/src/fonts",
      },
    },
  },
});
