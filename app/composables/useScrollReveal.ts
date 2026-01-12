// Replaced by AOS - this composable is deprecated
// Use data-aos attributes directly in templates instead
// Example: data-aos="fade-up" data-aos-delay="100"
export type AosAnimation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-up-left'
  | 'fade-up-right'
  | 'fade-down-left'
  | 'fade-down-right'
  | 'flip-up'
  | 'flip-down'
  | 'flip-left'
  | 'flip-right'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-in'
  | 'zoom-out'

export interface AosOptions {
  animation?: AosAnimation
  delay?: number
  offset?: number
  duration?: number
  easing?: string
  once?: boolean
}

// Helper function for creating AOS props (optional convenience)
export function useAosProps(options: AosOptions = {}) {
  const {
    animation = 'fade-up',
    delay = 0,
    offset = 120,
    duration = 600,
    easing = 'ease-out',
    once = true,
  } = options

  return {
    'data-aos': animation,
    'data-aos-delay': delay.toString(),
    'data-aos-offset': offset.toString(),
    'data-aos-duration': duration.toString(),
    'data-aos-easing': easing,
    'data-aos-once': once.toString(),
  }
}

