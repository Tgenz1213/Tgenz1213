<template>
  <BaseSection
    id="hero"
    custom-class=""
    disable-fade-in
  >
    <h1>Hello!</h1>
    <p>I am Timothy Genz.</p>
    <p>
      <span class="typing-wrapper">
        <span class="typing-effect">{{ typedText }}</span><span
          v-if="showCursor"
          class="cursor"
        >|</span>
      </span>
    </p>
    <a
      href="#projects"
      class="btn"
    >
      View My Work
      <svg
        class="btn-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
        />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from './BaseSection.vue'
import { ref, onMounted } from 'vue'

const typedText = ref('')
const fullText = 'I am a passionate and creative Software Development Engineer.'
const showCursor = ref(true)
let charIndex = 0

const typeCharacter = () => {
  if (charIndex < fullText.length) {
    typedText.value += fullText.charAt(charIndex)
    charIndex++
    const randomSpeed = Math.random() * (80 - 30) + 30 // Random speed between 30ms and 80ms
    setTimeout(typeCharacter, randomSpeed)
  } else {
    setInterval(() => {
      showCursor.value = !showCursor.value
    }, 500)
  }
}

onMounted(() => {
  setTimeout(() => {
    typeCharacter()
  }, 1000) // 1s delay
})
</script>

<style scoped>
#hero {
  background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #2c496e);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  height: 100vh;
  color: #e0e0e0;
  padding: 0 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

#hero p {
  font-size: 1.25rem;
  margin-bottom: 40px;
  max-width: 600px;
}

.btn {
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.btn:hover {
  transform: translateY(-3px);
  background-color: var(--accent-color);
  color: #ffffff;
  box-shadow: 0 15px 35px rgba(0, 123, 255, 0.2);
}

.typing-wrapper {
  position: relative;
  display: inline-block;
  min-height: 1.25rem; /* Ensure consistent height for the typing line */
}

.cursor {
  animation: blink 1s step-end infinite;
  position: absolute;
  right: -10px;
  top: 0;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #e0e0e0;
  }
}
</style>
