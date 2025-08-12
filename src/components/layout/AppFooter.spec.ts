import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppFooter from '@/components/layout/AppFooter.vue'

describe('AppFooter', () => {
  it('renders properly', () => {
    const wrapper = mount(AppFooter)
    expect(wrapper.text()).toContain('© 2025')
  })
})
