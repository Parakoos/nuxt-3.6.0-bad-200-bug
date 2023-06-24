// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true, // Static generation
  css: ['~/assets/styles/main.css'], // Include the css file
  nitro: { prerender: { ignore: ['/dynamic'] } }, // Skip the dynamic page from generation
})
