# Assistant instructions (concise)

## Purpose

- Provide focused, actionable guidance for code changes, tests, and PRs. Keep responses short and explicit about assumptions.

## Assumptions

- Node 16+ and Yarn are available.
- Project uses Vue 3, TypeScript, Vite, Vitest, and @testing-library/vue.

## Base (minimum baseline)

- Required runtime: Node 16+ and Yarn available locally and in CI.
- CI expectations: PRs must run lint and tests automatically (GitHub Actions); no new lint errors or test failures accepted.
- Tests & coverage: add/update tests for changed code; aim for maintainable coverage on changed modules (e.g., ~80% as a guide).
- Accessibility & security: run basic accessibility checks for UI changes and avoid committing secrets or credentials.
- Merge readiness: passing lint, tests, and CI checks before merge.

## Stack & common commands (reference)

- Stack: Vue 3 + TypeScript, Vite, Vitest.
- Quick commands:
  - `yarn lint`
  - `yarn test`
  - `yarn vitest run -t "<test name>"`
  - `yarn install`

## Testing (reference)

- Run lint and unit tests after changes:
  - `yarn lint`
  - `yarn test`
- Add or update tests for any functional change. To run a single test:
  - `yarn vitest run -t "Test name"`

## Comment and code conventions (reference)

- Use explicit TypeScript types for public interfaces and function signatures.
- Use small, focused diffs; prefer minimal, incremental changes.
- Represent unchanged regions with a single comment marker when providing edits (e.g., // ...existing code...).
- Fail early with clear error messages. Avoid leaking secrets.
- Do not add useless comments.
- Keep the code clean and organized.
- Use base components whenever possible.
- Use global styles for common layout and design patterns.

## PR checklist (reference)

- Pass lint (`yarn lint`)
- Pass tests (`yarn test`)
- Add or update tests for changed code
- Include migration note for breaking changes
- Brief rationale (1–2 lines) for non-obvious decisions

## Notes & rationale

- Keep guidance short and practical. Provide templates and examples only when necessary to avoid duplication.
