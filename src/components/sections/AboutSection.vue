<template>
  <section id="about">
    <div class="container">
      <h2>About Me</h2>
      <div class="about-content-wrapper">
        <div class="about-card">
          <div class="profile-image-wrapper">
            <img src="/headshot.jpg" alt="A headshot of Timothy Genz" />
          </div>
          <div class="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate and creative Software Development Engineer with a strong background
              in building modern and user-friendly web applications.
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
              AI. I have experience with a variety of technologies, including Vue.js, React,
              Node.js, and more. My skills are quite broad - not in a scary way, but I will always
              get the job done!
            </p>
          </div>
        </div>

        <div class="status-card">
          <div class="status-grid">
            <div class="status-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="status-icon"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div class="status-text">
                <strong>Availability</strong>
                <span>Open to new opportunities</span>
              </div>
            </div>
            <div class="status-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="status-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div class="status-text">
                <strong>Location</strong>
                <span>Maxwell, TX</span>
              </div>
            </div>
            <div class="status-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="status-icon"
              >
                <path
                  d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8a13 13 0 0 1 13 13M2 4a17 17 0 0 1 17 17"
                ></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
              <div class="status-text">
                <strong>Work Preference</strong>
                <span>Open to Remote</span>
              </div>
            </div>
            <div class="status-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="status-icon"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div class="status-text">
                <strong>Security Clearance</strong>
                <span>Eligible</span>
              </div>
            </div>
            <div class="status-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="status-icon"
              >
                <path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <div class="status-text">
                <strong>Relocation</strong>
                <span>Not open to relocation</span>
              </div>
            </div>
            <div class="status-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="status-icon"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <div class="status-text">
                <strong>Education</strong>
                <span>Pursuing Master's in CS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about {
  padding: 80px 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}

#about h2 {
  text-align: center;
  margin-bottom: 40px;
}

/* NEW: Wrapper for the cards */
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

/* --- NEW STYLES FOR STATUS CARD --- */
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
