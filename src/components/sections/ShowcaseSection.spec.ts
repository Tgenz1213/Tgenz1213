import { render, screen, cleanup } from '@testing-library/vue'
import ShowcaseSection from './ShowcaseSection.vue'
import { useShowcase } from '@/composables/useShowcase'
import { vi, describe, it, expect, beforeEach, afterEach, beforeAll } from 'vitest'
import { ref } from 'vue'

vi.mock('@/composables/useShowcase')
vi.mock('/headshot.jpg', () => ({ default: '/headshot.jpg' }))

const mockShowcases = [
  {
    id: '1',
    title: 'Test Showcase 1',
    description: 'Description 1',
    techs: ['Vue', 'Vitest'],
    href: 'https://example.com/1',
  },
  {
    id: '2',
    title: 'Test Showcase 2',
    description: 'Description 2',
    techs: ['TypeScript', 'Pinia'],
    href: 'https://example.com/2',
  },
]

describe('ShowcaseSection', () => {
  const fetchShowcases = vi.fn()

  beforeAll(() => {
    globalThis.IntersectionObserver = vi.fn(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }
    }) as unknown as typeof IntersectionObserver
  })

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useShowcase).mockReturnValue({
      showcases: ref(mockShowcases),
      fetchShowcases,
    })
    render(ShowcaseSection)
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the section title and intro', () => {
    expect(screen.getByText('Showcase')).toBeTruthy()
    expect(screen.getByText('Technologies and tools used to build this site.')).toBeTruthy()
  })

  it('renders ShowcaseCard components with correct props', () => {
    const showcaseTitles = screen.getAllByText(/Test Showcase/)
    expect(showcaseTitles.length).toBe(2)
    expect(showcaseTitles[0]).toBeTruthy()
    expect(showcaseTitles[1]).toBeTruthy()
  })

  it('calls fetchShowcases on mount', () => {
    expect(fetchShowcases).toHaveBeenCalledTimes(1)
  })
})
