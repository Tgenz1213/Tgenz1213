import { describe, it, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'

vi.mock('/headshot.jpg', () => ({ default: '/headshot.jpg' }))

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]

describe('Router', () => {
  beforeAll(() => {
    globalThis.IntersectionObserver = vi.fn(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }
    }) as unknown as typeof IntersectionObserver
  })

  it('renders the HomeView for the root path', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: routes,
    })

    await router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          AboutSection: true,
          ProjectsSection: true,
          ShowcaseSection: true,
          ContactSection: true,
        },
      },
    })

    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })
})
