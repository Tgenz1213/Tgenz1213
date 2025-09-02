<template>
  <component
    :is="as"
    :id="id"
    :class="['base-section', `variant-${variant}`, { 'is-centered': centered }, customClass]"
    v-bind="$attrs"
  >
    <div class="container"><slot /></div>
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  as: { type: String, default: 'section' },
  id: { type: String, default: '' },
  variant: { type: String, default: 'default' },
  centered: { type: Boolean, default: false },
  customClass: { type: String, default: '' },
})
const { as, id, variant, centered, customClass } = props
</script>

<style scoped>
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

/* keep this small and focused — sections continue to style their ids/classes */
</style>
