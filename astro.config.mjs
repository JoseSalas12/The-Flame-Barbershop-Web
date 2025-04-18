// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://JoseSalas12.github.io',
  base: 'The-Flame-Barbershop-Web',
  experimental: {
      svg: {
          mode: 'sprite',
      },
  },
})