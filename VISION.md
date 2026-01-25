# Portfolio Web App Development Plan (Vue.js & Cloudflare)

**Goal:** To build and deploy a professional single-page application (SPA) portfolio directly to Cloudflare Pages, leveraging services with a generous free tier. The project will demonstrate modern web development and cloud-native CI/CD practices.

---

## ## Core Technology

- **Framework:** Vue 3 with Vite and TypeScript.
- **Development Environment:** VS Code, Git, npm, ESLint, and Prettier.
- **Hosting / Deployment:** Cloudflare Pages (static site hosting). No containerization.

---

## ## Application Content

The site will be a responsive SPA with the following sections:

1.  **Hero/Introduction:** A concise statement about who I am and what I do.
2.  **Projects:** Showcase of 3-5 key projects, each with a clear description, technologies used, visuals, and links to the live demo and source code.
3.  **Skills:** A clear, categorized list of technical skills.
4.  **About Me:** A brief professional bio.
5.  **Contact:** Links to Email, LinkedIn, and GitHub.

---

## ## Deployment Strategy (Cloudflare)

The application will be deployed to **Cloudflare Pages** as a static site. Cloudflare Pages provides CDN-backed hosting with automatic builds and easy GitHub integration. Edge functions (Cloudflare Workers) can be used only where server-side logic is required.

---

## ## CI/CD Pipeline (GitHub Actions → Cloudflare Pages)

A fully automated CI/CD pipeline will run on GitHub Actions and deploy to Cloudflare Pages on pushes to `main`. The workflow will:

1. Install dependencies (Node 24).
2. Run linting.
3. Run unit tests.
4. Build the static site.
5. Deploy the `dist/` output to Cloudflare Pages.

Example GitHub Actions workflow:

```yaml
name: CI / Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v6
        with:
          node-version: 24
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

Notes:

- Cloudflare Pages will be connected directly to the GitHub repo via the Cloudflare dashboard.

---

## ## Build and Validation Commands

Follow repository conventions:

- Install: npm install
- Dev server: npm run dev
- Build: npm run build
- Lint: npm run lint
- Tests: npm run test or npm run test:unit
- Format: npm run format

Before pushing changes, ensure lint, tests, and build succeed locally to avoid CI failures.

---
