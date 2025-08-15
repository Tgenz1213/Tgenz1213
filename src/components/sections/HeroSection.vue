<template>
  <section id="hero">
    <div class="container">
      <h1>Hello!</h1>
      <p>
        I am Timothy Genz.<br />
        <span class="typing-effect"
          >I am a passionate and creative Software Development Engineer.</span
        >
      </p>
      <a href="#projects" class="btn">
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
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
#hero {
  /* Replace background-color with a gradient */
  background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #2c496e);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;

  /* Keep the rest of your styles */
  height: 100vh;
  color: #e0e0e0; /* A slightly softer white */
  padding: 0 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Add the animation keyframes */
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
</style>
