<script lang="ts" setup>
const values = [
  {
    icon: 'shield',
    title: 'Full Ownership',
    description: 'Your readers, your data, your domain. No lock-in.',
  },
  {
    icon: 'wallet',
    title: 'Instant Payouts',
    description: 'Keep 100% of sales. Real-time dashboard. Payouts via Stripe in days—not months.',
  },
  {
    icon: 'book-open',
    title: 'Flexible Publishing',
    description: 'Sell completed books or offer chapter-by-chapter access while you write (with coins).',
  },
]

const icons: Record<string, string> = {
  shield: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>',
  wallet: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>',
  'book-open': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
}

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
      <div class="text-center mb-16" data-aos="zoom-in">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 font-(--zi-font-display) text-(--zi-primary)">
          What you get with <span class="text-(--zi-accent)">Zero Interpose</span>
        </h2>
        <div class="w-24 h-1 mx-auto rounded-full" style="background: linear-gradient(90deg, #8B5CF6 0%, transparent 100%);" />
      </div>

      <!-- 3-Column Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(value, index) in values"
          :key="index"
          :ref="(el) => { if (el) cardRefs[index] = el as HTMLElement }"
          class="value-card group relative p-8 rounded-2xl border bg-(--zi-background) transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
          style="border-color: var(--zi-border);"
          @mousemove="handleCardMouseMove($event, index)"
          @mouseleave="handleCardMouseLeave(index)"
          data-aos="zoom-in"
          :data-aos-delay="index * 200"
        >
          <!-- Subtle gradient overlay on hover -->
          <div class="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, transparent 100%);" />

          <!-- Icon -->
          <div class="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 text-(--zi-accent)" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%);" v-html="icons[value.icon]" />

          <!-- Title -->
          <h3 class="relative text-xl font-bold mb-3 font-(--zi-font-display) text-(--zi-primary)">
            {{ value.title }}
          </h3>

          <!-- Description -->
          <p class="relative text-base leading-relaxed font-(--zi-font-body) text-(--zi-text-secondary)">
            {{ value.description }}
          </p>

          <!-- Decorative corner accent -->
          <div class="absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150" style="background-color: #8B5CF6;" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

.value-card::before {
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

.value-card:hover::before {
  opacity: 1;
}
</style>
