<script lang="ts" setup>
const pricingCtaRefs = ref<HTMLElement[]>([])

const plans = [
  {
    name: 'Starter',
    price: 299,
    bestFor: 'One completed book',
    features: [
      '1 book page',
      'Direct eBook sales',
      'Reader library',
      'Earnings dashboard',
    ],
    cta: 'Start with Starter',
    featured: false,
  },
  {
    name: 'Serial',
    price: 449,
    bestFor: 'Ongoing/serialized book',
    features: [
      'Chapter-by-chapter coin system',
      'Online reading only',
      'Auto-transition to full purchase',
      'All Starter features',
    ],
    cta: 'Start with Serial',
    featured: true,
  },
  {
    name: 'Pro',
    price: 699,
    bestFor: 'Multiple books + growth',
    features: [
      'Up to 5 books',
      'Coin + full purchase support',
      'Reader email collection',
      'Custom domain setup',
    ],
    cta: 'Start with Pro',
    featured: false,
  },
]

const includedFeatures = [
  'Mobile-optimized design',
  'Stripe payments',
  'Vercel hosting (SSL + CDN)',
  '1 round of revisions',
  'Full ownership handoff',
]

const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'

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

// Apply magnetic effect to pricing buttons after mount
onMounted(() => {
  pricingCtaRefs.value.forEach((ref) => {
    if (ref) {
      useMagnetic({ value: ref }, { strength: 0.25 })
    }
  })
})
</script>

<template>
  <section class="relative py-20 sm:py-28 bg-(--zi-surface)">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 font-(--zi-font-display) text-(--zi-primary)">
          Simple, upfront <span class="text-(--zi-accent)">pricing</span>. No hidden fees.
        </h2>
        <div class="w-24 h-1 mx-auto rounded-full" style="background: linear-gradient(90deg, #8B5CF6 0%, transparent 100%);" />
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="pricing-card-wrapper group relative flex flex-col"
        >
          <!-- Featured Badge -->
          <div class="absolute -top-3 left-0 right-0 flex justify-center z-10 pointer-events-none">
            <div
              v-if="plan.featured"
              class="featured-badge px-4 py-1 rounded-full text-xs font-bold tracking-wide text-white"
              style="background-color: #8B5CF6;"
            >
              MOST POPULAR
            </div>
          </div>

          <div
            :ref="(el) => { if (el) cardRefs[index] = el as HTMLElement }"
            class="pricing-card relative p-8 rounded-2xl border transition-all duration-300 overflow-hidden flex-1 flex flex-col"
            :class="plan.featured
              ? 'bg-(--zi-primary) text-white border-(--zi-accent) shadow-2xl md:-translate-y-2'
              : 'bg-(--zi-background) border-(--zi-border) hover:shadow-xl hover:-translate-y-1'"
            @mousemove="handleCardMouseMove($event, index)"
            @mouseleave="handleCardMouseLeave(index)"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
          >
          <!-- Plan Name -->
          <h3 class="text-2xl font-bold mb-2 font-(--zi-font-display)" :class="plan.featured ? 'text-white' : 'text-(--zi-primary)'">
            {{ plan.name }}
          </h3>

          <!-- Best For -->
          <p class="text-sm mb-6 font-(--zi-font-body)" :class="plan.featured ? 'text-gray-300' : 'text-(--zi-text-secondary)'">
            Best for: {{ plan.bestFor }}
          </p>

          <!-- Price -->
          <div class="mb-6">
            <span class="text-4xl sm:text-5xl font-black font-(--zi-font-display)" :class="plan.featured ? 'text-white' : 'text-(--zi-primary)'">
              ${{ plan.price }}
            </span>
            <span class="text-sm ml-1" :class="plan.featured ? 'text-gray-300' : 'text-(--zi-text-secondary)'">one-time</span>
          </div>

          <!-- Features -->
          <ul class="flex-1 space-y-3 mb-8">
            <li
              v-for="(feature, idx) in plan.features"
              :key="idx"
              class="flex items-start gap-3 text-sm font-(--zi-font-body)"
              :class="plan.featured ? 'text-gray-200' : 'text-(--zi-text-primary)'"
            >
              <span class="mt-0.5 flex-shrink-0" style="color: #8B5CF6;" v-html="checkIcon" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <button
            :ref="(el) => { if (el) pricingCtaRefs[index] = el as HTMLElement }"
            class="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 font-(--zi-font-body)"
            :class="plan.featured
              ? 'bg-white text-(--zi-primary) hover:shadow-lg'
              : 'bg-(--zi-accent) text-white hover:shadow-lg'"
          >
            {{ plan.cta }}
          </button>
          </div>
        </div>
      </div>

      <!-- All Plans Include -->
      <div class="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
        <div class="p-8 rounded-2xl border bg-(--zi-background)" style="border-color: var(--zi-border);">
          <h4 class="text-lg font-bold mb-6 text-center font-(--zi-font-display) text-(--zi-primary)">
            All plans include:
          </h4>
          <div class="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            <div
              v-for="(feature, index) in includedFeatures"
              :key="index"
              class="flex items-center gap-3 text-sm font-(--zi-font-body) text-(--zi-text-secondary)"
            >
              <span class="flex-shrink-0 text-(--zi-accent)" v-html="checkIcon" />
              <span>{{ feature }}</span>
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

.pricing-card::before {
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
  z-index: 1;
}

.pricing-card:hover::before {
  opacity: 1;
}

/* Featured Badge Pulse Animation */
.featured-badge {
  animation: featured-badge-pulse 2.5s ease-in-out infinite;
  box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
}

@keyframes featured-badge-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(139, 92, 246, 0);
    transform: scale(1.02);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
    transform: scale(1);
  }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .featured-badge {
    animation: none;
  }
}
</style>
