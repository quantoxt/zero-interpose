<script lang="ts" setup>
const isScrolled = ref(false)
const navCtaRef = ref<HTMLElement>()

useMagnetic(navCtaRef, { strength: 0.25 })

if (import.meta.client) {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
}

const navLinks = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
]
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :style="{
      background: isScrolled ? 'rgba(250, 250, 250, 0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(229, 231, 235, 0.6)' : 'none'
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group font-(--zi-font-display)">
          <span class="text-xl sm:text-2xl font-black tracking-tight transition-colors duration-300 text-(--zi-primary)">
            Zero<span class="text-(--zi-accent)">Interpose</span>
          </span>
          <!-- Subtle dot accent -->
          <span class="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150 bg-(--zi-accent)" />
        </NuxtLink>

        <!-- Center Links -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="nav-link group relative text-sm transition-colors duration-200 hover:text-(--zi-accent) relative font-(--zi-font-body) text-(--zi-text-secondary)"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full bg-(--zi-accent)" />
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div ref="navCtaRef">
          <NuxtLink
            to="/start"
            class="group relative px-5 sm:px-6 py-2.5 sm:py-3 overflow-hidden rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105 font-(--zi-font-body) inline-block"
            style="background-color: #8B5CF6;"
          >
            <span class="relative z-10 flex items-center gap-2 text-sm sm:text-base">
              Start Your Site
              <svg
                class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
            <div
              class="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              style="background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

/* Active state for nav links */
.nav-link.router-link-active {
  color: #8B5CF6;
}

.nav-link.router-link-active span {
  width: 100%;
}
</style>
