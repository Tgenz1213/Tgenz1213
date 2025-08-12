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
  /* --- Floating Pill Positioning --- */
  position: fixed;
  top: 16px; /* Give it some space from the top edge */
  left: 50%;
  transform: translateX(-50%); /* The modern way to center */
  width: calc(100% - 32px); /* Ensure it has padding on mobile */
  max-width: 960px; /* Set a maximum width for desktop */
  z-index: 1000;

  /* --- Glass & Shape Effect --- */
  background: linear-gradient(to bottom, rgba(40, 40, 40, 0.7), rgba(30, 30, 30, 0.8));
  backdrop-filter: blur(12px) saturate(150%);
  border-radius: 9999px; /* This creates the perfect pill shape */
  border: 1px solid rgba(255, 255, 255, 0.2); /* A subtle border enhances the glass */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); /* A softer, more diffuse shadow */
}

/* The rest of your styles for .nav-container, .logo, etc., remain the same */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px; /* More padding inside the pill */
  height: 56px; /* Slightly shorter height for a sleeker pill */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ... (other styles like .logo, .nav-links are unchanged) ... */
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
