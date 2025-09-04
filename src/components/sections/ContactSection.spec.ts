import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/vue'
import ContactSection from './ContactSection.vue'
import { useContactLinks } from '@/composables/useContactLinks'
import { ref } from 'vue'

// Mock the composable
vi.mock('@/composables/useContactLinks')

const mockContactLinks = [
  {
    name: 'Email',
    url: 'mailto:test@example.com',
    iconPath:
      'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/test',
    iconPath:
      'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  },
]

describe('ContactSection', () => {
  beforeEach(() => {
    // Provide the mock implementation for the composable
    vi.mocked(useContactLinks).mockReturnValue({
      contactLinks: ref(mockContactLinks),
    })

    render(ContactSection, {
      global: {
        stubs: {
          BaseSection: {
            template: '<section><slot></slot></section>',
          },
        },
      },
    })
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the static heading and paragraph', () => {
    expect(screen.getByText('Get In Touch')).toBeTruthy()
    expect(screen.getByText(/I'm currently open to new opportunities/)).toBeTruthy()
  })

  it('renders a link for each item in contactLinks', () => {
    const renderedLinks = screen.getAllByRole('link')

    expect(renderedLinks.length).toBe(mockContactLinks.length)

    renderedLinks.forEach((link, index) => {
      const expected = mockContactLinks[index]
      expect(link.getAttribute('href')).toBe(expected.url)
      expect(link.textContent).toContain(expected.name)
      expect(link.getAttribute('target')).toBe('_blank')
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('renders an SVG icon inside each link', () => {
    const renderedLinks = screen.getAllByRole('link')

    renderedLinks.forEach((link) => {
      const icon = link.querySelector('svg')
      const path = icon?.querySelector('path')

      expect(icon).toBeTruthy()
      expect(path).toBeTruthy()
      expect(path?.getAttribute('d')).toBeTruthy()
    })
  })
})
