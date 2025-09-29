# Client Service

A frontend client application built with Vue.js, leveraging Vue Router for navigation and Vite as the build tool.

## Technologies
- **Framework**: Vue.js
- **Routing**: Vue Router
- **Build Tool**: Vite
- **Package Manager**: Yarn
- **Testing**: Vitest
- **Linting**: ESLint
- **Containerization**: Docker, Nginx

## Prerequisites
-   Node.js (LTS version recommended)
-   Yarn
-   Docker

## Installation

1.  Clone the repository.
2.  Navigate to the `apps/client` directory.
3.  Install dependencies:
    ```bash
    yarn install
    ```

## Available Scripts

### `dev`
Starts the development server. The application will be accessible at `http://localhost:3000`.

```bash
yarn dev
```

### `build`
Builds the application for production to the `dist` directory.

```bash
yarn build
```

### `preview`
Serves the production build locally.

```bash
yarn preview
```

### `test`
Runs all unit tests.

```bash
yarn test
```

### `lint`
Lints and fixes code style issues.

```bash
yarn lint
```

## Deployment

This service is containerized using Docker. The application is built and then served by an Nginx web server, exposed on port `8080`.
