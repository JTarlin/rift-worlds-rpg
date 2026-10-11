import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jtarlin.github.io/rift-worlds-rpg/",
  base: "/rift-worlds-rpg",
  integrations: [sitemap()],
  prefetch: true,
});
