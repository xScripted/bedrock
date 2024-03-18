import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import robots from "astro-robots";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.example.com",
  integrations: [svelte(), sitemap(), robots()],
  output: "static", // or 'hybrid'
  server: {
    port: 4000,
  },
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
  },
});
