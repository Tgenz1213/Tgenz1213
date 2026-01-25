# Portfolio Web App Development Plan (Vue.js & Google Cloud)

**Goal:** To build and deploy a professional single-page application (SPA) portfolio directly to Google Cloud, leveraging services with a generous free tier. The project will demonstrate modern web development and cloud-native CI/CD practices.

---

## ## Core Technology

- **Framework:** Vue 3 with Vite and TypeScript.
- **Development Environment:** VS Code, Git, npm, ESLint, and Prettier.
- **Containerization:** Docker.

---

## ## Application Content

The site will be a responsive SPA with the following sections:

1.  **Hero/Introduction:** A concise statement about who I am and what I do.
2.  **Projects:** Showcase of 3-5 key projects, each with a clear description, technologies used, visuals, and links to the live demo and source code.
3.  **Skills:** A clear, categorized list of technical skills.
4.  **About Me:** A brief professional bio.
5.  **Contact:** Links to Email, LinkedIn, and GitHub.

---

## ## Deployment Strategy (Google Cloud)

The application will be containerized using **Docker** and deployed to **Google Cloud Run**. This serverless platform provides a robust, auto-scaling, and free-tier-eligible hosting solution. Docker images will be stored in **Google Artifact Registry**.

---

## ## CI/CD Pipeline (Cloud Build)

A fully automated CI/CD pipeline will be implemented using **Google Cloud Build**, triggered by pushes to the `main` branch on GitHub. The pipeline is defined in a `cloudbuild.yaml` file at the project root.

```yaml
steps:
  - name: 'node:24'
    id: 'Install Dependencies'
    args: ['npm', 'install']

  - name: 'node:24'
    id: 'Lint Code'
    args: ['npm', 'run', 'lint']

  - name: 'node:24'
    id: 'Run Unit Tests'
    args: ['npm', 'run', 'test']

  - name: 'gcr.io/cloud-builders/docker'
    id: 'Build Docker Image'
    args:
      - 'build'
      - '-t'
      - 'us-central1-docker.pkg.dev/<YOUR_GCP_PROJECT_ID>/<YOUR_REPO_NAME>/<YOUR_SERVICE_NAME>:$COMMIT_SHA'
      - '.'

  - name: 'gcr.io/cloud-builders/docker'
    id: 'Push Docker Image'
    args:
      [
        'push',
        'us-central1-docker.pkg.dev/<YOUR_GCP_PROJECT_ID>/<YOUR_REPO_NAME>/<YOUR_SERVICE_NAME>:$COMMIT_SHA',
      ]

  - name: 'gcr.io/[google.com/cloudsdktool/cloud-sdk](https://google.com/cloudsdktool/cloud-sdk)'
    id: 'Deploy to Cloud Run'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - '<YOUR_SERVICE_NAME>'
      - '--image=us-central1-docker.pkg.dev/<YOUR_GCP_PROJECT_ID>/<YOUR_REPO_NAME>/<YOUR_SERVICE_NAME>:$COMMIT_SHA'
      - '--region=us-central1'
      - '--platform=managed'
      - '--allow-unauthenticated'

images:
  - 'us-central1-docker.pkg.dev/<YOUR_GCP_PROJECT_ID>/<YOUR_REPO_NAME>/<YOUR_SERVICE_NAME>:$COMMIT_SHA'
```
