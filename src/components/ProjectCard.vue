<template>
  <div class="project-card">
    <a :href="project.link" target="_blank" rel="noopener noreferrer">
      <img :src="project.image" :alt="project.title" />
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.project-card {
  background-color: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  border: 1px solid #333;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-card a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
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
