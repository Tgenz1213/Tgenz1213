import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from './ContactSection.vue'

describe('ContactSection', () => {
  const wrapper = mount(ContactSection)

  it('renders the static heading and paragraph', () => {
    expect(wrapper.find('h2').text()).toBe('Get In Touch')
    expect(wrapper.find('p').text()).toContain(
      "I'm currently open to new opportunities"
    )
  })

  it('renders a link for each item in contactLinks', () => {
    const expectedLinks = [
      { name: 'Email', url: 'mailto:timothy.j.genz@gmail.com' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/timothy-genz' },
      { name: 'GitHub', url: 'https://github.com/tgenz1213' }
    ]

    const renderedLinks = wrapper.findAll('.contact-card')

    expect(renderedLinks.length).toBe(expectedLinks.length)

    renderedLinks.forEach((linkWrapper, index) => {
      const expected = expectedLinks[index]
      expect(linkWrapper.text()).toBe(expected.name)
      expect(linkWrapper.attributes('href')).toBe(expected.url)
      expect(linkWrapper.attributes('target')).toBe('_blank')
      expect(linkWrapper.attributes('rel')).toBe('noopener noreferrer')
    })
  })

  it('renders an SVG icon inside each link', () => {
    const renderedLinks = wrapper.findAll('.contact-card')

    renderedLinks.forEach((linkWrapper) => {
      const icon = linkWrapper.find('svg')
      const path = icon.find('path')

      expect(icon.exists()).toBe(true)
      expect(path.exists()).toBe(true)

      expect(path.attributes('d')).toBeTruthy()
    })
  })
})
