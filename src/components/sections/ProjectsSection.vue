<template>
  <BaseSection id="projects">
    <h2>My Projects</h2>
    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from './BaseSection.vue'
import ProjectCard from '../ProjectCard.vue'
import projects from '@/data/projects'
</script>

<style scoped>
#projects {
  padding: 80px 0;
  text-align: center;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
</style>
