export function useMagnetic(
  element: Ref<HTMLElement | undefined>,
  options: { strength?: number; precision?: number } = {}
) {
  const { strength = 0.3, precision = 2 } = options

  const handleMouseMove = (e: MouseEvent) => {
    const el = getDomElement()
    if (!el) return

    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    el.style.transform = `translate(${deltaX.toFixed(precision)}px, ${deltaY.toFixed(precision)}px)`
  }

  const handleMouseLeave = () => {
    const el = getDomElement()
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  const getDomElement = (): HTMLElement | null => {
    if (!element.value) return null
    // If it's already an HTMLElement, use it
    if (element.value instanceof HTMLElement) return element.value
    // If it's a component ref (like NuxtLink), try to find the actual element
    return element.value.$el || null
  }

  onMounted(() => {
    const el = getDomElement()
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
  })

  onUnmounted(() => {
    const el = getDomElement()
    if (!el) return
    el.removeEventListener('mousemove', handleMouseMove)
    el.removeEventListener('mouseleave', handleMouseLeave)
  })

  return {
    element,
  }
}
