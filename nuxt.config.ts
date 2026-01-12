// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'shadcn-nuxt'
  ],
    css: [
      "~/assets/css/tailwind.css",
      "~/assets/css/default.css"
  ],
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },
})