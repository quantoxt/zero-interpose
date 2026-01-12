<script lang="ts" setup>
const steps = [
  {
    number: '01',
    title: 'Tell Us About Your Book',
    description: 'Fill out a quick form → we learn your genre, book status, and goals.',
    icon: 'pencil',
    timeLabel: '~4 minutes',
    timeColor: '#10B981',
  },
  {
    number: '02',
    title: 'We Build Your Site',
    description: 'In ~150 hours, you get a fast, beautiful website with your books, sales, and reader access—all ready to go.',
    icon: 'wrench',
    timeLabel: '~150 hours',
    timeColor: '#F59E0B',
  },
  {
    number: '03',
    title: 'Publish & Profit Directly',
    description: 'Sell completed books or offer chapter-by-chapter access. Keep 100%. Own your audience.',
    icon: 'dollar',
    timeLabel: 'Forever',
    timeColor: '#8B5CF6',
  },
]

// Icon SVGs
const icons = {
  pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',
  wrench: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  dollar: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
}

const cardRefs = ref<(HTMLElement | null)[]>([])
</script>

<template>
  <section class="relative py-24 sm:py-32 bg-(--zi-background) overflow-hidden">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-[0.02]">
      <div style="background-image: radial-gradient(circle at 2px 2px, #111827 1px, transparent 0); background-size: 48px 48px;" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-24" data-aos="fade-up">
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-7" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.04) 100%); border: 1px solid rgba(139, 92, 246, 0.12);">
          <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background-color: #8B5CF6;" />
          <span class="text-xs font-semibold tracking-wider uppercase font-(--zi-font-body)" style="color: #8B5CF6;">
            Your Journey
          </span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black font-(--zi-font-display) text-(--zi-primary) mb-5 leading-[1.1]">
          From Idea to<br><span class="text-(--zi-accent)">Launched Site</span>
        </h2>
        <p class="text-lg text-(--zi-text-secondary) font-(--zi-font-body) max-w-xl mx-auto">
          Three simple steps. No tech skills. No platform fees.
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="relative">
        <!-- Animated Timeline Path (Desktop) -->
        <div class="hidden md:block absolute top-28 left-[8%] right-[8%] h-1.5 rounded-full -translate-y-1/2" style="background: linear-gradient(90deg, #E5E7EB 0%, #E5E7EB 100%);">
          <!-- Animated Progress Fill -->
          <div class="absolute inset-0 rounded-full overflow-hidden">
            <div class="timeline-flow absolute inset-0 rounded-full" style="background: linear-gradient(90deg, #8B5CF6 0%, #A78BFA 50%, #8B5CF6 100%);" />
          </div>
          <!-- Glow Effect -->
          <div class="absolute -inset-1 rounded-full blur-xl opacity-30" style="background: #8B5CF6;" />
        </div>

        <!-- Steps Grid -->
        <div class="grid md:grid-cols-3 gap-10 lg:gap-16">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative step-wrapper"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
          >
            <!-- Vertical Connection Line -->
            <div class="hidden md:block absolute top-28 left-1/2 w-0.5 h-20 -translate-y-1/2 -translate-x-1/2 origin-top" style="background: linear-gradient(180deg, #8B5CF6 0%, rgba(139, 92, 246, 0.2) 100%); animation: lineGrow 0.6s ease-out backwards;" :style="{ animationDelay: `${0.3 + index * 0.2}s` }" />

            <!-- Step Card -->
            <div
              :ref="(el) => { if (el) cardRefs[index] = el as HTMLElement }"
              class="step-card relative pt-16 pb-8 px-7 rounded-2xl bg-(--zi-background) border transition-all duration-400 hover:shadow-2xl hover:-translate-y-2 group"
              style="border-color: var(--zi-border);"
            >
              <!-- Step Number Badge -->
              <div class="absolute -top-5 left-7 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black font-(--zi-font-display) text-white shadow-lg z-10 step-number-badge"
                :style="{ backgroundColor: step.timeColor }"
              >
                {{ step.number }}
              </div>

              <!-- Icon Circle -->
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-(--zi-accent) transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.05) 100%);"
                v-html="icons[step.icon as keyof typeof icons]"
              />

              <!-- Time Badge -->
              <div class="absolute top-7 right-7 flex items-center gap-2 px-3 py-1.5 rounded-full" style="background: rgba(17, 24, 39, 0.04);">
                <span class="w-1.5 h-1.5 rounded-full" :style="{ backgroundColor: step.timeColor }" />
                <span class="text-xs font-medium font-(--zi-font-body)" style="color: #6B7280;">
                  {{ step.timeLabel }}
                </span>
              </div>

              <!-- Content -->
              <h3 class="text-xl font-bold mb-3 font-(--zi-font-display) text-(--zi-primary) leading-tight">
                {{ step.title }}
              </h3>
              <p class="text-base leading-relaxed font-(--zi-font-body) text-(--zi-text-secondary)">
                {{ step.description }}
              </p>

              <!-- Decorative Corner Accent -->
              <div class="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div class="absolute -bottom-8 -right-8 w-16 h-16 rounded-full" style="background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%);" />
              </div>
            </div>

            <!-- Desktop Arrow Connector -->
            <div
              v-if="index < steps.length - 1"
              class="hidden md:flex absolute top-1/2 -right-7 lg:-right-10 items-center justify-center w-11 h-11 rounded-full shadow-sm z-10 transition-transform duration-300 group-hover:translate-x-1"
              style="background-color: var(--zi-surface); border: 1px solid var(--zi-border);"
            >
              <svg class="w-4 h-4 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Summary Card -->
      <div class="mt-20" data-aos="fade-up" data-aos-delay="600">
        <div class="max-w-md mx-auto p-6 rounded-2xl text-center" style="background: linear-gradient(135deg, rgba(17, 24, 39, 0.02) 0%, rgba(139, 92, 246, 0.03) 100%); border: 1px solid rgba(139, 92, 246, 0.1);">
          <div class="flex items-center justify-center gap-3 mb-2">
            <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm font-medium font-(--zi-font-body) text-(--zi-text-secondary)">
              Total journey time
            </span>
          </div>
          <p class="text-3xl font-black font-(--zi-font-display) text-(--zi-accent)">
            ~6 days
          </p>
          <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body) mt-1">
            from form to live site
          </p>
        </div>
      </div>
    </div>

    <CustomSectionSeparator />
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

/* Timeline Flow Animation */
.timeline-flow {
  animation: flowPulse 4s ease-in-out infinite;
  background-size: 200% 100%;
}

@keyframes flowPulse {
  0%, 100% {
    background-position: 0% 50%;
    opacity: 0.8;
  }
  50% {
    background-position: 100% 50%;
    opacity: 1;
  }
}

/* Connection Line Grow Animation */
@keyframes lineGrow {
  from {
    transform: translateY(0) scaleY(0);
  }
  to {
    transform: translateY(0) scaleY(1);
  }
}

/* Step Number Badge Pop Animation */
.step-number-badge {
  animation: badgePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  animation-delay: calc(0.2s + var(--step-index, 0) * 0.15s);
}

@keyframes badgePop {
  0% {
    opacity: 0;
    transform: scale(0) translateY(10px);
  }
  70% {
    transform: scale(1.1) translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Card hover enhancement */
.step-card:hover {
  border-color: rgba(139, 92, 246, 0.3);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .timeline-flow {
    animation: none;
  }
  .step-number-badge {
    animation: none;
  }
  .step-card {
    transition: none;
  }
}
</style>
