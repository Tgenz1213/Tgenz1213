import { ref } from 'vue'
import type { Project } from '@/types'

export function useProjects() {
  const projects = ref<Project[]>([])

  const fetchProjects = () => {
    projects.value = [
      {
        id: 1,
        title: 'Portfolio Website',
        description:
          'A responsive personal portfolio built with Vue.js and TypeScript, showcasing my skills and projects.',
        image: '/vue_project_screen.png',
        repo: 'https://github.com/Tgenz1213/Tgenz1213',
        tags: ['Vue.js', 'TypeScript', 'CSS'],
      },
      {
        id: 2,
        title: 'Weather App',
        description:
          'A fullstack app that fetches weather data from the weather.gov API and caches the data with Redis.',
        image: '/weather_screen.png',
        repo: 'https://github.com/Tgenz1213/simple-weather',
        deploy: 'https://weather.tgenz1213.me',
        tags: ['Node.js', 'React', 'API'],
      },
      {
        id: 3,
        title: 'PoGo Guide',
        description:
          'A knowledge base for the Pokémon Go mobile game. Built with scalable architecture and modern web technologies.',
        image: '/pogo_guide.png',
        repo: 'https://github.com/Tgenz1213/pogo-guide',
        deploy: 'https://pogo.guide',
        tags: ['Nuxt.js', 'TypeScript', 'Sanity.io'],
      },
    ]
  }

  return {
    projects,
    fetchProjects,
  }
}
