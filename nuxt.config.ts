// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false, // Disable Server Side Rendering, https://github.com/FortAwesome/vue-fontawesome/issues/394
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
})
