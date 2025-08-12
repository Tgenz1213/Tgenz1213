import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

describe('Router', () => {
  it('renders the HomeView for the root path', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: routes
    })

    await router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })
})
