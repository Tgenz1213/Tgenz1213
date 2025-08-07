# Portfolio Web App Development Plan (Vue.js & Raspberry Pi)

**Goal:** Create a simple, elegant, and impressive single-page application (SPA) portfolio website that effectively showcases my skills and projects to busy hiring managers. The site will be self-hosted on a Raspberry Pi using lighttpd, with initial exposure via Cloudflare Tunnel and a future migration to a Google Cloud solution. Automated CI/CD will be implemented as part of the portfolio itself.

---

## I. Project Setup & Core Technologies

1.  **Vue.js Project Initialization:**
    - Initialize a new Vue 3 project using Vite (recommended for modern Vue projects due to speed and simplicity).
    - Set up basic project structure.
2.  **Component Library Selection:**
    - PrimeVue
    - **Justification:** Compatibility with Vue and components that look clean and professional.
3.  **Local Development Environment:**
    - **Code Editor:** VS Code
    - **Node Version Manager:** NVM
    - **Package Manager:** Yarn
    - **Version Control:** Git
    - **Code Quality & Formatting:**
      - ESLint
      - Prettier
    - **Browser Tooling:** Vue Devtools
    - **Containerization (In consideration):** Docker

---

## II. Design & Content (Focus on Audience)

1.  **Essential SPA Sections:**
    - **Hero/Introduction:** A concise, impactful statement about who I am, what I do, and what value I bring. Include a professional photo.
    - **Projects:** Showcase 3-5 strong, relevant projects.
      - For each project:
        - Clear title and concise description (problem, solution, my role). Highlight quantifiable achievements using the **STAR method** where possible.
        - Key technologies used.
        - High-quality visuals (screenshots, GIFs, or short videos).
        - Links to live demo (if applicable) and GitHub repository.
    - **Skills:** A clear, categorized list of technical skills (e.g., Programming Languages, Frameworks, Tools, Cloud Platforms). Avoid skill bars; just a clean list.
    - **About Me:** A brief, engaging story about my journey, passions, and professional philosophy. Focus on professional growth and what drives you. Keep it concise.
    - **Contact:** Professional contact information (email, LinkedIn, GitHub).
2.  **Responsiveness & Accessibility:**
    - Ensure the design is fully responsive across various devices (mobile-first approach).
    - Implement basic accessibility considerations (e.g., semantic HTML, alt text for images).

---

## III. Self-Hosting & Deployment (Phase 1: Cloudflare Tunnel)

1.  **Raspberry Pi Preparation:**
    - Install `lighttpd` on the Raspberry Pi.
    - Configure `lighttpd` to serve the Vue.js SPA. This involves setting the document root to the `dist` folder and configuring URL rewriting to handle all routes via `index.html`.
    - **Security Hardening:** Implement basic security measures such as securing SSH (disabling password authentication, using key-based authentication), configuring a basic firewall (e.g., `ufw`), ensuring regular system updates, and creating a dedicated, non-root user for `lighttpd`.
    - **Backup Strategy:** Establish a plan for regularly backing up the Raspberry Pi's OS image and `lighttpd` configuration files.
    - **Error Handling & Logging:** Configure `lighttpd` logging for debugging and set up custom error pages. Regularly review access and error logs.
2.  **Cloudflare Tunnel Setup:**
    - Install `cloudflared` on the Raspberry Pi.
    - Create a new Cloudflare Tunnel and connect it to the Raspberry Pi.
    - Configure a public hostname to point to the local `lighttpd` server. Cloudflare's CDN will implicitly cache static assets served through the tunnel.

---

## IV. Automated Development Workflow (CI/CD)

1.  **Version Control:**
    - Host the Vue.js project on GitHub.
2.  **CI/CD Tool Selection:**
    - Utilize GitHub Actions for CI/CD.
3.  **CI/CD Pipeline Definition (.github/workflows/main.yml):**
    - **Strategy:** The pipeline is decoupled into separate **build** and **deploy** jobs. This approach prevents resource contention on the Raspberry Pi and enhances security by separating the build environment from the production server. The build runs on a standard GitHub-hosted runner, and deployment is handled via a secure SSH transfer.
    - **CI Stage (Build Job):**
      - Triggers on a push to the `main` branch.
      - Runs on a standard GitHub-hosted runner (e.g., `ubuntu-latest`).
      - Checks out the code, installs dependencies (`yarn install`), and builds the application (`yarn build`).
      - The resulting `dist` folder is saved as a build artifact.
    - **CD Stage (Deploy Job):**
      - Runs only after the `build` job succeeds.
      - Runs on a GitHub-hosted runner.
      - Downloads the `dist` artifact from the `build` job.
      - Uses a dedicated action to securely connect to the Raspberry Pi via SSH and `rsync` the contents of the `dist` folder to the `lighttpd` web root.
    - **Security:** SSH credentials (host, user, private key) are stored as encrypted **Secrets** in the GitHub repository settings and are securely injected into the workflow at runtime.
4.  **Example Workflow:**

    ```yaml
    name: Build and Deploy Portfolio
    on:
      push:
        branches:
          - main

    jobs:
      build:
        name: Build Vue App
        runs-on: ubuntu-latest
        steps:
          - name: Checkout Repo
            uses: actions/checkout@v4

          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              node-version: '20'
              cache: 'yarn'

          - name: Install Dependencies
            run: yarn install --frozen-lockfile

          - name: Build Application
            run: yarn build

          - name: Upload Build Artifact
            uses: actions/upload-artifact@v4
            with:
              name: dist-files
              path: ./dist

      deploy:
        name: Deploy to Raspberry Pi
        needs: build
        runs-on: ubuntu-latest
        steps:
          - name: Download Build Artifact
            uses: actions/download-artifact@v4
            with:
              name: dist-files
              path: ./dist

          - name: Deploy to Server via SSH
            uses: easingthemes/ssh-deploy@v5.0.0
            with:
              SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
              ARGS: '-rlgoDzvc -i --delete'
              SOURCE: 'dist/'
              REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
              REMOTE_USER: ${{ secrets.REMOTE_USER }}
              TARGET: /var/www/html # Your lighttpd document root
    ```

---

## V. Simple Testing Strategy

1.  **Linting:**
    - ESLint for code quality and consistency.
2.  **Manual Browser Testing:**
    - Thorough manual testing across different browsers and devices to ensure responsiveness and functionality.
3.  **Basic End-to-End (E2E) Testing (Future Consideration):**
    - Could add a simple E2E test with Cypress or Playwright for key page loads, but this is out of scope for the initial launch.

---

## VI. Future Considerations (Out of Scope for Initial Launch)

1.  **Google Cloud Migration:**
    - Explore Google Cloud solutions for hosting (e.g., Cloud Run, Cloud Storage + CDN) for improved scalability and robustness.
2.  **Advanced Testing:**
    - Add comprehensive unit tests and more elaborate E2E tests.
3.  **Performance Optimization:**
    - Further optimize bundle size, lazy loading, and image compression.
