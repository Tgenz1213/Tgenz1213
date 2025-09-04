import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import BaseCard from './BaseCard.vue'

describe('BaseCard', () => {
  it('renders as article when no href and exposes slots', () => {
    const { container } = render(BaseCard, {
      slots: { default: '<p>Body</p>', header: '<h3>Title</h3>', footer: '<span>Footer</span>' },
    })
    expect(container.querySelector('article')).toBeDefined()
    expect(screen.getByText('Title')).toBeDefined()
    expect(screen.getByText('Body')).toBeDefined()
    expect(screen.getByText('Footer')).toBeDefined()
  })

  it('renders as a link and includes security attributes when href provided', () => {
    const { container } = render(BaseCard, {
      props: { href: 'https://example.com' },
      slots: { default: '<p>Body</p>' },
    })
    const link = container.querySelector('a')
    expect(link).toBeDefined()
    expect(link?.getAttribute('href')).toBe('https://example.com')
    expect(link?.getAttribute('target')).toBe('_blank')
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer')
  })
})
