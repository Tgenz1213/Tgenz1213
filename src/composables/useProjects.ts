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
        link: 'https://github.com/Tgenz1213/Tgenz1213',
        tags: ['Vue.js', 'TypeScript', 'CSS'],
      },
      {
        id: 2,
        title: 'Weather App',
        description:
          'A React front end with Go backend that fetches weather data from the weather.gov API and caches the data with Redis.',
        image: '/weather_screen.png',
        link: 'https://github.com/Tgenz1213/weather',
        tags: ['Node.js', 'React', 'Go', 'API'],
      },
      {
        id: 3,
        title: 'ML Maze Runner',
        description: 'An ML model that solves the Treasure Hunt game.',
        image: '/Treasure_Hunt_Game_map.png',
        link: 'https://github.com/Tgenz1213/maze-rl-agent/blob/main/Week_7/TreasureHuntGame/Genz_Timothy_ProjectTwo.ipynb',
        tags: ['Python', 'AI', 'ML'],
      },
    ]
  }

  return {
    projects,
    fetchProjects,
  }
}
