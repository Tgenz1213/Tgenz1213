<template>
  <AppHeader />
  <main>
    <router-view />
    <ShowcaseSection />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ShowcaseSection from './components/sections/ShowcaseSection.vue'
</script>
