import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import awsAmplify from 'astro-aws-amplify';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://subnetcalculator.dev",
  integrations: [
    tailwind(), mdx(), sitemap(), icon(), partytown({ config: { forward: ['dataLayer.push'] } })
  ],
  adapter: awsAmplify(),
  output: 'server'
});