import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
  site: "https://subnetcalculator.dev",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  adapter: awsAmplify(),
});
