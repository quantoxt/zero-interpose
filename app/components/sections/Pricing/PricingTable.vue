<script lang="ts" setup>
interface Feature {
  name: string
  starter: string | boolean
  serial: string | boolean
  pro: string | boolean
}

const features: Feature[] = [
  { name: 'Books included', starter: '1 completed', serial: '3 serializing', pro: 'Unlimited' },
  { name: 'Coin system', starter: false, serial: true, pro: true },
  { name: 'Reader library', starter: false, serial: true, pro: true },
  { name: 'Custom domain', starter: false, serial: false, pro: true },
  { name: 'Priority support', starter: false, serial: false, pro: true },
  { name: 'Analytics', starter: 'Basic', serial: 'Basic', pro: 'Advanced' },
  { name: 'Revision rounds', starter: '1', serial: '1', pro: '2' },
  { name: 'Hosting', starter: 'Vercel', serial: 'Vercel', pro: 'Vercel' },
]

const plans = [
  { name: 'Starter', price: 499, tagline: 'For first-time authors' },
  { name: 'Serial', price: 899, tagline: 'For serialized authors', featured: true },
  { name: 'Pro', price: 1499, tagline: 'For established authors' },
]
</script>

<template>
  <section class="pricing-table-section">
    <div class="pricing-container">
      <!-- Table Header -->
      <div class="table-header">
        <div class="header-spacer" />
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="plan-header"
          :class="{ 'plan-header-featured': plan.featured }"
        >
          <span class="plan-tagline">{{ plan.tagline }}</span>
          <h3 class="plan-name">{{ plan.name }}</h3>
          <div class="plan-price">
            <span class="price-currency">$</span>
            <span class="price-amount">{{ plan.price }}</span>
          </div>
          <span class="price-note">one-time</span>
        </div>
      </div>

      <!-- Feature Rows -->
      <div class="table-body">
        <div
          v-for="(feature, idx) in features"
          :key="feature.name"
          class="feature-row"
          :class="{ 'feature-row-accent': idx % 2 === 0 }"
        >
          <div class="feature-name">{{ feature.name }}</div>
          <div class="feature-values">
            <div
              v-for="plan in plans"
              :key="plan.name"
              class="feature-value"
              :class="{ 'feature-value-featured': plan.featured }"
            >
              <template v-if="typeof feature[plan.name.toLowerCase() as keyof Feature] === 'boolean'">
                <span
                  v-if="feature[plan.name.toLowerCase() as keyof Feature]"
                  class="check-icon"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span v-else class="dash-icon">—</span>
              </template>
              <template v-else>
                <span class="feature-text">{{ feature[plan.name.toLowerCase() as keyof Feature] }}</span>
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- Table Footer with CTAs -->
      <div class="table-footer">
        <div class="footer-spacer" />
        <div v-for="plan in plans" :key="plan.name" class="plan-cta">
          <button
            class="cta-button"
            :class="{ 'cta-button-featured': plan.featured }"
          >
            Choose {{ plan.name }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

.pricing-table-section {
  @apply py-24 bg-(--editorial-bg);
  position: relative;
}

/* Paper texture */
.pricing-table-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.pricing-container {
  @apply max-w-5xl mx-auto px-4 sm:px-6 lg:px-8;
  position: relative;
  z-index: 1;
}

/* ===== Table Structure ===== */
.table-header,
.table-body,
.table-footer {
  @apply grid;
  grid-template-columns: 1fr repeat(3, minmax(0, 1fr));
  gap: 0;
}

.header-spacer,
.footer-spacer,
.feature-name {
  @apply pr-6;
}

/* ===== Header Styling ===== */
.table-header {
  @apply mb-1;
}

.header-spacer {
  min-height: 140px;
}

.plan-header {
  @apply relative px-4 sm:px-6 py-6 text-center;
  transition: all 0.3s ease;
}

.plan-header-featured {
  background: linear-gradient(180deg, rgba(199, 162, 82, 0.08) 0%, transparent 100%);
}

.plan-header-featured::before {
  content: 'Most Popular';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  @apply px-3 py-1 text-xs tracking-wider uppercase;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  background: var(--editorial-accent);
  color: white;
  border-radius: 2px;
}

.plan-tagline {
  @apply block text-xs sm:text-sm tracking-[0.15em] uppercase mb-3;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: var(--editorial-accent);
  letter-spacing: 0.2em;
}

.plan-name {
  @apply text-2xl sm:text-3xl font-semibold mb-3;
  font-family: 'Cormorant Garamond', serif;
  color: var(--editorial-primary);
  line-height: 1.2;
}

.plan-price {
  @apply flex items-center justify-center;
  gap: 2px;
}

.price-currency {
  @apply text-lg sm:text-xl;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  color: var(--editorial-muted);
  transform: translateY(-4px);
}

.price-amount {
  @apply text-4xl sm:text-5xl font-semibold;
  font-family: 'Cormorant Garamond', serif;
  color: var(--editorial-primary);
  line-height: 1;
}

.price-note {
  @apply block text-xs sm:text-sm mt-2;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: var(--editorial-muted);
}

/* ===== Feature Rows ===== */
.table-body {
  @apply divide-y divide-[rgba(30,27,75,0.08)];
}

.feature-row {
  @apply grid;
  grid-template-columns: 1fr repeat(3, minmax(0, 1fr));
  transition: background 0.2s ease;
}

.feature-row-accent {
  background: rgba(199, 162, 82, 0.03);
}

.feature-name {
  @apply py-4 sm:py-5 flex items-center;
  @apply text-sm sm:text-base;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: var(--editorial-primary);
}

.feature-values {
  @apply contents;
}

.feature-value {
  @apply py-4 sm:py-5 px-4 sm:px-6 text-center;
  transition: all 0.2s ease;
}

.feature-value-featured {
  background: rgba(199, 162, 82, 0.04);
}

.check-icon {
  @apply inline-flex items-center justify-center;
  @apply w-6 h-6;
  color: var(--editorial-accent);
}

.check-icon svg {
  @apply w-full h-full;
}

.dash-icon {
  @apply inline-block;
  color: rgba(30, 27, 75, 0.2);
  font-size: 1.25rem;
}

.feature-text {
  @apply text-sm sm:text-base;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: var(--editorial-muted);
}

.feature-value-featured .feature-text {
  color: var(--editorial-primary);
  font-weight: 500;
}

/* ===== Footer with CTAs ===== */
.table-footer {
  @apply mt-2 pt-6;
}

.footer-spacer {
  min-height: 60px;
}

.plan-cta {
  @apply px-4 sm:px-6 py-4;
}

.cta-button {
  @apply w-full px-6 py-3 sm:py-4;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--editorial-primary);
  background: transparent;
  border: 1.5px solid rgba(30, 27, 75, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
}

.cta-button:hover {
  border-color: var(--editorial-accent);
  color: var(--editorial-accent);
  transform: translateY(-2px);
}

.cta-button-featured {
  background: var(--editorial-accent);
  border-color: var(--editorial-accent);
  color: white;
}

.cta-button-featured:hover {
  background: #b8923d;
  border-color: #b8923d;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(199, 162, 82, 0.3);
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .table-header,
  .table-body,
  .table-footer {
    grid-template-columns: 1fr;
  }

  .header-spacer,
  .footer-spacer {
    display: none;
  }

  .feature-name {
    @apply pr-4 pb-2;
    font-weight: 600;
  }

  .feature-values {
    @apply contents;
  }

  .feature-value {
    @apply py-3 px-4;
    border-top: 1px solid rgba(30, 27, 75, 0.05);
  }

  .feature-value::before {
    content: attr(data-plan);
    @apply block text-xs uppercase tracking-wider mb-1;
    font-family: 'Inter', sans-serif;
    color: var(--editorial-accent);
  }
}

/* ===== Dark Mode ===== */
@media (prefers-color-scheme: dark) {
  .pricing-table-section {
    background: oklch(0.13 0.028 261.692);
  }

  .plan-name,
  .feature-name {
    color: oklch(0.985 0.002 247.839);
  }

  .price-amount,
  .cta-button {
    color: oklch(0.985 0.002 247.839);
    border-color: rgba(255, 255, 255, 0.15);
  }

  .price-currency,
  .price-note,
  .feature-text {
    color: oklch(0.707 0.022 261.325);
  }

  .feature-row {
    border-color: rgba(255, 255, 255, 0.06);
  }

  .feature-row-accent {
    background: rgba(199, 162, 82, 0.06);
  }

  .dash-icon {
    color: rgba(255, 255, 255, 0.15);
  }

  .plan-header-featured {
    background: linear-gradient(180deg, rgba(199, 162, 82, 0.12) 0%, transparent 100%);
  }

  .feature-value-featured {
    background: rgba(199, 162, 82, 0.08);
  }
}
</style>
