# Copilot Coding Agent Instructions

## Repository Overview

This is a monorepo for Timothy Genz's professional portfolio website. It's a Vue.js-based single-page application designed to showcase projects, skills, and contact information.

**Type**: Monorepo (Yarn workspaces)  
**Primary Language**: TypeScript  
**Framework**: Vue 3 with Composition API  
**Build Tool**: Vite  
**Package Manager**: Yarn 4.10.3 (with Plug'n'Play - PnP)  
**Node Version**: 20.x (tested with v20.19.5)  
**Testing**: Vitest with @testing-library/vue  
**Containerization**: Docker with Nginx

### Repository Structure

```
├── apps/
│   └── client/          # Main Vue.js application
│       ├── src/         # Application source code
│       ├── public/      # Static assets
│       ├── nginx/       # Nginx config for Docker
│       ├── Dockerfile   # Multi-stage Docker build
│       └── dist/        # Build output (gitignored)
├── packages/
│   ├── config/          # Shared ESLint/Prettier config
│   └── types/           # Shared TypeScript types
├── .github/
│   └── workflows/       # CI/CD pipelines
│       ├── ci.yml       # Main CI pipeline
│       └── semgrep.yml  # Security scanning
└── .husky/              # Git hooks (pre-commit)
```

## Build and Validation Commands

**CRITICAL**: Always run `yarn install --immutable` (not `--frozen-lockfile`) before any build/test commands in a fresh environment. The `--frozen-lockfile` flag is deprecated in Yarn 4.x.

### Installation

```bash
yarn install --immutable
```

**Note**: This project uses Yarn PnP (Plug'n'Play), not traditional node_modules. The `.pnp.cjs` and `.pnp.loader.mjs` files are auto-generated and should not be manually edited.

### Development

```bash
yarn dev              # Start dev server (runs client workspace only)
```

The dev server runs on `http://localhost:5173` (Vite default, not 3000 as stated in apps/client/README.md).

### Build

```bash
yarn build            # Build all workspaces in parallel
```

Build output is in `apps/client/dist/`. Build typically takes 3-5 seconds.

### Linting

```bash
yarn lint             # Run ESLint on all workspaces
```

**Configuration**: ESLint uses flat config format in `eslint.config.js`. Shared presets are in `packages/config/eslint-preset.js`.

### Testing

```bash
yarn test             # Run tests with --changed flag
yarn test:unit        # Alias for test
```

**IMPORTANT**: The default test command uses `--changed` flag which only runs tests for changed files. In a fresh clone with no git changes, this will show "No test files found" and exit successfully. This is expected behavior.

**To run all tests** (when needed for validation):

```bash
cd apps/client && yarn vitest run
```

**Note**: Running tests directly with `vitest run` may hang if no files have changed. Use the workspace test command at the root level instead.

**Test Location**: All tests are co-located with source files using `.spec.ts` extension (13 test files total).

### Formatting

```bash
yarn format           # Auto-fix formatting with Prettier
yarn format:check     # Check formatting without fixing
```

**Note**: Auto-generated files (`.pnp.cjs`, `.pnp.loader.mjs`) may show formatting warnings. This is normal and can be ignored.

### Pre-commit Hooks

```bash
yarn prepare          # Install Husky hooks
```

**Automatic on commit**: `lint-staged` runs automatically via Husky pre-commit hook. It will:

1. Format changed files with Prettier
2. Lint changed files in `apps/client` with ESLint
3. Run related tests for changed test files

## CI/CD Pipeline

All PRs and pushes to `main` trigger the CI pipeline (`.github/workflows/ci.yml`).

**Jobs run in parallel** (after install):

1. **lint** - Runs `yarn lint`
2. **format-check** - Runs `yarn format` (note: runs format, not format:check)
3. **test** - Runs `yarn test:unit`
4. **build** - Runs `yarn build`

**Additional Pipeline**:

- **Semgrep** - Security scanning runs on PRs and pushes to main

**Runtime**: Node 20.x with dependency caching via GitHub Actions cache.

**Before pushing changes**: Always ensure `yarn lint`, `yarn test`, and `yarn build` pass locally to avoid CI failures.

## Project Architecture

### Client Application (`apps/client`)

**Framework**: Vue 3 with `<script setup>` Composition API  
**Router**: Vue Router 4  
**Styling**: Scoped CSS with base styles in `src/assets/`

**Key Directories**:

- `src/components/` - Reusable Vue components
  - `layout/` - AppHeader, AppFooter
  - `sections/` - Page sections (Hero, About, Projects, Contact, Showcase)
  - `icons/` - Icon components
- `src/composables/` - Reusable composition functions (useProjects, useShowcase, useContactLinks, useStatuses)
- `src/views/` - Page-level components (currently just HomeView)
- `src/router/` - Vue Router configuration
- `src/assets/` - Global CSS and images

### Code Conventions

Follow the guidelines in `GEMINI.md`:

- **Components**: PascalCase (e.g., `MyComponent.vue`)
- **Variables/Functions**: camelCase
- **Composables**: camelCase with `use` prefix
- **Booleans**: Use `is`, `has`, `should` prefixes
- **Constants**: SCREAMING_SNAKE_CASE

**Vue Component Structure** (in order):

1. Imports
2. Props & Emits
3. Reactive State (refs, reactives)
4. Composables
5. Computed Properties
6. Watchers
7. Lifecycle Hooks
8. Methods

**Comments**: Explain "why" not "what". Avoid obvious or conversational comments.

## Common Issues and Workarounds

### Yarn PnP (Plug'n'Play)

This project uses Yarn PnP instead of `node_modules/`. The `.pnp.cjs` file handles module resolution.

- **Do not** manually edit `.pnp.cjs` or `.pnp.loader.mjs`
- These files will change after dependency updates
- Formatting warnings on these files can be ignored

### Test Command Behavior

The default `yarn test` uses `--changed` flag. In fresh clones:

- May show "No test files found" - this is EXPECTED
- Only runs tests for files tracked by git that have changes
- For full test runs, use `cd apps/client && yarn vitest run`

### Workspace Commands

All root-level commands use `yarn workspaces foreach -Apt run <command>`:

- Runs commands in all workspaces in parallel (`-p`)
- In topological order (`-t`)
- Only in workspaces that define the script (`-A`)

To run commands in specific workspace: `yarn workspace client <command>`

### Docker Build

The Dockerfile is multi-stage:

1. Builder stage: Installs deps and builds the app
2. Production stage: Serves with Nginx on port 8080

**Build from repo root**:

```bash
docker-compose up --build
```

Or manually:

```bash
docker build -f apps/client/Dockerfile -t portfolio-client .
docker run -p 8080:8080 portfolio-client
```

## Validation Checklist

Before finalizing changes:

1. ✅ Run `yarn install --immutable`
2. ✅ Run `yarn lint` (must pass with no errors)
3. ✅ Run `yarn test` (should pass or show no files if no changes)
4. ✅ Run `yarn build` (must succeed)
5. ✅ Verify no unintended file changes (especially `.pnp.cjs`)
6. ✅ If adding dependencies, update both package.json and run install

## Trust These Instructions

These instructions have been validated by running all commands in a fresh clone. Only perform additional exploration if:

- The instructions are incomplete for your specific task
- You encounter errors not documented here
- The codebase structure has changed significantly

For most tasks, following these instructions will prevent common build and validation failures.
