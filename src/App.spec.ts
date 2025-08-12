import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { RouterView } from 'vue-router'

describe('App', () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        AppHeader: true,
        AppFooter: true,
        RouterView: true,
      },
    },
  })

  it('renders the header and footer layout components', () => {
    expect(wrapper.findComponent(AppHeader).exists()).toBe(true)
    expect(wrapper.findComponent(AppFooter).exists()).toBe(true)
  })

  it('renders the RouterView component to display pages', () => {
    expect(wrapper.findComponent(RouterView).exists()).toBe(true)
  })
})
