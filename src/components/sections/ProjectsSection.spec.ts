import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsSection from './ProjectsSection.vue'
import ProjectCard from '../ProjectCard.vue'
import { ref } from 'vue'

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
  const wrapper = mount(ProjectsSection, {
    global: {
      stubs: {
        ProjectCard: true,
      },
    },
  })

  it('renders the main "My Projects" heading', () => {
    expect(wrapper.find('h2').text()).toBe('My Projects')
  })

  it('renders one ProjectCard component for each project', async () => {
    const renderedCards = wrapper.findAllComponents(ProjectCard)
    expect(renderedCards.length).toBe(mockProjects.length)
  })

  it('passes the correct project data as a prop to each ProjectCard', async () => {
    const renderedCards = wrapper.findAllComponents(ProjectCard)

    renderedCards.forEach((cardWrapper, index) => {
      expect(cardWrapper.props('project')).toEqual(mockProjects[index])
    })
  })
})
