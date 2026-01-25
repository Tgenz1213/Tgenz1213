<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="status-icon"
  >
    <template v-if="name === 'availability'">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </template>

    <template v-else-if="name === 'location'">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </template>

    <template v-else-if="name === 'work'">
      <path
        d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8a13 13 0 0 1 13 13M2 4a17 17 0 0 1 17 17"
      />
      <!-- intentionally no slash line for work preference -->
    </template>

    <template v-else-if="name === 'shield'">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </template>

    <template v-else-if="name === 'relocation'">
      <path d="M12 20v-8m0 0V4m0 8h8m-8 0H4" />
      <circle cx="12" cy="12" r="10" />
    </template>

    <template v-else-if="name === 'education'">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </template>

    <template v-else>
      <!-- default: circle -->
      <circle cx="12" cy="12" r="10" />
    </template>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()
const name = props.name || ''
</script>

<style scoped>
.status-icon {
  width: 32px;
  height: 32px;
  stroke: var(--accent-color);
}
</style>
