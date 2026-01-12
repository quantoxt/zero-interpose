declare module 'aos' {
  export interface AosOptions {
    duration?: number
    easing?: string
    delay?: number
    once?: boolean
    offset?: number
  }

  export function init(options?: AosOptions): void
  export function refresh(): void
  export function refreshHard(): void
}
