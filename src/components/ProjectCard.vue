<template>
  <BaseCard :href="project.link" align="left">
    <template #header>
      <img :src="project.image" :alt="project.title" />
    </template>

    <div class="project-info">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Project } from '@/types'
import BaseCard from './BaseCard.vue'

defineProps<{
  project: Project
}>()
</script>

<style scoped>
.project-card .base-card__header {
  padding: 0;
}
.base-card__header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.project-info {
  padding: 20px;
}

.project-info h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--secondary-color);
}

.project-info p {
  margin: 0;
  color: #ccc;
}
</style>
