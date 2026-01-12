<script lang="ts" setup>
// Magnetic effect for CTA
const heroCtaRef = ref<HTMLElement>()
useMagnetic(heroCtaRef, { strength: 0.3 })

// Parallax for floating elements
const parallaxElements = ref<HTMLElement[]>([])
const parallaxSpeeds = [0.08, 0.12, 0.06]

onMounted(() => {
  useParallax(parallaxElements, parallaxSpeeds)
})
</script>

<template>
  <section class="relative min-h-[85vh] flex items-center overflow-hidden bg-(--zi-surface)">
    <!-- Subtle Background Decorations -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Soft purple glow - top right -->
      <div
        :ref="(el) => { if (el) parallaxElements[0] = el as HTMLElement }"
        class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style="background: radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, transparent 70%); filter: blur(80px);"
      />
      <!-- Soft dark accent - bottom left -->
      <div
        :ref="(el) => { if (el) parallaxElements[1] = el as HTMLElement }"
        class="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
        style="background: radial-gradient(circle at center, rgba(17, 24, 39, 0.04) 0%, transparent 70%); filter: blur(60px);"
      />
    </div>

    <!-- Subtle dot pattern -->
    <div class="absolute inset-0 opacity-[0.03]">
      <div style="background-image: radial-gradient(circle at 1px 1px, #111827 1px, transparent 0); background-size: 32px 32px;" />
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <!-- Left Column - Hero Content -->
        <div class="lg:col-span-7 space-y-8">
          <!-- Section Label -->
          <div
            class="inline-flex items-center gap-3 px-5 py-2 rounded-full"
            style="background: rgba(139, 92, 246, 0.06); border: 1px solid rgba(139, 92, 246, 0.15);"
            data-aos="fade-down"
          >
            <span class="w-1.5 h-1.5 rounded-full" style="background-color: #8B5CF6;" />
            <span class="text-sm tracking-wide font-(--zi-font-body)" style="color: #8B5CF6;">
              The Journey
            </span>
          </div>

          <!-- Main Headline -->
          <h1
            class="leading-[0.95] tracking-tight font-(--zi-font-display) text-(--zi-primary)"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">How Zero</span>
            <span class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black relative mt-2">
              Interpose
              <span class="text-(--zi-accent)">Works</span>
            </span>
          </h1>

          <!-- Subheading -->
          <p
            class="text-lg sm:text-xl max-w-xl leading-relaxed text-(--zi-text-secondary) font-(--zi-font-body) font-light"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A simple, platform-free way to publish, connect, and earn—<span class="font-medium text-(--zi-primary)">on your terms</span>.
          </p>

          <!-- CTA -->
          <div
            class="flex flex-wrap gap-4 pt-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              ref="heroCtaRef"
              class="group relative px-8 py-4 overflow-hidden rounded-xl text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] font-(--zi-font-body) font-medium"
              style="background-color: #8B5CF6;"
            >
              <span class="relative z-10 flex items-center gap-2.5">
                Start Your Author Site
                <svg class="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div class="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" style="background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);" />
            </button>
          </div>
        </div>

        <!-- Right Column - Visual Flow Diagram -->
        <div class="lg:col-span-5 relative" data-aos="fade-left" data-aos-delay="200">
          <div class="relative">
            <!-- Flow Path Container -->
            <div class="relative p-8 rounded-2xl bg-(--zi-background)" style="border: 1px solid var(--zi-border);">
              <!-- Curved Path Line (SVG) -->
              <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Flow path from author to reader -->
                <path
                  d="M80 80 C 80 160, 320 160, 320 240"
                  stroke="url(#flowGradient)"
                  stroke-width="3"
                  stroke-linecap="round"
                  fill="none"
                  class="flow-path"
                />
                <!-- Animated dot on the path -->
                <circle r="6" fill="#8B5CF6" class="flow-dot">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#flowPath"/>
                  </animateMotion>
                </circle>
                <path id="flowPath" d="M80 80 C 80 160, 320 160, 320 240" fill="none"/>
                <!-- Gradient definition -->
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:0.3" />
                    <stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0.3" />
                  </linearGradient>
                </defs>
              </svg>

              <!-- Author Node (top) -->
              <div
                :ref="(el) => { if (el) parallaxElements[2] = el as HTMLElement }"
                class="absolute top-6 left-6 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg z-10 transition-transform hover:scale-110"
                style="background: linear-gradient(135deg, #111827 0%, #1F2937 100%);"
              >
                <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div class="absolute top-24 left-6">
                <p class="text-xs font-medium text-(--zi-text-secondary) font-(--zi-font-body)">Author</p>
              </div>

              <!-- "Direct" Label (center) -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-lg" style="background: rgba(139, 92, 246, 0.08);">
                <p class="text-xs font-bold text-(--zi-accent) font-(--zi-font-body) tracking-wide">DIRECT</p>
              </div>

              <!-- Reader Node (bottom) -->
              <div
                :ref="(el) => { if (el) parallaxElements[2] = el as HTMLElement }"
                class="absolute bottom-6 right-6 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg z-10 transition-transform hover:scale-110"
                style="background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);"
              >
                <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div class="absolute bottom-24 right-6">
                <p class="text-xs font-medium text-(--zi-text-secondary) font-(--zi-font-body)">Reader</p>
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute -bottom-3 -right-3 px-4 py-2.5 rounded-lg shadow-lg z-20" style="background-color: #111827;">
              <p class="text-[10px] uppercase tracking-wider mb-0.5" style="color: #9CA3AF;">No Middleman</p>
              <p class="text-xl font-black text-(--zi-accent) font-(--zi-font-display)">0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20 pointer-events-none">
      <span class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">Explore the journey</span>
      <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

/* Flow path subtle pulse */
.flow-path {
  animation: pathPulse 3s ease-in-out infinite;
}

@keyframes pathPulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* Flow dot animation */
.flow-dot {
  filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .flow-path {
    animation: none;
  }
  .flow-dot {
    display: none;
  }
}
</style>
