// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://kueh22.org/",
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Alexandria",
        cssVariable: "--font-primary",
        weights: [400, 500, 600, 700, 800],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});
