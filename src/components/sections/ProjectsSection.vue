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
import projects from '@/data/projects'
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
</style>
