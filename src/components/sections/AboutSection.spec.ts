import { describe, it, expect, vi, beforeAll } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import AboutSection from './AboutSection.vue'
import { useStatuses } from '@/composables/useStatuses'
import { ref } from 'vue'

// Local mock for image assets
vi.mock('/headshot.jpg', () => ({ default: '/headshot.jpg' }))

// Add this line to enable the mock for the composable
vi.mock('@/composables/useStatuses')

describe('AboutSection', () => {
  const mockStatuses = [
    { label: 'Availability', value: 'Open to new opportunities', icon: 'availability' },
    { label: 'Location', value: 'Maxwell, TX', icon: 'location' },
    { label: 'Work Preference', value: 'Open to Remote', icon: 'work' },
    { label: 'Security Clearance', value: 'Eligible', icon: 'shield' },
    { label: 'Relocation', value: 'Not open to relocation', icon: 'relocation' },
    { label: 'Education', value: "Pursuing Master's in CS", icon: 'education' },
  ]

  beforeAll(() => {
    globalThis.IntersectionObserver = vi.fn(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }
    }) as unknown as typeof IntersectionObserver
  })

  const createWrapper = () => {
    // vi.mocked works here because the module was mocked at the top level
    vi.mocked(useStatuses).mockReturnValue({
      statuses: ref(mockStatuses),
      fetchStatuses: vi.fn(),
    })
    return mount(AboutSection)
  }

  it('renders the main "About Me" heading', () => {
    const wrapper = createWrapper()
    const heading = wrapper.find('h2')
    expect(heading.text()).toBe('About Me')
  })

  it('renders all content subheadings', () => {
    const wrapper = createWrapper()
    const subheadingTexts = wrapper.findAll('h3').map((node) => node.text())
    expect(subheadingTexts).toEqual(['Who I Am', 'My Background', 'What I Do'])
  })

  it('renders the profile image with correct alt text', () => {
    const wrapper = createWrapper()
    const image = wrapper.find('.profile-image-wrapper img')
    expect(image.exists()).toBe(true)
    expect(image.attributes('alt')).toBe('A headshot of Timothy Genz')
  })

  it('renders all status items with their correct text', async () => {
    const wrapper = createWrapper()

    // Ensures that onMounted and reactivity cycles are complete
    await flushPromises()

    const statusItems = wrapper.findAll('.status-item')
    expect(statusItems.length).toBe(mockStatuses.length)

    statusItems.forEach((itemWrapper, index) => {
      const expected = mockStatuses[index]
      const itemText = itemWrapper.text()
      expect(itemText).toContain(expected.label)
      expect(itemText).toContain(expected.value)
    })
  })
})
