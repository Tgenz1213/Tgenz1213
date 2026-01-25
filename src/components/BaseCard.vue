<template>
  <component
    :is="href ? 'a' : 'article'"
    :href="href"
    v-bind="href ? linkAttrs : {}"
    class="base-card"
    :class="`align-${align}`"
  >
    <header class="base-card__header">
      <slot name="header" />
    </header>
    <div class="base-card__body">
      <slot />
    </div>
    <footer class="base-card__footer">
      <slot name="footer" />
    </footer>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ href?: string; align?: 'center' | 'left' }>(), {
  href: undefined,
  align: 'left',
})

const linkAttrs = { target: '_blank', rel: 'noopener noreferrer' }
</script>

<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  border-radius: 8px;
  background: var(--card-bg, #fff);
  border: 1px solid var(--border, rgba(16, 24, 40, 0.06));
  box-shadow: var(--card-shadow, 0 1px 2px rgba(16, 24, 40, 0.04));
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
  color: inherit;
  text-decoration: none;
}
.base-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--card-shadow-hover, 0 8px 20px rgba(16, 24, 40, 0.08));
}
.base-card__header,
.base-card__body,
.base-card__footer {
  margin: 0;
}

.base-card__body {
  flex: 1 0 auto;
}
.base-card__footer {
  margin-top: auto;
}
.base-card.align-center {
  text-align: center;
  align-items: center;
}
.base-card.align-left {
  text-align: left;
}
</style>
