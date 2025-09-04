import { ref } from 'vue'
import type { ShowcaseEntry } from '@/types'

/**
 * Returns curated showcase entries.
 * Keeping data deterministic simplifies tests and reviews.
 */
export function useShowcase() {
  const showcases = ref<ShowcaseEntry[]>([])

  const fetchShowcases = () => {
    showcases.value = [
      {
        id: 'tech-stack',
        title: 'Tech stack',
        description: 'Type-safe, component-driven UI and robust testing.',
        techs: ['Vue 3', 'TypeScript', 'Vite', 'Vitest'],
        href: undefined,
      },
      {
        id: 'deployment',
        title: 'Deployment',
        description: 'Containerized builds, small images, and cloud run deployments.',
        techs: ['Docker', 'Nginx', 'GCP', 'Cloud Run'],
        href: undefined,
      },
    ]
  }

  return { showcases, fetchShowcases }
}
