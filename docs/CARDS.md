# Card components

This project uses a single shared `BaseCard` component to provide consistent card visuals and behavior.

Usage

- `BaseCard` accepts:
  - `href?: string` — when present the card renders as an anchor with `target="_blank" rel="noopener noreferrer"`.
  - `align?: 'center' | 'left'` — determines text alignment inside the card.

Slots

- `header` — top area (media or heading)
- default slot — main body content
- `footer` — actions or links

Examples

ShowcaseCard (centered chips):

```vue
<BaseCard align="center">
  <template #header>
    <h3>Title</h3>
  </template>
  <ul class="tech-list">...</ul>
</BaseCard>
```

ProjectCard (left-aligned image + text):

```vue
<BaseCard :href="project.link" align="left">
  <template #header>
    <img src="..." />
  </template>
  <div class="project-info">...</div>
</BaseCard>
```

Rationale

- Centralizes visual tokens and interactions (hover, focus, link behavior) so all cards stay consistent.
- Keeps per-card components responsible for content only (images, text, chip rendering).

Testing

- `BaseCard` has unit tests in `src/components/BaseCard.spec.ts` to ensure correct element rendering and link attrs.
