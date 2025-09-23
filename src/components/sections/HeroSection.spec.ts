import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import HeroSection from './HeroSection.vue'

describe('HeroSection', () => {
  let wrapper: VueWrapper<InstanceType<typeof HeroSection>>

  beforeEach(() => {
    vi.useFakeTimers()
    wrapper = mount(HeroSection)
  })

  afterEach(() => {
    vi.useRealTimers()
    wrapper.unmount()
  })

  it('renders the main heading correctly', () => {
    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('Hello!')
  })

  it('renders the introductory text and typing effect span after typing completes', async () => {
    expect(wrapper.find('p').text()).toContain('I am Timothy Genz.')

    const typingSpan = wrapper.find('.typing-effect')
    expect(typingSpan.exists()).toBe(true)
    expect(typingSpan.text()).toBe('')

    vi.advanceTimersByTime(7000)
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()

    expect(typingSpan.text()).toBe('I am a passionate and creative Software Development Engineer.')
  })

  it('renders the call-to-action button with the correct text and href', () => {
    const button = wrapper.find('.btn')
    expect(button.exists()).toBe(true)
    expect(button.text()).toContain('View My Work')

    expect(button.attributes('href')).toBe('#projects')
  })

  it('includes an SVG icon inside the call-to-action button', () => {
    const button = wrapper.find('.btn')
    const icon = button.find('svg')

    expect(icon.exists()).toBe(true)
  })
})
