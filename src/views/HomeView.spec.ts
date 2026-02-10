import { describe, it, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

vi.mock('/headshot.jpg', () => ({ default: '/headshot.jpg' }))

describe('HomeView', () => {
  beforeAll(() => {
    globalThis.IntersectionObserver = vi.fn(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }
    }) as unknown as typeof IntersectionObserver
  })

  // Factory function to isolate the wrapper creation for each test case
  const createWrapper = () =>
    mount(HomeView, {
      global: {
        stubs: {
          // Stub all section components to test the view assembly in isolation
          HeroSection: true,
          AboutSection: true,
          ProjectsSection: true,
          ContactSection: true,
        },
      },
    })

  it('renders all required page sections', () => {
    const wrapper = createWrapper()

    // Validate that HomeView correctly assembles the layout
    expect(wrapper.findComponent(HeroSection).exists()).toBe(true)
    expect(wrapper.findComponent(AboutSection).exists()).toBe(true)
    expect(wrapper.findComponent(ProjectsSection).exists()).toBe(true)
    expect(wrapper.findComponent(ContactSection).exists()).toBe(true)
  })
})
