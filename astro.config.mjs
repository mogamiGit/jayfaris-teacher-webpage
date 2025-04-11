import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://fiser12.github.io/jayfaris-teacher-webpage/',
  base: '/jayfaris-teacher-webpage/',
  integrations: [tailwind(), relativeLinks(), react()],
  output: "static"
});