import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutSection from './AboutSection.vue'

vi.mock('headshot.jpg', () => ({
  default: 'mocked-image-path',
}))

describe('AboutSection', () => {
  const wrapper = mount(AboutSection)

  it('renders the main "About Me" heading', () => {
    const heading = wrapper.find('h2')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('About Me')
  })

  it('renders all content subheadings', () => {
    const subheadingTexts = wrapper.findAll('h3').map((node) => node.text())

    expect(subheadingTexts).toEqual(['Who I Am', 'My Background', 'What I Do'])
  })

  it('renders the profile image with correct alt text', () => {
    const image = wrapper.find('.profile-image-wrapper img')

    expect(image.exists()).toBe(true)
    expect(image.attributes('alt')).toBe('A headshot of Timothy Genz')
  })

  it('renders all status items with their correct text', () => {
    const expectedStatuses = [
      { label: 'Availability', value: 'Open to new opportunities' },
      { label: 'Location', value: 'Maxwell, TX' },
      { label: 'Work Preference', value: 'Open to Remote' },
      { label: 'Security Clearance', value: 'Eligible' },
      { label: 'Relocation', value: 'Not open to relocation' },
      { label: 'Education', value: "Pursuing Master's in CS" },
    ]

    const statusItems = wrapper.findAll('.status-item')
    expect(statusItems.length).toBe(expectedStatuses.length)

    statusItems.forEach((itemWrapper, index) => {
      const expected = expectedStatuses[index]
      const itemText = itemWrapper.text()

      expect(itemText).toContain(expected.label)
      expect(itemText).toContain(expected.value)
    })
  })
})
