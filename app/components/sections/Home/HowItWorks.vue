<script lang="ts" setup>
const steps = [
  {
    number: '01',
    title: 'Tell us about your book',
    description: '4-minute form at /start',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5h6M11 9h6M5 5h.01M5 9h.01M5 19h6v-6H5v6ZM11 19h6M11 5h6v4h-6V5Z"/></svg>',
  },
  {
    number: '02',
    title: 'We build your site',
    description: 'Clean, fast, mobile-ready',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  },
  {
    number: '03',
    title: 'Publish & profit',
    description: 'Keep 100%, own your audience',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  },
]

const arrowRight = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'

// Cursor spotlight effect for cards
const cardRefs = ref<(HTMLElement | null)[]>([])

const handleCardMouseMove = (e: MouseEvent, index: number) => {
  const card = cardRefs.value[index]
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

const handleCardMouseLeave = (index: number) => {
  const card = cardRefs.value[index]
  if (!card) return
  card.style.removeProperty('--mouse-x')
  card.style.removeProperty('--mouse-y')
}
</script>

<template>
  <section class="relative py-20 sm:py-28 bg-(--zi-background)">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="flip-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 font-(--zi-font-display) text-(--zi-primary)">
          How it <span class="text-(--zi-accent)">works</span>
        </h2>
        <div class="w-24 h-1 mx-auto rounded-full" style="background: linear-gradient(90deg, #8B5CF6 0%, transparent 100%);" />
      </div>

      <!-- Steps -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative group"
          data-aos="flip-up"
          :data-aos-delay="index * 200"
        >
          <!-- Step Card -->
          <div
            :ref="(el) => { if (el) cardRefs[index] = el as HTMLElement }"
            class="step-card-wrapper relative"
          >
            <div
              class="step-card relative p-8 rounded-2xl border bg-(--zi-background) transition-all duration-300 hover:shadow-xl overflow-hidden"
              style="border-color: var(--zi-border);"
              @mousemove="handleCardMouseMove($event, index)"
              @mouseleave="handleCardMouseLeave(index)"
            >
              <!-- Icon -->
              <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-6 mt-4 text-(--zi-accent)" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%);" v-html="step.icon" />

            <!-- Title -->
            <h3 class="text-xl font-bold mb-3 font-(--zi-font-display) text-(--zi-primary)">
              {{ step.title }}
            </h3>

            <!-- Description -->
            <p class="text-base font-(--zi-font-body) text-(--zi-text-secondary)">
              {{ step.description }}
            </p>

            <!-- Subtle hover effect -->
            <div class="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, transparent 100%);" />
            </div>

            <!-- Step Number (outside overflow-hidden) -->
            <div
              class="step-number-badge absolute -top-4 left-8 w-10 h-10 rounded-full flex items-center justify-center text-lg font-black font-(--zi-font-display) z-10 pointer-events-none"
              style="background-color: #8B5CF6; color: white; animation-delay: calc(0.2s + (var(--step-index, 0) * 0.2s));"
              :style="{ '--step-index': index }"
            >
              {{ step.number }}
            </div>
          </div>

          <!-- Arrow (desktop only, not on last item) -->
          <div
            v-if="index < steps.length - 1"
            class="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 items-center justify-center w-12 h-12 rounded-full transition-transform duration-300 group-hover:translate-x-1"
            style="background-color: #FAFAFA;"
            v-html="arrowRight"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

.step-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  padding: 2px;
  background: radial-gradient(
    150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    var(--zi-accent),
    transparent 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.step-card:hover::before {
  opacity: 1;
}

/* Step Number Badge Animation */
.step-number-badge {
  animation: step-badge-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
  /* Delay is set inline via CSS var */
}

@keyframes step-badge-pop {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  70% {
    transform: scale(1.15);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .step-number-badge {
    animation: none;
  }
}
</style>
