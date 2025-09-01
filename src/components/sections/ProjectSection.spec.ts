import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsSection from './ProjectsSection.vue'
import ProjectCard from '../ProjectCard.vue'
import projects from '@/data/projects'

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

  it('renders one ProjectCard component for each project', () => {
    const renderedCards = wrapper.findAllComponents(ProjectCard)
    expect(renderedCards.length).toBe(projects.length)
  })

  it('passes the correct project data as a prop to each ProjectCard', () => {
    const renderedCards = wrapper.findAllComponents(ProjectCard)

    renderedCards.forEach((cardWrapper, index) => {
      expect(cardWrapper.props('project')).toEqual(projects[index])
    })
  })
})
