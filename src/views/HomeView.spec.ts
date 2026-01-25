import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

describe('HomeView', () => {
  const wrapper = mount(HomeView, {
    global: {
      stubs: {
        // Stub all section components to test the view in isolation
        HeroSection: true,
        AboutSection: true,
        ProjectsSection: true,
        ContactSection: true,
      },
    },
  })

  it('renders all required page sections', () => {
    // Check that HomeView is correctly assembling the page
    expect(wrapper.findComponent(HeroSection).exists()).toBe(true)
    expect(wrapper.findComponent(AboutSection).exists()).toBe(true)
    expect(wrapper.findComponent(ProjectsSection).exists()).toBe(true)
    expect(wrapper.findComponent(ContactSection).exists()).toBe(true)
  })
})
