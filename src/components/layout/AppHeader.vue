<template>
  <header class="app-header">
    <nav class="nav-container">
      <a href="#hero" class="logo">Tim</a>
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.path">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
]
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 960px;
  z-index: 1000;
  background: linear-gradient(to bottom, rgba(40, 40, 40, 0.7), rgba(30, 30, 30, 0.8));
  backdrop-filter: blur(12px) saturate(150%);
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--secondary-color);
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--accent-color);
}

.nav-links a:hover::after {
  width: 100%;
}
</style>
