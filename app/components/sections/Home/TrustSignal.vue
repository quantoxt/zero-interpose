<script lang="ts" setup>
const testimonial = {
  quote: 'Zero Interpose helped me stop waiting 90 days for Amazon to pay me—and finally talk to my readers like humans.',
  author: 'Indie fiction author, 3-book series',
}
</script>

<template>
  <section class="relative py-20 sm:py-28 bg-(--zi-background)">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Testimonial Card -->
      <div class="relative p-10 sm:p-16 rounded-3xl border" data-aos="fade-down" style="border-color: var(--zi-border); background: linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%);">
        <!-- Decorative Quote Marks -->
        <div class="absolute top-6 left-8 text-8xl sm:text-9xl leading-none opacity-10 font-(--zi-font-display)" style="color: #8B5CF6;">
          "
        </div>
        <div class="absolute bottom-6 right-8 text-8xl sm:text-9xl leading-none opacity-10 font-(--zi-font-display)" style="color: #8B5CF6;">
          "
        </div>

        <!-- Quote -->
        <blockquote class="relative">
          <p class="text-2xl sm:text-3xl lg:text-4xl leading-relaxed italic font-(--zi-font-display) text-(--zi-primary) mb-8">
            {{ testimonial.quote }}
          </p>

          <!-- Attribution -->
          <footer class="flex items-center justify-center gap-3">
            <div class="w-12 h-px" style="background-color: #8B5CF6;" />
            <cite class="text-base sm:text-lg not-italic font-(--zi-font-body) text-(--zi-text-secondary)">
              — {{ testimonial.author }}
            </cite>
            <div class="w-12 h-px" style="background-color: #8B5CF6;" />
          </footer>
        </blockquote>

        <!-- Subtle gradient accent -->
        <div class="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl" style="background: linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%);" />
      </div>
    </div>
    <CustomSectionSeparator />
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";
</style>
