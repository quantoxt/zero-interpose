<script lang="ts" setup>
const bookState = ref<'serializing' | 'completed'>('serializing')

const toggleBookState = () => {
  bookState.value = bookState.value === 'serializing' ? 'completed' : 'serializing'
}

// State-specific content
const stateContent = computed(() => {
  if (bookState.value === 'serializing') {
    return {
      title: 'Serializing',
      subtitle: 'Ongoing / Chapter-by-Chapter',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="M16.5 13h.01"/></svg>',
      accent: '#F59E0B',
      accentBg: 'rgba(245, 158, 11, 0.1)',
      description: 'Readers support you as you write. They spend coins to unlock new chapters—but can\'t download until you\'re done.',
      features: [
        { icon: 'coins', text: 'Readers buy coins to unlock chapters' },
        { icon: 'online', text: 'Online reading only' },
        { icon: 'support', text: 'Earn as you write' },
      ],
      cta: 'Start Serializing',
    }
  }
  return {
    title: 'Completed',
    subtitle: 'Finished / Full Purchase',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
    accent: '#10B981',
    accentBg: 'rgba(16, 185, 129, 0.1)',
    description: 'Readers buy once and own it forever—with instant PDF/ePub download and lifetime library access.',
    features: [
      { icon: 'download', text: 'Instant PDF/ePub download' },
      { icon: 'library', text: 'Lifetime library access' },
      { icon: 'owner', text: 'Readers own it forever' },
    ],
    cta: 'Sell Completed Books',
  }
})

const featureIcons = {
  coins: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/></svg>',
  online: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  support: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  download: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
  library: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
  owner: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
}
</script>

<template>
  <section class="relative py-24 sm:py-32 bg-(--zi-background)">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-7" style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(139, 92, 246, 0.15);">
          <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background-color: #8B5CF6;" />
          <span class="text-xs font-semibold tracking-wider uppercase font-(--zi-font-body)" style="color: #8B5CF6;">
            Hybrid Book Access
          </span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black font-(--zi-font-display) text-(--zi-primary) mb-5 leading-[1.1]">
          The Smart Way to<br><span class="text-(--zi-accent)">Handle Unfinished Books</span>
        </h2>
        <p class="text-lg text-(--zi-text-secondary) font-(--zi-font-body) max-w-2xl mx-auto">
          You control when your book switches from serialization to full sale. Coin buyers get a discount when you complete it.
        </p>
      </div>

      <!-- Interactive Toggle Demo -->
      <div class="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        <!-- Toggle Switch -->
        <div class="flex justify-center mb-12">
          <button
            @click="toggleBookState"
            class="relative w-64 h-14 rounded-full p-1 transition-all duration-300 hover:shadow-lg"
            :style="{
              backgroundColor: bookState === 'serializing' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
              border: `1px solid ${bookState === 'serializing' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
            }"
          >
            <!-- Slider -->
            <div
              class="absolute top-1 h-12 rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2 px-4"
              :class="bookState === 'serializing' ? 'left-1 w-36' : 'right-1 w-32'"
              :style="{ backgroundColor: bookState === 'serializing' ? '#F59E0B' : '#10B981' }"
            >
              <svg v-if="bookState === 'serializing'" class="w-4 h-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else class="w-4 h-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm font-bold text-white font-(--zi-font-body) whitespace-nowrap">{{ bookState === 'serializing' ? 'Serializing' : 'Completed' }}</span>
            </div>
          </button>
        </div>

        <!-- State Content Cards -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Main State Card -->
          <div
            class="relative p-8 rounded-2xl border-2 transition-all duration-500"
            :style="{
              borderColor: stateContent.accent,
              backgroundColor: stateContent.accentBg,
            }"
          >
            <!-- Header -->
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300"
                :style="{ backgroundColor: stateContent.accent }"
                v-html="stateContent.icon"
              />
              <div>
                <h3 class="text-2xl font-black font-(--zi-font-display) text-(--zi-primary)" :style="{ color: stateContent.accent }">
                  {{ stateContent.title }}
                </h3>
                <p class="text-sm font-(--zi-font-body) text-(--zi-text-secondary)">{{ stateContent.subtitle }}</p>
              </div>
            </div>

            <!-- Description -->
            <p class="text-base leading-relaxed font-(--zi-font-body) text-(--zi-text-secondary) mb-6">
              {{ stateContent.description }}
            </p>

            <!-- Features List -->
            <div class="space-y-3 mb-6">
              <div
                v-for="(feature, index) in stateContent.features"
                :key="index"
                class="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style="background: var(--zi-background);"
              >
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" :style="{ backgroundColor: stateContent.accent, color: 'white' }" v-html="featureIcons[feature.icon as keyof typeof featureIcons]" />
                <span class="text-sm font-medium font-(--zi-font-body) text-(--zi-primary)">{{ feature.text }}</span>
              </div>
            </div>

            <!-- CTA -->
            <button
              class="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg font-(--zi-font-body) text-white"
              :style="{ backgroundColor: stateContent.accent }"
            >
              {{ stateContent.cta }}
            </button>
          </div>

          <!-- You Control Card -->
          <div class="relative p-8 rounded-2xl bg-(--zi-surface) border transition-all duration-300 hover:shadow-xl" style="border-color: var(--zi-border);">
            <div class="absolute top-6 right-6">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.05) 100%);">
                <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>

            <h3 class="text-xl font-bold mb-4 font-(--zi-font-display) text-(--zi-primary) pr-12">
              You Control the Switch
            </h3>

            <p class="text-base leading-relaxed font-(--zi-font-body) text-(--zi-text-secondary) mb-6">
              When your book is finished, toggle it to "completed" in your dashboard. Coin buyers automatically get a discount on the full version.
            </p>

            <!-- Toggle Preview Mock -->
            <div class="p-5 rounded-xl" style="background: var(--zi-background); border: 1px solid var(--zi-border);">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-medium font-(--zi-font-body) text-(--zi-text-secondary)">Book Status</span>
                <span class="text-xs font-semibold px-2 py-1 rounded-lg" :style="{ backgroundColor: stateContent.accentBg, color: stateContent.accent }">
                  {{ stateContent.title }}
                </span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: bookState === 'serializing' ? '#10B981' : '#10B981' }" />
                <span class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">Live on your site</span>
              </div>
            </div>

            <!-- Discount Badge -->
            <div class="mt-5 p-4 rounded-xl flex items-center gap-3" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.03) 100%); border: 1px solid rgba(139, 92, 246, 0.2);">
              <svg class="w-5 h-5 flex-shrink-0 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <div>
                <p class="text-sm font-semibold font-(--zi-font-body) text-(--zi-primary)">Coin Buyers Get a Discount</p>
                <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">When you complete the book, previous coin buyers get credit applied to their purchase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CustomSectionSeparator />
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

/* Toggle switch hover effect */
button:hover {
  transform: scale(1.02);
}

/* Feature card hover animation */
.relative.p-8.rounded-2xl.border-2:hover {
  transform: translateY(-2px);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  button:hover {
    transform: none;
  }
  .relative.p-8.rounded-2xl.border-2:hover {
    transform: none;
  }
}
</style>
