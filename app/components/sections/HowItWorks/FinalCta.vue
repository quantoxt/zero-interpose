<script lang="ts" setup>
const finalCtaRef = ref<HTMLElement>()
useMagnetic(finalCtaRef, { strength: 0.3 })

// Parallax elements
const parallaxElements = ref<HTMLElement[]>([])

onMounted(() => {
  useParallax(parallaxElements, [0.05, 0.08])
})
</script>

<template>
  <section class="relative py-32 sm:py-40 overflow-hidden" style="background: linear-gradient(180deg, var(--zi-surface) 0%, var(--zi-primary) 20%);">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Top gradient fade -->
      <div class="absolute top-0 left-0 right-0 h-32" style="background: linear-gradient(180deg, var(--zi-surface) 0%, transparent 100%);" />

      <!-- Floating glow -->
      <div
        :ref="(el) => { if (el) parallaxElements[0] = el as HTMLElement }"
        class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style="background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%); filter: blur(80px);"
      />

      <!-- Bottom accent line -->
      <div class="absolute bottom-0 left-0 right-0 h-1" style="background: linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%);" />
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-20"
        style="background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.3);"
        data-aos="fade-down"
      >
        <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background-color: #8B5CF6;" />
        <span class="text-sm font-semibold tracking-wider uppercase font-(--zi-font-body)" style="color: #C4B5FD;">
          Start Today
        </span>
      </div>

      <!-- Main Headline -->
      <h1
        class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-(--zi-font-display) text-white mb-8 leading-[1.05]"
        data-aos="fade-up"
      >
        Ready to cut out<br>
        <span class="text-(--zi-accent)">the platform?</span>
      </h1>

      <!-- Subheading -->
      <p
        class="text-xl sm:text-2xl text-gray-400 font-(--zi-font-body) font-light mb-12 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Start your author site in 4 minutes—no tech skills needed.
      </p>

      <!-- CTA Button -->
      <div
        ref="finalCtaRef"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <NuxtLink
          to="/start"
          class="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 font-(--zi-font-body)"
          style="background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);"
        >
          <span class="relative z-10 text-lg">Start Your Author Site</span>
          <svg class="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div class="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%);" />
        </NuxtLink>
      </div>

      <!-- Trust Indicators -->
      <div
        class="mt-16 flex flex-wrap items-center justify-center gap-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-sm text-gray-400 font-(--zi-font-body)">No tech skills</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-sm text-gray-400 font-(--zi-font-body)">4-minute setup</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-sm text-gray-400 font-(--zi-font-body)">Keep 100% earnings</span>
        </div>
      </div>

      <!-- Decorative Corner Elements -->
      <div class="absolute top-10 left-10 w-20 h-20 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100V0H100" stroke="#8B5CF6" stroke-width="2"/>
        </svg>
      </div>
      <div class="absolute bottom-10 right-10 w-20 h-20 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0V100H0" stroke="#8B5CF6" stroke-width="2"/>
        </svg>
      </div>
    </div>

    <!-- Bottom Scroll to Top (Optional) -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <button
        @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
        class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style="background: rgba(139, 92, 246, 0.2);"
      >
        <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse {
    animation: none;
  }
  a.group:hover {
    transform: none;
  }
}
</style>
