<script lang="ts" setup>
const heroCtaRef = ref<HTMLElement>()
useMagnetic(heroCtaRef, { strength: 0.3 })

// Parallax elements
const parallaxElements = ref<HTMLElement[]>([])
const parallaxSpeeds = [0.15, 0.08, 0.2, 0.12, 0.05, 0.1]

onMounted(() => {
  useParallax(parallaxElements, parallaxSpeeds)
})
</script>

<template>
    <section class="relative h-dvh flex items-center overflow-hidden bg-(--zi-surface)">
        <!-- Decorative Background Pattern -->
        <div class="absolute inset-0 opacity-30">
            <div :ref="(el) => { if (el) parallaxElements[0] = el as HTMLElement }" class="absolute top-0 right-0 w-200 h-200 rounded-full"
                style="background: radial-gradient(circle at center, #8B5CF6 0%, transparent 70%); filter: blur(120px);" />
            <div :ref="(el) => { if (el) parallaxElements[1] = el as HTMLElement }" class="absolute bottom-0 left-0 w-150 h-150 rounded-full"
                style="background: radial-gradient(circle at center, rgba(17, 24, 39, 0.4) 0%, transparent 70%); filter: blur(100px);" />
        </div>

        <!-- Subtle Grid Pattern -->
        <div class="absolute inset-0 opacity-10"
            style="background-image: linear-gradient(var(--zi-border) 1px, transparent 1px), linear-gradient(90deg, var(--zi-border) 1px, transparent 1px); background-size: 60px 60px;" />

        <!-- Floating Geometric Elements -->
        <div :ref="(el) => { if (el) parallaxElements[2] = el as HTMLElement }" class="absolute top-[15%] left-[8%] w-16 h-16 rotate-45 opacity-20" style="border: 2px solid #8B5CF6;" />
        <div :ref="(el) => { if (el) parallaxElements[3] = el as HTMLElement }" class="absolute top-[25%] right-[12%] w-12 h-12 rounded-full opacity-15"
            style="background-color: #8B5CF6;" />
        <div :ref="(el) => { if (el) parallaxElements[4] = el as HTMLElement }" class="absolute bottom-[30%] left-[5%] w-20 h-20 opacity-10"
            style="border: 2px solid #111827; transform: rotate(15deg);" />
        <div :ref="(el) => { if (el) parallaxElements[5] = el as HTMLElement }" class="absolute bottom-[20%] right-[8%] w-8 h-8 rotate-12 opacity-25" style="background-color: #111827;" />

        <!-- Main Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-12 items-center">
                <!-- Left Column - Hero Text -->
                <div class="lg:col-span-8 space-y-5">
                    <!-- Badge -->
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                        style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.2);">
                        <span class="w-2 h-2 rounded-full animate-pulse" style="background-color: #8B5CF6;" />
                        <span class="text-sm tracking-wide text-(--zi-accent) font-(--zi-font-body)">
                            100% Your Earnings
                        </span>
                    </div>

                    <!-- Headline -->
                    <h1 class="leading-[0.9] tracking-tight font-(--zi-font-display) text-(--zi-primary)">
                        <span class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black">Skip the</span>
                        <span class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black relative mt-1">
                            platform.
                            <svg class="absolute -bottom-1.5 left-0 w-full" height="10" viewBox="0 0 400 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6C100 1 300 1 398 6" stroke="#8B5CF6" stroke-width="3"
                                    stroke-linecap="round" />
                            </svg>
                        </span>
                        <span class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mt-1">Claim your
                            pay.</span>
                        <span
                            class="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mt-1 text-(--zi-accent)">Zero
                            Interpose.</span>
                    </h1>

                    <!-- Subheading -->
                    <p
                        class="text-base sm:text-lg max-w-xl leading-relaxed text-(--zi-text-secondary) font-(--zi-font-body) font-light">
                        We build direct-to-reader websites so you keep <span
                            class="font-semibold text-(--zi-primary)">100%</span>—fast, fair, and forever yours.
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-wrap gap-3 pt-2">
                        <button
                            ref="heroCtaRef"
                            class="group relative px-6 py-3 overflow-hidden rounded-lg text-white transition-all duration-300 hover:shadow-xl hover:scale-105 font-(--zi-font-body)"
                            style="background-color: #8B5CF6;">
                            <span class="relative z-10 flex items-center gap-2">
                                Start Your Author Site
                                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div class="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                style="background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);" />
                        </button>

                        <button
                            class="px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 font-(--zi-font-body) text-(--zi-text-primary)"
                            style="border: 1px solid #E5E7EB;">
                            See How It Works
                        </button>
                    </div>
                </div>

                <!-- Right Column - Visual Element -->
                <div class="lg:col-span-4 relative">
                    <div class="relative">
                        <!-- Main Card -->
                        <div class="relative p-6 rounded-2xl shadow-2xl bg-(--zi-background)"
                            style="border: 1px solid #E5E7EB;">
                            <!-- Decorative Corner Accent -->
                            <div class="absolute -top-2 -right-2 w-20 h-20 rounded-full opacity-20"
                                style="background: linear-gradient(135deg, #8B5CF6 0%, transparent 70%);" />

                            <!-- Book Preview Mock -->
                            <div class="space-y-5">
                                <div class="flex items-center gap-3">
                                    <div class="w-14 h-18 rounded-lg shadow-lg flex items-center justify-center"
                                        style="background: linear-gradient(135deg, #111827 0%, #1F2937 100%);">
                                        <svg class="w-7 h-7 text-white opacity-80" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" stroke-width="1.5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-sm font-medium text-(--zi-text-primary)">Your Book Title</p>
                                        <p class="text-xs text-(--zi-text-secondary)">Direct to readers</p>
                                    </div>
                                </div>

                                <!-- Stats Preview -->
                                <div class="pt-3 space-y-2.5" style="border-top: 1px solid #E5E7EB;">
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm text-(--zi-text-secondary)">Platform Fee</span>
                                        <span
                                            class="text-lg font-bold text-(--zi-success) font-(--zi-font-display)">$0</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-sm text-(--zi-text-secondary)">Your Earnings</span>
                                        <span
                                            class="text-lg font-bold text-(--zi-primary) font-(--zi-font-display)">100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Stat Badge -->
                        <div class="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl shadow-xl"
                            style="background-color: #111827;">
                            <p class="text-xs mb-0.5" style="color: #9CA3AF;">Authors Keep</p>
                            <p class="text-2xl font-black text-(--zi-accent) font-(--zi-font-display)">100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Wave Decoration -->
        <div class="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full"
                style="opacity: 0.05;">
                <path
                    d="M0 80L60 72C120 64 240 48 360 42C480 36 600 40 720 44C840 48 960 52 1080 55C1200 58 1320 58 1380 58L1440 58V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
                    fill="#111827" />
            </svg>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20 pointer-events-none">
            <span class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">Scroll</span>
            <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
        </div>
    </section>
</template>

<style lang="css" scoped></style>
