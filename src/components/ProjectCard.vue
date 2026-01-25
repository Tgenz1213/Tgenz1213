<template>
  <BaseCard class="project-card" align="left">
    <template #header>
      <img :src="project.image" :alt="project.title" />
    </template>

    <div class="project-info">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>

    <template #footer>
      <div class="project-actions">
        <a class="btn source" :href="project.repo" target="_blank" rel="noopener noreferrer"
          >Source</a
        >
        <a
          v-if="project.deploy"
          class="btn live"
          :href="project.deploy"
          target="_blank"
          rel="noopener noreferrer"
          >Live</a
        >
      </div>
    </template>
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

.project-actions {
  display: flex;
  gap: 12px;
  padding: 12px 20px 20px;
  justify-content: center;
  align-items: center;
}

.btn {
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
  background: transparent;
  color: var(--secondary-color);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.btn.source:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.btn.live:hover {
  transform: translateY(-3px);
  background: var(--accent-color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Focus-visible for keyboard accessibility */
.btn:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.12);
  outline-offset: 2px;
}
</style>
