// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Alexandria",
        cssVariable: "--font-primary",
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});