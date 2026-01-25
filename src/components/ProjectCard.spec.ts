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
    repo: 'https://example.com',
    deploy: 'https://example-deploy.com',
    tags: ['Testing', 'Vue'],
  }

  const wrapper = mount(ProjectCard, {
    props: {
      project: sampleProject,
    },
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

  it('renders a Source link with correct href and security attributes', () => {
    const src = wrapper.find('a.source')
    expect(src.exists()).toBe(true)
    expect(src.attributes('href')).toBe(sampleProject.repo)
    expect(src.attributes('target')).toBe('_blank')
    expect(src.attributes('rel')).toBe('noopener noreferrer')
  })

  it('renders Live link when deploy is provided with security attributes', () => {
    const live = wrapper.find('a.live')
    expect(live.exists()).toBe(true)
    expect(live.attributes('href')).toBe(sampleProject.deploy)
    expect(live.attributes('target')).toBe('_blank')
    expect(live.attributes('rel')).toBe('noopener noreferrer')
  })

  it('does not render Live link when deploy is not provided', () => {
    const projectWithoutDeploy: Project = {
      id: 2,
      title: 'Project Without Deploy',
      description: 'This project has no deploy URL',
      image: '/images/test-image.png',
      repo: 'https://example.com',
      tags: ['Testing'],
    }

    const wrapperWithoutDeploy = mount(ProjectCard, {
      props: {
        project: projectWithoutDeploy,
      },
    })

    const live = wrapperWithoutDeploy.find('a.live')
    expect(live.exists()).toBe(false)
  })
})
