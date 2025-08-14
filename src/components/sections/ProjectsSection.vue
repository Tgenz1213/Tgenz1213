<template>
  <section id="projects">
    <div class="container">
      <h2>My Projects</h2>
      <div class="project-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue'
import type { Project } from '../../types'

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio built with Vue.js and TypeScript, showcasing my skills and projects.',
    image: 'vue_project_screen.png',
    link: 'https://github.com/Tgenz1213/Tgenz1213',
    tags: ['Vue.js', 'TypeScript', 'CSS'],
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'A React front end with Go backend that fetches weather data from the weather.gov API and caches the data with Redis.',
    image: 'weather_screen.png',
    link: 'https://github.com/Tgenz1213/weather',
    tags: ['Node.js', 'React', 'Go', 'API'],
  },
  {
    id: 3,
    title: 'ML Maze Runner',
    description: 'An ML model that solves the Treasure Hunt game.',
    image: 'Treasure_Hunt_Game_map.png',
    link: 'https://github.com/Tgenz1213/maze-rl-agent/blob/main/Week_7/TreasureHuntGame/Genz_Timothy_ProjectTwo.ipynb',
    tags: ['Python', 'AI', 'ML'],
  },
]
</script>

<style scoped>
#projects {
  padding: 80px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.project-grid {
  display: grid;
  /* This is a great responsive grid setup, no changes needed here */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
</style>
