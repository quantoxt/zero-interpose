<script lang="ts" setup>
const arrowRight = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'

const finalCtaRef = ref<HTMLElement>()
useMagnetic(finalCtaRef, { strength: 0.3 })
</script>

<template>
  <section class="relative py-20 sm:py-28 bg-(--zi-primary) overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full" style="background: radial-gradient(circle at center, #8B5CF6 0%, transparent 70%); filter: blur(120px);" />
      <div class="absolute bottom-0 left-0 w-80 h-80 rounded-full" style="background: radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%); filter: blur(100px);" />
    </div>

    <div class="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <!-- Headline -->
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 font-(--zi-font-display) text-white leading-tight" data-aos="zoom-in-up">
        Ready to publish on <span class="underline decoration-2 underline-offset-4" style="text-decoration-color: #8B5CF6;">your terms?</span>
      </h2>

      <!-- Subheading -->
      <p class="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-(--zi-font-body) font-light" data-aos="zoom-in-up" data-aos-delay="100">
        Pick a plan or start with a custom quote—either way, you keep <span class="font-semibold" style="color: #8B5CF6;">100%</span>.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="zoom-in-up" data-aos-delay="200">
        <!-- Primary Button -->
        <button ref="finalCtaRef" class="group relative px-8 py-4 overflow-hidden rounded-lg font-medium text-white transition-all duration-300 hover:shadow-xl hover:scale-105 font-(--zi-font-body)" style="background-color: #8B5CF6;">
          <span class="relative z-10 flex items-center gap-2">
            Start Your Author Site
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </span>
          <div class="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" style="background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);" />
        </button>

        <!-- Secondary Link -->
        <NuxtLink
          to="/how-it-works"
          class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 font-(--zi-font-body)"
        >
          <span class="border-b border-gray-500 pb-0.5">See detailed features</span>
          <span class="flex-shrink-0" v-html="arrowRight" />
        </NuxtLink>
      </div>

      <!-- Decorative dots -->
      <div class="absolute top-10 left-10 w-2 h-2 rounded-full opacity-30" style="background-color: #8B5CF6;" />
      <div class="absolute bottom-10 right-10 w-3 h-3 rounded-full opacity-40" style="background-color: #8B5CF6;" />
      <div class="absolute top-1/4 right-1/4 w-1.5 h-1.5 rounded-full opacity-20" style="background-color: #8B5CF6;" />
    </div>
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";
</style>
