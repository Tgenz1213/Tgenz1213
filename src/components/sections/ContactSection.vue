<template>
  <BaseSection
    id="contact"
    centered
  >
    <h2>Get In Touch</h2>
    <p>I'm currently open to new opportunities and collaborations. Feel free to reach out.</p>
    <div class="contact-links">
      <a
        v-for="link in contactLinks"
        :key="link.name"
        :href="link.url"
        class="contact-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="contact-icon"
        >
          <path :d="link.iconPath" />
        </svg>
        <span>{{ link.name }}</span>
      </a>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from './BaseSection.vue'
import { useContactLinks } from '@/composables/useContactLinks'

const { contactLinks } = useContactLinks()
</script>

<style scoped>
#contact {
  padding: 80px 0;
  text-align: center;
}

#contact p {
  max-width: 600px;
  margin: 16px auto 40px;
  line-height: 1.6;
}

.contact-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-card {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #2a2a2a;
  padding: 15px 25px;
  border-radius: 12px;
  border: 1px solid #333;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: 500;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  background-color: var(--accent-color);
  color: #ffffff;
  box-shadow: 0 15px 35px rgba(0, 123, 255, 0.2);
}

.contact-card:hover .contact-icon {
  stroke: #ffffff;
}

.contact-icon {
  stroke: var(--accent-color);
  transition: stroke 0.3s ease;
}
</style>
