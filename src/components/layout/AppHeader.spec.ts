import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from '@/components/layout/AppHeader.vue'

describe('AppHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.text()).toContain('Tim')
    expect(wrapper.text()).toContain('About')
    expect(wrapper.text()).toContain('Projects')
    expect(wrapper.text()).toContain('Contact')
  })
})
