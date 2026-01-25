<template>
  <component
    :is="props.as"
    :id="props.id"
    v-bind="$attrs"
    :ref="
      (el: Element | null) => {
        elementRef = el as HTMLElement | null
      }
    "
    :class="[
      'base-section',
      `variant-${props.variant}`,
      { 'is-centered': props.centered },
      props.customClass,
      { 'scroll-fade-in': !props.disableFadeIn },
    ]"
  >
    <div class="container"><slot /></div>
  </component>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  as: { type: String, default: 'section' },
  id: { type: String, default: '' },
  variant: { type: String, default: 'default' },
  centered: { type: Boolean, default: false },
  customClass: { type: String, default: '' },
  disableFadeIn: { type: Boolean, default: false }, // Keep this prop for hero section
})

const elementRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  console.log(`BaseSection: onMounted for section ${props.id}`)
  if (!elementRef.value) {
    console.log(`BaseSection: elementRef.value is null for section ${props.id}`)
    return
  }

  if (!props.disableFadeIn) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`BaseSection: Section ${props.id} intersecting: ${entry.isIntersecting}`)
          if (entry.isIntersecting) {
            elementRef.value?.classList.add('is-visible')
            console.log(`BaseSection: Added is-visible to section ${props.id}`)
          } else {
            elementRef.value?.classList.remove('is-visible')
            console.log(`BaseSection: Removed is-visible from section ${props.id}`)
          }
        })
      },
      { threshold: 0.3 }, // Trigger when 30% of the element is visible
    )
    observer.observe(elementRef.value)
    console.log(`BaseSection: Observing section ${props.id}`)
  } else {
    // Keep hero section visible
    elementRef.value?.classList.add('is-visible')
    console.log(`BaseSection: Added is-visible to hero section ${props.id} (disableFadeIn is true)`)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Original BaseSection styles */
.base-section {
  /* sensible default vertical spacing for sections */
  padding: 80px 0;
}

/* helper class for centered content (opt-in) */
.base-section.is-centered {
  text-align: center;
}

/* default container used by all sections */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
