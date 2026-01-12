<script lang="ts" setup>
const footerLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
]

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/zerointerpose',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2 0 1.6-1.2 3-2.2 3.4 1 0 2.2-.4 3.2-1 0-.7-.2-1.4-.5-2z"/></svg>',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/zerointerpose',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative bg-(--zi-surface) overflow-hidden">
    <!-- Decorative background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 right-0 w-64 h-64 rounded-full" style="background: radial-gradient(circle at center, #8B5CF6 0%, transparent 70%); filter: blur(80px);" />
    </div>

    <!-- Top border -->
    <div class="h-px w-full bg-(--zi-border)" />

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-8">
        <!-- Left: Logo + Tagline + Copyright -->
        <div class="flex flex-col items-center sm:items-start gap-2">
          <NuxtLink
            to="/"
            class="flex items-center gap-2 group font-(--zi-font-display)"
          >
            <span class="text-lg sm:text-xl font-black tracking-tight transition-colors duration-300 text-(--zi-primary)">
              Zero<span class="text-(--zi-accent)">Interpose</span>
            </span>
            <!-- Subtle dot accent -->
            <span class="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150 bg-(--zi-accent)" />
          </NuxtLink>
          <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body) max-w-[200px] text-center sm:text-left">
            Skip the platform. Keep 100%. Own your audience.
          </p>
          <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">
            © {{ currentYear }} Zero Interpose
          </p>
        </div>

        <!-- Right: Links + Social + Email -->
        <div class="flex flex-col items-center sm:items-end gap-5">
          <!-- Nav Links -->
          <nav class="flex flex-wrap items-center justify-center gap-6">
            <NuxtLink
              v-for="link in footerLinks"
              :key="link.href"
              :to="link.href"
              class="text-sm font-medium transition-colors duration-200 hover:text-(--zi-accent) relative group font-(--zi-font-body) text-(--zi-text-secondary)"
            >
              {{ link.name }}
              <span class="absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full bg-(--zi-accent)" />
            </NuxtLink>
          </nav>

          <!-- Social Links + Email -->
          <div class="flex items-center gap-5">
            <!-- Social Links -->
            <div class="flex items-center gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-lg flex items-center justify-center text-(--zi-text-secondary) transition-all duration-300 hover:text-(--zi-accent) hover:bg-white"
                :title="social.name"
                v-html="social.icon"
              />
            </div>

            <!-- Divider -->
            <span class="w-px h-4 bg-(--zi-border)" />

            <!-- Email -->
            <a
              href="mailto:hello@zerointerpose.com"
              class="text-sm font-medium transition-colors duration-200 hover:text-(--zi-accent) relative group flex items-center gap-1.5 font-(--zi-font-body) text-(--zi-text-secondary)"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@zerointerpose.com
              <span class="absolute -bottom-0.5 left-0 w-0 h-px rounded-full transition-all duration-300 group-hover:w-full bg-(--zi-accent)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
@reference "tailwindcss";
</style>
