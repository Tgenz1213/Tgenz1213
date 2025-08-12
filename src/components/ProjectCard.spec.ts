import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from './ProjectCard.vue'
import type { Project } from '../types'

describe('ProjectCard', () => {
  const sampleProject: Project = {
    id: 1,
    title: 'Awesome Test Project',
    description: 'This is a description for our test project.',
    image: '/images/test-image.png',
    link: 'https://example.com',
    tags: ['Testing', 'Vue']
  }

  const wrapper = mount(ProjectCard, {
    props: {
      project: sampleProject
    }
  })

  it('renders the project title and description', () => {
    expect(wrapper.find('h3').text()).toBe(sampleProject.title)
    expect(wrapper.find('p').text()).toBe(sampleProject.description)
  })

  it('renders the image with correct src and alt attributes', () => {
    const image = wrapper.find('img')
    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe(sampleProject.image)

    expect(image.attributes('alt')).toBe(sampleProject.title)
  })

  it('wraps the card in a link with the correct href and security attributes', () => {
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe(sampleProject.link)
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })
})
