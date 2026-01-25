import { vi } from 'vitest'

global.IntersectionObserver = vi.fn(function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }
}) as unknown as typeof IntersectionObserver

vi.mock('/headshot.jpg', () => ({ default: '/headshot.jpg' }))
