import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import vercelStatic from '@astrojs/vercel/static';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://pabloprx.tech',
  integrations: [mdx(), compress(), sitemap()],
  output: 'server',
  adapter: vercelStatic({
    analytics: true
  })
});