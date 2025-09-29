<template>
  <BaseCard :href="href" align="center" role="region" :aria-labelledby="titleId">
    <template #header>
      <h3 :id="titleId" class="title">{{ title }}</h3>
      <p v-if="description" class="desc">{{ description }}</p>
    </template>

    <ul class="tech-list" aria-label="technologies used">
      <li v-for="(t, i) in techs" :key="i" class="tech-item">{{ t }}</li>
    </ul>

    <template #footer>
      <slot name="cta" />
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from './BaseCard.vue'

interface Props {
  title: string
  description?: string
  techs?: string[]
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  techs: () => [],
  href: undefined,
})

const titleId = computed(
  () =>
    `showcase-${props.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')}`,
)
</script>

<style scoped>
.title {
  margin: 0 0 0.25rem 0;
  font-size: 1.05rem;
  line-height: 1.2;
  color: var(--heading, inherit);
}
.desc {
  margin: 0 0 0.75rem 0;
  color: var(--muted, #6b7280);
  font-size: 0.95rem;
  flex: 0 0 auto;
}
.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  justify-content: center;
}
.tech-item {
  background: var(--chip-bg, #f3f4f6);
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--chip-foreground, inherit);
}

:deep(.visit) {
  margin-top: 0.75rem;
  align-self: center;
  color: var(--link, #0366d6);
  font-weight: 600;
  text-decoration: none;
}

.showcase-link:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--link, #0366d6) 20%, transparent);
  outline-offset: 4px;
}
</style>
