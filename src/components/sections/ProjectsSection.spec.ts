import { describe, it, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsSection from './ProjectsSection.vue'
import ProjectCard from '../ProjectCard.vue'
import { ref } from 'vue'

vi.mock('/headshot.jpg', () => ({ default: '/headshot.jpg' }))

const mockProjects = [
  { id: 1, title: 'Project 1', description: 'Desc 1', image: '', link: '' },
  { id: 2, title: 'Project 2', description: 'Desc 2', image: '', link: '' },
]

vi.mock('@/composables/useProjects', () => ({
  useProjects: () => ({
    projects: ref(mockProjects),
    fetchProjects: vi.fn(),
  }),
}))

describe('ProjectsSection', () => {
  beforeAll(() => {
    globalThis.IntersectionObserver = vi.fn(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      }
    }) as unknown as typeof IntersectionObserver
  })

  // Mounting inside the describe block ensures globalThis mocks are ready
  const createWrapper = () =>
    mount(ProjectsSection, {
      global: {
        stubs: {
          ProjectCard: true,
        },
      },
    })

  it('renders the main "My Projects" heading', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('h2').text()).toBe('My Projects')
  })

  it('renders one ProjectCard component for each project', async () => {
    const wrapper = createWrapper()
    const renderedCards = wrapper.findAllComponents(ProjectCard)
    expect(renderedCards.length).toBe(mockProjects.length)
  })

  it('passes the correct project data as a prop to each ProjectCard', async () => {
    const wrapper = createWrapper()
    const renderedCards = wrapper.findAllComponents(ProjectCard)

    renderedCards.forEach((cardWrapper, index) => {
      expect(cardWrapper.props('project')).toEqual(mockProjects[index])
    })
  })
})
