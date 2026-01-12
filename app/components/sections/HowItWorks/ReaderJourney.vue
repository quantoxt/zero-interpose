<script lang="ts" setup>
const steps = [
  {
    number: '01',
    title: 'Discover Your Book',
    description: 'They visit your clean, distraction-free site—no algorithms, no ads.',
    icon: 'search',
    previewIcon: 'globe',
    accent: '#3B82F6',
  },
  {
    number: '02',
    title: 'Pay You Directly',
    description: 'If your book is ongoing: they buy coins to unlock chapters. If complete: they buy once and download forever.',
    icon: 'card',
    previewIcon: 'coins',
    accent: '#10B981',
    note: 'Two paths: coins or purchase',
  },
  {
    number: '03',
    title: 'Read & Reconnect',
    description: 'They access their library anytime—and you own that relationship.',
    icon: 'book',
    previewIcon: 'library',
    accent: '#8B5CF6',
  },
]

// Main icons
const icons = {
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  card: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
  book: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v12m0-12C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
}

// Preview mini-icons
const previewIcons = {
  globe: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  coins: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="M16.5 13h.01"/></svg>',
  library: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
}
</script>

<template>
  <section class="relative py-24 sm:py-32 bg-(--zi-surface) overflow-hidden">
    <!-- Subtle Background Texture -->
    <div class="absolute inset-0 opacity-[0.015]">
      <div style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23111827\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-24" data-aos="fade-up">
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-7" style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(139, 92, 246, 0.15);">
          <span class="w-1.5 h-1.5 rounded-full" style="background-color: #8B5CF6;" />
          <span class="text-xs font-semibold tracking-wider uppercase font-(--zi-font-body)" style="color: #8B5CF6;">
            Reader Experience
          </span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black font-(--zi-font-display) text-(--zi-primary) mb-5 leading-[1.1]">
          What Your<br><span class="text-(--zi-accent)">Readers See</span>
        </h2>
        <p class="text-lg text-(--zi-text-secondary) font-(--zi-font-body) max-w-xl mx-auto">
          A clean, direct experience. No platforms. No algorithms. Just you and your readers.
        </p>
      </div>

      <!-- Experience Cards -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-10">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative group"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <!-- Main Card -->
          <div class="experience-card relative pt-16 pb-8 px-7 rounded-3xl bg-(--zi-background) border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            style="border-color: var(--zi-border);"
          >
            <!-- Number Badge -->
            <div class="absolute -top-4 left-8 w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black font-(--zi-font-display) text-white shadow-lg z-10"
              :style="{ backgroundColor: step.accent }"
            >
              {{ step.number }}
            </div>

            <!-- Preview Window (Mini Interface Glimpse) -->
            <div class="relative mb-6 mt-0 h-32 rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
              :style="{ background: `linear-gradient(135deg, ${step.accent}08 0%, ${step.accent}03 100%)`, border: `1px solid ${step.accent}20` }"
            >
              <!-- Mini Preview Icon -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  :style="{ background: `linear-gradient(135deg, ${step.accent}15 0%, ${step.accent}05 100%)` }"
                  v-html="step.previewIcon ? previewIcons[step.previewIcon as keyof typeof previewIcons] : ''"
                />
              </div>

              <!-- Decorative UI Elements -->
              <div class="absolute top-3 left-3 w-2 h-2 rounded-full opacity-40" :style="{ backgroundColor: step.accent }" />
              <div class="absolute top-3 right-3 flex gap-1">
                <div class="w-6 h-1 rounded-full opacity-20" :style="{ backgroundColor: step.accent }" />
                <div class="w-4 h-1 rounded-full opacity-20" :style="{ backgroundColor: step.accent }" />
              </div>
              <div class="absolute bottom-3 left-3 right-3">
                <div class="h-2 rounded-full opacity-10 mb-1.5" :style="{ backgroundColor: step.accent }" />
                <div class="h-2 w-3/4 rounded-full opacity-10" :style="{ backgroundColor: step.accent }" />
              </div>
            </div>

            <!-- Icon -->
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              :style="{ background: `linear-gradient(135deg, ${step.accent}12 0%, ${step.accent}05 100%)` }"
              v-html="step.icon ? icons[step.icon as keyof typeof icons] : ''"
            />

            <!-- Content -->
            <h3 class="text-xl font-bold mb-3 font-(--zi-font-display) text-(--zi-primary)">
              {{ step.title }}
            </h3>
            <p class="text-base leading-relaxed font-(--zi-font-body) text-(--zi-text-secondary)">
              {{ step.description }}
            </p>

            <!-- Note Badge (if exists) -->
            <div v-if="step.note" class="mt-4 px-3 py-2 rounded-lg inline-flex items-center gap-2"
              style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2);">
              <svg class="w-3.5 h-3.5" style="color: #F59E0B;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-xs font-medium font-(--zi-font-body)" style="color: #D97706;">
                {{ step.note }}
              </span>
            </div>

            <!-- Hover Corner Accent -->
            <div class="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              :style="{ background: `radial-gradient(circle, ${step.accent}10 0%, transparent 70%)` }"
            />
          </div>

          <!-- Desktop Connector Arrow -->
          <div
            v-if="index < steps.length - 1"
            class="hidden md:flex absolute top-1/2 -right-5 items-center justify-center w-10 h-10 rounded-full shadow-sm z-10 transition-transform duration-300"
            style="background-color: var(--zi-background); border: 1px solid var(--zi-border);"
          >
            <svg class="w-4 h-4 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Bottom Emphasis -->
      <div class="mt-20 text-center" data-aos="fade-up" data-aos-delay="600">
        <div class="inline-flex items-center gap-4 px-6 py-4 rounded-2xl" style="background: var(--zi-background); border: 1px solid var(--zi-border);">
          <div class="flex -space-x-2">
            <div class="w-8 h-8 rounded-full border-2 border-(--zi-background) flex items-center justify-center text-xs" style="background: #3B82F6; color: white;">
              R
            </div>
            <div class="w-8 h-8 rounded-full border-2 border-(--zi-background) flex items-center justify-center text-xs" style="background: #10B981; color: white;">
              R
            </div>
            <div class="w-8 h-8 rounded-full border-2 border-(--zi-background) flex items-center justify-center text-xs" style="background: #8B5CF6; color: white;">
              R
            </div>
          </div>
          <div class="text-left">
            <p class="text-sm font-medium font-(--zi-font-body) text-(--zi-primary)">
              You own the reader relationship
            </p>
            <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">
              No platform between you and your audience
            </p>
          </div>
        </div>
      </div>
    </div>

    <CustomSectionSeparator />
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

/* Number badge animation */
.experience-card > div:first-child {
  animation: badgeSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  animation-delay: calc(0.1s + var(--step-index, 0) * 0.15s);
}

@keyframes badgeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.8);
  }
  70% {
    transform: translateY(2px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Card hover border glow */
.experience-card:hover {
  border-color: var(--zi-accent);
  box-shadow: 0 20px 40px -15px rgba(139, 92, 246, 0.15);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .experience-card > div:first-child {
    animation: none;
  }
  .experience-card {
    transition: none;
  }
}
</style>
