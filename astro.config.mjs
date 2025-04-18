// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  
  experimental: {
      svg: {
          mode: 'sprite',
      },
  },
  site: 'https://JoseSalas12.github.io',
  base: 'The-Flame-Barbershop-Web',
})