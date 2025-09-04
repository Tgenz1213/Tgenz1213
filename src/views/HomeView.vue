<template>
  <div class="home-wrapper">
    <div v-bind="$attrs">
      <div class="home-wrapper">
        <div v-bind="$attrs">
          <HeroSection :disable-fade-in="true" />
          <AboutSection />
          <ProjectsSection />
          <ShowcaseSection />
          <ContactSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ShowcaseSection from '@/components/sections/ShowcaseSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>
