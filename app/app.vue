<script lang="ts" setup>
// Initialize AOS and Lenis
onMounted(() => {
  if (import.meta.client) {
    // Initialize AOS
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
      })
    })

    // Initialize Lenis smooth scroll
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: true,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    })
  }
})

useSeoMeta({
  title: 'Zero Interpose – Skip the Platform. Claim Your Pay.',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  description: 'Zero Interpose builds direct-to-reader websites for authors. Bypass restrictive publishing platforms, keep 100% of earnings, and connect directly with your readers.',
  keywords: 'author website, direct sales, indie publishing, bypass platforms, author earnings, book sales, serialized fiction',
  author: 'Zero Interpose',
  robots: 'index, follow',

  // Open Graph / Facebook
  ogType: 'website',
  ogUrl: 'https://zerointerpose.com',
  ogTitle: 'Zero Interpose – Skip the Platform. Claim Your Pay.',
  ogDescription: 'We build direct-to-reader websites so you keep 100%—fast, fair, and forever yours.',
  ogImage: '/og-image.png',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Zero Interpose – Skip the Platform. Claim Your Pay.',
  twitterDescription: 'We build direct-to-reader websites so you keep 100%—fast, fair, and forever yours.',
  twitterImage: '/og-image.png',
})

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Outfit:wght@300;400;500;600&display=swap'
    },
    { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: translateY(10%);
  }
</style>
