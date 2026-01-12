<script lang="ts" setup>
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const navCtaRef = ref<HTMLElement>()

useMagnetic(navCtaRef, { strength: 0.25 })

// Handle scroll effect
if (import.meta.client) {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
}

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Navigation links
const navLinks = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
]

// Watch route changes to close mobile menu
const route = useRoute()
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :style="{
      background: isScrolled ? 'rgba(250, 250, 250, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(229, 231, 235, 0.6)' : 'none'
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group font-(--zi-font-display)" @click="closeMobileMenu">
          <span class="text-xl sm:text-2xl font-black tracking-tight transition-colors duration-300 text-(--zi-primary)">
            Zero<span class="text-(--zi-accent)">Interpose</span>
          </span>
          <span class="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150 bg-(--zi-accent)" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="nav-link group relative text-sm transition-colors duration-200 hover:text-(--zi-accent) font-(--zi-font-body) text-(--zi-text-secondary)"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full bg-(--zi-accent)" />
          </NuxtLink>
        </div>

        <!-- Desktop CTA Button -->
        <div class="hidden md:block" ref="navCtaRef">
          <NuxtLink
            to="/start"
            class="group relative px-6 py-3 overflow-hidden rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105 font-(--zi-font-body) inline-block"
            style="background-color: #8B5CF6;"
          >
            <span class="relative z-10 flex items-center gap-2 text-base">
              Start Your Site
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
            <div class="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" style="background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);" />
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100"
          :class="{ 'bg-gray-100': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <svg
            class="w-5 h-5 transition-transform duration-300"
            :class="{ 'rotate-90': isMobileMenuOpen }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Panel -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-y-0 right-0 w-full sm:w-80 z-50 bg-(--zi-background) shadow-2xl flex flex-col"
        >
          <!-- Mobile Menu Header -->
          <div class="flex items-center justify-between p-6 border-b" style="border-color: var(--zi-border);">
            <span class="text-lg font-black font-(--zi-font-display) text-(--zi-primary)">
              Menu
            </span>
            <button
              class="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-100"
              @click="closeMobileMenu"
              aria-label="Close menu"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Mobile Menu Links -->
          <div class="flex-1 overflow-y-auto p-6">
            <div class="space-y-2">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.href"
                :to="link.href"
                class="mobile-nav-link block px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-50 font-(--zi-font-body) text-(--zi-text-secondary) hover:text-(--zi-primary)"
                @click="closeMobileMenu"
              >
                {{ link.name }}
              </NuxtLink>
            </div>

            <!-- Mobile CTA -->
            <div class="mt-8 p-6 rounded-2xl text-center" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%);">
              <p class="text-sm font-semibold font-(--zi-font-body) text-(--zi-text-secondary) mb-4">
                Ready to get started?
              </p>
              <NuxtLink
                to="/start"
                class="block w-full px-6 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg font-(--zi-font-body)"
                style="background-color: #8B5CF6;"
                @click="closeMobileMenu"
              >
                Start Your Site
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile Menu Footer -->
          <div class="p-6 border-t" style="border-color: var(--zi-border);">
            <p class="text-xs text-center text-(--zi-text-secondary) font-(--zi-font-body)">
              © 2025 Zero Interpose. All rights reserved.
            </p>
          </div>
        </div>
      </Transition>

      <!-- Backdrop -->
      <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          @click="closeMobileMenu"
        />
      </Transition>
    </Teleport>
  </nav>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

/* Active state for desktop nav links */
.nav-link.router-link-active {
  color: #8B5CF6;
}

.nav-link.router-link-active span {
  width: 100%;
}

/* Active state for mobile nav links */
.mobile-nav-link.router-link-active {
  background: rgba(139, 92, 246, 0.1);
  color: #8B5CF6;
  font-weight: 600;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .transition-transform,
  .transition-opacity {
    transition: none !important;
  }
}
</style>
