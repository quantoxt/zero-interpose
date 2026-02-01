<script lang="ts" setup>
const faqs = [
  {
    question: 'Is this a one-time payment or a subscription?',
    answer: 'This is a one-time payment. You own your website outright. There are no monthly fees, subscriptions, or recurring costs. The only ongoing expense would be your domain renewal (typically ~$15/year) if you choose to use a custom domain.',
  },
  {
    question: 'What happens after my site is built?',
    answer: 'After your site is complete, we provide a full ownership handoff. You receive all code, documentation, and access to your hosting account. Your site continues running on Vercel\'s generous free tier, and you can make updates yourself or hire any developer to help.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes! If you start with Starter and later want to add serialization or more books, you can upgrade to Serial or Pro. We credit the full amount of your original plan toward the upgrade.',
  },
  {
    question: 'How do coin systems work for serialized books?',
    answer: 'Readers purchase coins (e.g., 100 coins for $10) and spend them to unlock chapters. You set the coin cost per chapter. When your book is complete, readers can purchase the full eBook and all previously-unlocked chapters become permanently available.',
  },
  {
    question: 'What payment processor do you use?',
    answer: 'We integrate Stripe for all payments. Stripe handles credit card processing and sends funds directly to your bank account. You keep 100% of earnings minus Stripe\'s standard processing fee (typically 2.9% + $0.30 per transaction).',
  },
  {
    question: 'Do I need technical skills?',
    answer: 'Not at all. Your dashboard is designed for authors, not developers. Adding books, updating prices, and viewing earnings are all done through a simple, intuitive interface. Technical maintenance like hosting and SSL is fully managed.',
  },
  {
    question: 'Can I use my own domain name?',
    answer: 'Yes. Pro plans include custom domain setup. For Starter and Serial plans, custom domains are available as an add-on. Your site will initially be on a zero-interpose.com subdomain (e.g., yourname.zero-interpose.com).',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'Each plan includes one round of revisions. After that, minor updates (price changes, book descriptions, etc.) can be done yourself through the dashboard. For design changes or new features, you can purchase additional support hours.',
  },
]
</script>

<template>
  <section class="faq-section">
    <div class="faq-container">
      <!-- Section Header with editorial styling -->
      <header class="faq-header">
        <div class="header-topper">
          <span class="section-label">Questions & Answers</span>
        </div>
        <h2 class="section-title">
          <span class="title-prefix">Common</span>
          <span class="title-accent">questions</span>
        </h2>
        <div class="header-ornament">
          <span class="ornament-line" />
          <span class="ornament-diamond" />
          <span class="ornament-line" />
        </div>
      </header>

      <!-- FAQ Accordion with distinctive styling -->
      <div class="accordion-wrapper">
        <UiAccordion type="single" collapsible class="faq-accordion">
          <UiAccordionItem
            v-for="(faq, index) in faqs"
            :key="index"
            :value="`faq-${index}`"
            class="faq-item"
          >
            <UiAccordionTrigger class="faq-trigger">
              <span class="question-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="question-text">{{ faq.question }}</span>
              <template #icon>
                <span class="trigger-icon">
                  <span class="icon-plus" />
                </span>
              </template>
            </UiAccordionTrigger>
            <UiAccordionContent class="faq-content">
              <div class="content-inner">
                <div class="content-divider" />
                <p class="answer-text">{{ faq.answer }}</p>
              </div>
            </UiAccordionContent>
          </UiAccordionItem>
        </UiAccordion>
      </div>

      <!-- Closing note with CTA -->
      <footer class="faq-footer">
        <p class="footer-text">
          Still have questions?
          <a href="#" class="footer-link">Get in touch</a>
        </p>
      </footer>
    </div>
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

/* Base section styling */
.faq-section {
  @apply py-24 sm:py-32 bg-(--editorial-bg);
  position: relative;
  overflow: hidden;
}

/* Subtle paper texture overlay */
.faq-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.4;
  pointer-events: none;
}

.faq-container {
  @apply max-w-3xl mx-auto px-6 lg:px-8;
  position: relative;
  z-index: 1;
}

/* ===== Header Styling ===== */
.faq-header {
  @apply text-center mb-16 sm:mb-20;
}

.header-topper {
  @apply mb-4;
}

.section-label {
  @apply inline-block;
  @apply text-xs sm:text-sm tracking-[0.2em] uppercase;
  @apply text-(--editorial-accent);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.25em;
}

.section-title {
  @apply text-4xl sm:text-5xl lg:text-6xl font-semibold;
  font-family: 'Cormorant Garamond', serif;
  line-height: 1.1;
  color: var(--editorial-primary);
}

.title-prefix {
  @apply block;
}

.title-accent {
  @apply block;
  color: var(--editorial-accent);
  position: relative;
  display: inline-block;
}

/* Decorative underline on accent */
.title-accent::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--editorial-accent), transparent);
}

.header-ornament {
  @apply flex items-center justify-center gap-3 mt-8;
}

.ornament-line {
  @apply w-12 sm:w-16;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--editorial-accent), transparent);
}

.ornament-diamond {
  width: 8px;
  height: 8px;
  background: var(--editorial-accent);
  transform: rotate(45deg);
}

/* ===== Accordion Styling ===== */
.accordion-wrapper {
  position: relative;
}

/* Top decorative border */
.accordion-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--editorial-accent), transparent);
}

.faq-accordion {
  @apply w-full;
  @apply pt-8;
}

/* Individual accordion item */
.faq-item {
  @apply border-b;
  border-color: rgba(30, 27, 75, 0.08);
  transition: border-color 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(199, 162, 82, 0.2);
}

/* First item gets top border */
.faq-item:first-child {
  border-top: 1px solid rgba(30, 27, 75, 0.08);
}

/* Accordion trigger - override default shadcn styles */
:deep(.faq-trigger) {
  @apply flex items-center gap-4 sm:gap-6;
  @apply py-6 sm:py-7;
  transition: all 0.3s ease;
  cursor: pointer;
}

:deep(.faq-trigger:hover) .question-text {
  color: var(--editorial-accent);
}

:deep(.faq-trigger:hover .icon-plus) {
  background: var(--editorial-accent);
  transform: rotate(90deg) scale(1.1);
}

:deep(.faq-trigger[data-state='open']) {
  @apply pb-4;
}

:deep(.faq-trigger[data-state='open'] .icon-plus) {
  transform: rotate(135deg);
  background: var(--editorial-accent);
}

/* Question number */
.question-number {
  @apply text-lg sm:text-xl;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  color: rgba(30, 27, 75, 0.3);
  min-width: 2.5rem;
  transition: color 0.3s ease;
}

:deep(.faq-trigger[data-state='open']) .question-number {
  color: var(--editorial-accent);
}

/* Question text */
.question-text {
  @apply flex-1;
  @apply text-lg sm:text-xl;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  color: var(--editorial-primary);
  line-height: 1.4;
  text-align: left;
  transition: color 0.3s ease;
}

/* Hide default chevron from shadcn */
:deep(.faq-trigger svg) {
  display: none;
}

/* Custom trigger icon */
:deep(.trigger-icon) {
  @apply flex items-center justify-center;
  @apply w-8 h-8 shrink-0;
}

:deep(.icon-plus) {
  @apply w-5 h-0.5;
  background: var(--editorial-primary);
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.icon-plus::after) {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: var(--editorial-primary);
  transform: rotate(90deg);
  transition: background 0.3s ease;
}

:deep(.faq-trigger[data-state='open'] .icon-plus::after) {
  background: var(--editorial-accent);
}

/* ===== Accordion Content ===== */
.content-inner {
  @apply pb-6 sm:pb-7;
  @apply pl-14 sm:pl-20;
}

.content-divider {
  @apply w-8 h-0.5 mb-4;
  background: linear-gradient(90deg, var(--editorial-accent), transparent);
}

.answer-text {
  @apply text-base sm:text-lg;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: var(--editorial-muted);
  line-height: 1.75;
  letter-spacing: 0.01em;
}

/* ===== Footer Styling ===== */
.faq-footer {
  @apply mt-16 sm:mt-20 text-center;
}

.footer-text {
  @apply text-base;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: var(--editorial-muted);
}

.footer-link {
  @apply ml-2;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-size: 1.1em;
  color: var(--editorial-accent);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--editorial-accent);
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

/* ===== Animation Enhancements ===== */
/* Staggered entrance for items */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-item {
  animation: fadeInUp 0.5s ease-out backwards;
}

.faq-item:nth-child(1) { animation-delay: 0.1s; }
.faq-item:nth-child(2) { animation-delay: 0.15s; }
.faq-item:nth-child(3) { animation-delay: 0.2s; }
.faq-item:nth-child(4) { animation-delay: 0.25s; }
.faq-item:nth-child(5) { animation-delay: 0.3s; }
.faq-item:nth-child(6) { animation-delay: 0.35s; }
.faq-item:nth-child(7) { animation-delay: 0.4s; }
.faq-item:nth-child(8) { animation-delay: 0.45s; }

/* ===== Responsive Adjustments ===== */
@media (max-width: 640px) {
  .section-title {
    font-size: 2.25rem;
  }

  :deep(.faq-trigger) {
    @apply py-5 gap-3;
  }

  .question-number {
    @apply text-base;
    min-width: 2rem;
  }

  .question-text {
    @apply text-base;
  }

  .content-inner {
    @apply pb-5 pl-12;
  }

  .answer-text {
    @apply text-sm;
  }
}

/* ===== Dark Mode Support ===== */
@media (prefers-color-scheme: dark) {
  .faq-section {
    background: oklch(0.13 0.028 261.692);
  }

  .section-title,
  .question-text {
    color: oklch(0.985 0.002 247.839);
  }

  .question-number {
    color: rgba(255, 255, 255, 0.2);
  }

  .answer-text,
  .footer-text {
    color: oklch(0.707 0.022 261.325);
  }

  .faq-item {
    border-color: rgba(255, 255, 255, 0.08);
  }

  :deep(.icon-plus) {
    background: oklch(0.985 0.002 247.839);
  }

  :deep(.icon-plus::after) {
    background: oklch(0.985 0.002 247.839);
  }

  :deep(.faq-trigger[data-state='open'] .icon-plus::after) {
    background: var(--editorial-accent);
  }
}
</style>
