import { render, within } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import ShowcaseCard from './ShowcaseCard.vue'

describe('ShowcaseCard', () => {
  const props = {
    title: 'Test Feature',
    description: 'Short description',
    techs: ['Vue', 'TypeScript'],
  }

  it('renders the title and description', () => {
    const { container } = render(ShowcaseCard, { props })
    const local = within(container as HTMLElement)

    expect(local.getByRole('heading', { name: /test feature/i })).toBeDefined()
    expect(local.getByText(/short description/i)).toBeDefined()
  })

  it('renders the tech items', () => {
    const { container } = render(ShowcaseCard, { props })
    const local = within(container as HTMLElement)

    expect(local.getByText('Vue')).toBeDefined()
    expect(local.getByText('TypeScript')).toBeDefined()
  })

  it('is exposed as an accessible region with aria-labelledby', () => {
    const { container } = render(ShowcaseCard, { props })
    const local = within(container as HTMLElement)

    const region = local.getByRole('region')
    expect(region).toBeDefined()
    // ensure the region is labelled by the rendered heading
    const heading = local.getByRole('heading', { name: /test feature/i })
    expect(region.getAttribute('aria-labelledby')).toBe(heading.id)
  })
})
