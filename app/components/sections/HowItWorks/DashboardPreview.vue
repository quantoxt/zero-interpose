<script lang="ts" setup>
// Author dashboard data
const authorDashboard = {
  weeklyEarnings: '$247',
  recentBuyers: [
    { name: 'Sarah M.', book: 'The Last Kingdom', time: '2 min ago', amount: '$12.99' },
    { name: 'James K.', book: 'Storm Front Ch. 4-5', time: '15 min ago', amount: '50 coins' },
    { name: 'Emma L.', book: 'The Last Kingdom', time: '1 hour ago', amount: '$12.99' },
  ],
  books: [
    { title: 'The Last Kingdom', status: 'completed', sales: 47 },
    { title: 'Storm Front', status: 'serializing', chapters: 12 },
  ],
}

// Reader library data
const readerLibrary = {
  coinBalance: 150,
  books: [
    { title: 'The Last Kingdom', author: 'Sarah J.', cover: '#8B5CF6', status: 'owned', type: 'completed' },
    { title: 'Storm Front', author: 'James K.', cover: '#F59E0B', status: 'chapters 1-7', type: 'serial' },
  ],
}
</script>

<template>
  <section class="relative py-24 sm:py-32 bg-(--zi-surface)">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20" data-aos="fade-up">
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-7" style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(139, 92, 246, 0.15);">
          <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background-color: #8B5CF6;" />
          <span class="text-xs font-semibold tracking-wider uppercase font-(--zi-font-body)" style="color: #8B5CF6;">
            Dashboard Preview
          </span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black font-(--zi-font-display) text-(--zi-primary) mb-5 leading-[1.1]">
          What You <span class="text-(--zi-accent)">Both Get</span>
        </h2>
        <p class="text-lg text-(--zi-text-secondary) font-(--zi-font-body) max-w-2xl mx-auto">
          A powerful dashboard for you. A beautiful library for your readers.
        </p>
      </div>

      <!-- Dashboard Mockups -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Author Dashboard -->
        <div class="space-y-6" data-aos="fade-up" data-aos-delay="100">
          <!-- Dashboard Label -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.05) 100%);">
              <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold font-(--zi-font-display) text-(--zi-primary)">Author Dashboard</h3>
              <p class="text-sm text-(--zi-text-secondary) font-(--zi-font-body)">Track sales, buyers, and book status</p>
            </div>
          </div>

          <!-- Dashboard UI Mock -->
          <div class="p-6 rounded-2xl bg-(--zi-background) border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style="border-color: var(--zi-border);">
            <!-- Top Bar -->
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full" style="background: #EF4444;" />
                <div class="w-3 h-3 rounded-full" style="background: #F59E0B;" />
                <div class="w-3 h-3 rounded-full" style="background: #10B981;" />
              </div>
              <div class="h-2 w-20 rounded-full" style="background: rgba(139, 92, 246, 0.1);" />
            </div>

            <!-- Earnings Card -->
            <div class="p-5 rounded-xl mb-5" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.03) 100%);">
              <p class="text-xs font-semibold uppercase tracking-wider font-(--zi-font-body) mb-2" style="color: #8B5CF6;">This Week</p>
              <p class="text-3xl font-black font-(--zi-font-display) text-(--zi-primary) mb-3">{{ authorDashboard.weeklyEarnings }}</p>
              <!-- Mini Graph -->
              <div class="flex items-end gap-1 h-12">
                <div class="flex-1 rounded-t" style="height: 30%; background: rgba(139, 92, 246, 0.3);" />
                <div class="flex-1 rounded-t" style="height: 50%; background: rgba(139, 92, 246, 0.4);" />
                <div class="flex-1 rounded-t" style="height: 40%; background: rgba(139, 92, 246, 0.35);" />
                <div class="flex-1 rounded-t" style="height: 70%; background: rgba(139, 92, 246, 0.5);" />
                <div class="flex-1 rounded-t" style="height: 60%; background: rgba(139, 92, 246, 0.45);" />
                <div class="flex-1 rounded-t" style="height: 85%; background: rgba(139, 92, 246, 0.6);" />
                <div class="flex-1 rounded-t" style="height: 100%; background: #8B5CF6;" />
              </div>
            </div>

            <!-- Recent Buyers -->
            <div class="mb-5">
              <p class="text-xs font-semibold uppercase tracking-wider font-(--zi-font-body) text-(--zi-text-secondary) mb-3">Recent Buyers</p>
              <div class="space-y-2.5">
                <div
                  v-for="(buyer, index) in authorDashboard.recentBuyers"
                  :key="index"
                  class="flex items-center justify-between p-3 rounded-lg"
                  style="background: var(--zi-surface);"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white" style="background: #8B5CF6;">
                      {{ buyer.name.charAt(0) }}
                    </div>
                    <div>
                      <p class="text-sm font-medium font-(--zi-font-body) text-(--zi-primary)">{{ buyer.name }}</p>
                      <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">{{ buyer.book }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-bold font-(--zi-font-display)" style="color: #10B981;">{{ buyer.amount }}</p>
                    <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">{{ buyer.time }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Book Status Toggles -->
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider font-(--zi-font-body) text-(--zi-text-secondary) mb-3">Your Books</p>
              <div class="space-y-2">
                <div
                  v-for="(book, index) in authorDashboard.books"
                  :key="index"
                  class="flex items-center justify-between p-3 rounded-lg"
                  style="background: var(--zi-surface);"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-12 rounded-lg flex items-center justify-center" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%);">
                      <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm font-medium font-(--zi-font-body) text-(--zi-primary)">{{ book.title }}</p>
                      <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">{{ book.sales }} sales</p>
                    </div>
                  </div>
                  <div class="px-3 py-1 rounded-full text-xs font-semibold font-(--zi-font-body)"
                    :style="{
                      background: book.status === 'completed' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                      color: book.status === 'completed' ? '#10B981' : '#F59E0B'
                    }"
                  >
                    {{ book.status === 'completed' ? 'Completed' : `${book.chapters} chapters` }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Reader Library -->
        <div class="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <!-- Library Label -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.05) 100%);">
              <svg class="w-5 h-5 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold font-(--zi-font-display) text-(--zi-primary)">Reader Library</h3>
              <p class="text-sm text-(--zi-text-secondary) font-(--zi-font-body)">Access books anytime, forever</p>
            </div>
          </div>

          <!-- Library UI Mock -->
          <div class="p-6 rounded-2xl bg-(--zi-background) border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style="border-color: var(--zi-border);">
            <!-- Top Bar -->
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full" style="background: #EF4444;" />
                <div class="w-3 h-3 rounded-full" style="background: #F59E0B;" />
                <div class="w-3 h-3 rounded-full" style="background: #10B981;" />
              </div>
              <div class="h-2 w-20 rounded-full" style="background: rgba(139, 92, 246, 0.1);" />
            </div>

            <!-- Coin Balance -->
            <div class="p-4 rounded-xl mb-5 flex items-center justify-between" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.03) 100%);">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(245, 158, 11, 0.2);">
                  <svg class="w-5 h-5" style="color: #F59E0B;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider font-(--zi-font-body)" style="color: #F59E0B;">Your Balance</p>
                  <p class="text-2xl font-black font-(--zi-font-display) text-(--zi-primary)">{{ readerLibrary.coinBalance }} coins</p>
                </div>
              </div>
              <button class="px-4 py-2 rounded-lg text-sm font-semibold font-(--zi-font-body) text-white" style="background: #F59E0B;">
                Buy More
              </button>
            </div>

            <!-- My Books Section -->
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider font-(--zi-font-body) text-(--zi-text-secondary) mb-3">My Books</p>
              <div class="space-y-3">
                <div
                  v-for="(book, index) in readerLibrary.books"
                  :key="index"
                  class="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  style="background: var(--zi-surface);"
                >
                  <!-- Book Cover -->
                  <div class="w-14 h-18 rounded-lg flex-shrink-0 flex items-center justify-center" :style="{ background: `linear-gradient(135deg, ${book.cover} 0%, ${book.cover}dd 100%)` }">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  <!-- Book Info -->
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-bold font-(--zi-font-display) text-(--zi-primary) truncate">{{ book.title }}</p>
                    <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body) mb-2">by {{ book.author }}</p>

                    <!-- Status Badge -->
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded text-xs font-medium font-(--zi-font-body)"
                        :style="{
                          background: book.type === 'completed' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                          color: book.type === 'completed' ? '#10B981' : '#F59E0B'
                        }"
                      >
                        {{ book.status }}
                      </span>
                    </div>
                  </div>

                  <!-- Action Button -->
                  <button class="px-4 py-2 rounded-lg text-sm font-semibold font-(--zi-font-body) text-white flex-shrink-0" :style="{ background: book.type === 'completed' ? '#10B981' : '#F59E0B' }">
                    {{ book.type === 'completed' ? 'Download' : 'Read' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Note -->
      <div class="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
        <div class="inline-flex items-center gap-3 px-6 py-4 rounded-xl" style="background: var(--zi-background); border: 1px solid var(--zi-border);">
          <svg class="w-6 h-6 text-(--zi-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div class="text-left">
            <p class="text-sm font-semibold font-(--zi-font-body) text-(--zi-primary)">Full ownership, full control</p>
            <p class="text-xs text-(--zi-text-secondary) font-(--zi-font-body)">You own the code. You own the data. You own your readers.</p>
          </div>
        </div>
      </div>
    </div>

    <CustomSectionSeparator />
  </section>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

/* Hover effects for dashboard cards */
.p-6.rounded-2xl.border-2:hover {
  border-color: #8B5CF6;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .p-6.rounded-2xl.border-2:hover {
    transform: none;
  }
  .flex.items-center.gap-4.p-4.rounded-xl:hover {
    transform: none;
  }
}
</style>
