# Gemini Code Consistency Framework

This document outlines the principles and guidelines for maintaining consistent, high-quality code within this project. The goal is to create a codebase that is easy to read, understand, and maintain, without relying on superfluous comments.

## 1. Code Style and Formatting

We enforce a consistent code style using automated tools.

- **Prettier:** Handles all code formatting. Ensure you have the Prettier extension installed in your editor to format on save. Our configuration is in `.prettierrc.json`.
- **ESLint:** Catches potential bugs and enforces coding best practices. Configuration is in `eslint.config.ts`.

Before committing, ensure your code is free of any ESLint errors or warnings.

## 2. Commenting Philosophy

Comments should explain the _why_, not the _what_. Code should be self-documenting.

- **Avoid obvious comments:**

  ```typescript
  // Bad
  // Increment i
  i++
  ```

- **Explain complex logic or business rules:**

  ```typescript
  // Good
  // The user's discount is calculated based on their membership level and purchase history.
  // See JIRA-123 for more details on the business logic.
  const discount = calculateDiscount(user)
  ```

- **Use comments for TODOs or to mark areas for improvement:**

  ```typescript
  // TODO: Refactor this to use the new API endpoint
  ```

- **Avoid conversational or edit-related comments:**

  ```typescript
  // Bad
  // Here are your changes

  // Bad
  // Refactored the code to implement the new feature
  ```

## 3. Naming Conventions

Clear and consistent naming is crucial for readability.

- **Components, Classes, and Enums:** Use PascalCase (e.g., `MyComponent.vue`, `MyClass`, `MyEnum`).
- **Variables and Functions:** Use camelCase (e.g., `myVariable`, `myFunction`).
- **Composables:** Use camelCase with a `use` prefix (e.g., `useMyComposable`).
- **Booleans:** Use prefixes like `is`, `has`, or `should` (e.g., `isVisible`, `hasPermission`).
- **Constants:** Use SCREAMING_SNAKE_CASE (e.g., `MY_CONSTANT`).
- **Be descriptive:** Avoid single-letter variable names unless for simple counters in loops.

## 4. Vue Component Structure

Follow this general structure for Vue components to ensure consistency.

```vue
<script setup lang="ts">
// 1. Imports
// 2. Props & Emits
// 3. Reactive State (refs, reactives)
// 4. Composables
// 5. Computed Properties
// 6. Watchers
// 7. Lifecycle Hooks
// 8. Methods
</script>

<template>
  <!-- Component template -->
</template>

<style scoped>
/* Component styles */
</style>
```

## 5. Testing

We use Vitest for unit and component testing. See Code Quality below for commands.

- All new features should be accompanied by tests.
- Bug fixes should include a regression test.
- Test files should be co-located with the component or module they are testing, with a `.spec.ts` extension.

## 6. Code Quality

After making edits to code, use Husky to automatically run testing and linting with the command `npm run prepare`.
