export function useParallax(
  elements: Ref<HTMLElement[]>,
  speeds: number[]
) {
  if (!import.meta.client) return

  let ticking = false

  const updateParallax = () => {
    const scrollY = window.scrollY

    elements.value.forEach((el, index) => {
      if (!el) return
      const speed = speeds[index] || 0.5
      const yPos = -(scrollY * speed)
      el.style.transform = `translateY(${yPos}px)`
    })

    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
}
