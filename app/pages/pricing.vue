<script lang="ts" setup>
useHead({
  title: 'Pricing - Zero Interpose',
  meta: [
    {
      name: 'description',
      content: 'Simple, transparent pricing for author websites. One-time payment, no subscriptions. Starter, Serial, and Pro plans available.',
    },
  ],
})
</script>

<template>
  <main>
    <SectionsPricingCards/>
    <SectionsPricingFaq />
  </main>
</template>

<style lang="css" scoped>
@reference "tailwindcss";
</style>
