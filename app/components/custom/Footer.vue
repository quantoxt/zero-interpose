<script lang="ts" setup>
const footerLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative bg-(--zi-surface)">
    <!-- Subtle top border -->
    <div class="h-px w-full" style="background: linear-gradient(90deg, transparent 0%, var(--zi-border) 50%, transparent 100%);" />

    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        <!-- Left: Logo + Copyright -->
        <div class="flex flex-col items-center sm:items-start gap-1">
          <NuxtLink
            to="/"
            class="flex items-center gap-2 group font-(--zi-font-display)"
          >
            <span class="text-lg sm:text-xl font-black tracking-tight transition-colors duration-300 text-(--zi-primary)">
              Zero<span class="text-(--zi-accent)">Interpose</span>
            </span>
          </NuxtLink>
          <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">
            © {{ currentYear }} Zero Interpose
          </p>
        </div>

        <!-- Right: Links + Email -->
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <!-- Nav Links -->
          <nav class="flex items-center gap-6">
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

          <!-- Divider (hidden on mobile) -->
          <span class="hidden sm:block w-px h-4 bg-(--zi-border)" />

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
  </footer>
</template>

<style lang="css" scoped>
@reference "tailwindcss";
</style>
