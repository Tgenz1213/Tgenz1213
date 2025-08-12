import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsSection from './ProjectsSection.vue'
import ProjectCard from '../ProjectCard.vue'
import type { Project } from '../../types'

describe('ProjectsSection', () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description:
        'A responsive personal portfolio built with Vue.js and TypeScript, showcasing my skills and projects.',
      image: 'vue_project_screen.png',
      link: 'https://github.com/Tgenz1213/Tgenz1213',
      tags: ['Vue.js', 'TypeScript', 'CSS']
    },
    {
      id: 2,
      title: 'Weather App',
      description:
        'A React front end with Go backend that fetches weather data from the weather.gov API and caches the data with Redis.',
      image:
        'https://pbs.twimg.com/profile_images/1636943522325577729/ywCeIUoO_400x400.jpg',
      link: 'https://github.com/Tgenz1213/weather',
      tags: ['Node.js', 'React', 'Go', 'API']
    },
    {
      id: 3,
      title: 'ML Maze Runner',
      description: 'An ML model that solves the Treasure Hunt game.',
      image: 'Treasure_Hunt_Game_map.png',
      link: 'https://github.com/Tgenz1213/maze-rl-agent/blob/main/Week_7/TreasureHuntGame/Genz_Timothy_ProjectTwo.ipynb',
      tags: ['Python', 'AI', 'ML']
    }
  ]

  const wrapper = mount(ProjectsSection, {
    global: {
      stubs: {
        ProjectCard: true
      }
    }
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
