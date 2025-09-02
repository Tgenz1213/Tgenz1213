<template>
  <BaseSection id="showcase">
    <h2>Showcase</h2>
    <p class="intro">Technologies and tools used to build this site.</p>
    <div class="showcase-grid">
      <ShowcaseCard
        v-for="s in showcases"
        :key="s.id"
        :title="s.title"
        :description="s.description"
        :techs="s.techs"
        :href="s.href"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from './BaseSection.vue'
import ShowcaseCard from '@/components/ShowcaseCard.vue'
import { useShowcase } from '@/composables/useShowcase'
import { onMounted } from 'vue'

const { showcases, fetchShowcases } = useShowcase()

onMounted(() => {
  fetchShowcases()
})

</script>

<style scoped>
#showcase {
  padding-top: 80px;
  text-align: center;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
}
</style>
