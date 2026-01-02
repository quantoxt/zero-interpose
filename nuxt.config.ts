// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/supabase',
    'shadcn-nuxt'
  ],
    css: [
    "~/assets/css/tailwind.css"
  ],
  
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },
})