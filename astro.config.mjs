// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://overnight.education",
  integrations: [mdx(), sitemap()],
  // Remove or comment out the adapter line below if not using SSR:
  adapter: cloudflare(),
});
