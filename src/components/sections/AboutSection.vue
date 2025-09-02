<template>
  <BaseSection id="about">
    <h2>About Me</h2>
    <div class="about-content-wrapper">
      <div class="about-card">
        <div class="profile-image-wrapper">
          <img src="/headshot.jpg" alt="A headshot of Timothy Genz" />
        </div>
        <div class="about-text">
          <h3>Who I Am</h3>
          <p>
            I'm a passionate and creative Software Development Engineer with a strong background in
            building modern and user-friendly web applications.
          </p>
          <h3>My Background</h3>
          <p>
            I am a Marine Corps veteran (2014-2024) who loves his family and enjoys working on
            vehicles. I always have a project going on, whether it's a web app or an automotive
            project.
          </p>
          <h3>What I Do</h3>
          <p>
            I'm returning to school to earn my master's degree in Computer Science with a focus on
            AI. I have experience with a variety of technologies, including Vue.js, React, Node.js,
            and more. My skills are quite broad - not in a scary way, but I will always get the job
            done!
          </p>
        </div>
      </div>

      <div class="status-card">
        <div class="status-grid">
          <div v-for="(s, idx) in statuses" :key="idx" class="status-item">
            <StatusIcon :name="s.icon" />
            <div class="status-text">
              <strong>{{ s.label }}</strong>
              <span>{{ s.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from './BaseSection.vue'
import StatusIcon from '../icons/StatusIcon.vue'
import statuses from '../../data/statuses'
</script>

<style scoped>
#about {
  padding: 80px 0;
}

.about-content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px; /* Space between the two cards */
}

.about-card {
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: #2a2a2a;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid #333;
}

.profile-image-wrapper {
  flex-shrink: 0;
}

.profile-image-wrapper img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.about-text {
  text-align: left;
}

.about-text h3 {
  color: var(--accent-color);
  margin-top: 0;
  margin-bottom: 8px;
}

.about-text h3:not(:first-child) {
  margin-top: 24px;
}

.about-text p {
  line-height: 1.6;
  margin: 0;
}

.status-card {
  background-color: #2a2a2a;
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid #333;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.status-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  stroke: var(--accent-color);
}

.status-text {
  display: flex;
  flex-direction: column;
}

.status-text strong {
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2px;
}

.status-text span {
  font-size: 0.9rem;
  color: #b0b0b0; /* Lighter text for the status detail */
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }

  .about-text {
    text-align: center;
  }

  .status-card {
    padding: 30px;
  }
}
</style>
