# Figma Code Connect

> **Important:** Icon mappings are configured separately through the Figma UI by the design team. There are intentionally no `.figma.tsx` files for icons in this repo.

## What is Code Connect?

[Figma Code Connect](https://github.com/figma/code-connect) links Figma components to their React implementations. When a designer inspects a component in Figma Dev Mode, they see a real code snippet — including the correct props — instead of a generic placeholder.

### Especially powerful with AI agents and Figma MCP

When using an AI coding agent together with the Figma MCP server, Code Connect transforms how design-to-code workflows operate. Without it, the agent receives generic HTML with utility classes when reading a Figma design. With it, the agent gets back actual Forma 36 component names with the correct props already mapped — meaning it can implement a design directly in terms of the design system rather than reconstructing it from scratch.

In practice: give an agent a Figma link and ask it to implement the design, and it will output `<Button variant="primary">` instead of `<button class="bg-blue-500 px-4 py-2 rounded">`. The accuracy and quality of the generated code improves significantly.

## Where mappings live

Every component that has a Code Connect mapping has a `*.figma.tsx` file co-located next to its source:

```
packages/components/<component>/src/<Component>/<Component>.figma.tsx
```

Examples:

- `packages/components/button/src/Button/Button.figma.tsx`
- `packages/components/card/src/Card/Card.figma.tsx`
- `packages/components/badge/src/Badge/Badge.figma.tsx`

The full list of mapped components is in [`figma.config.json`](./figma.config.json) under `codeConnect.include`.

## Anatomy of a mapping file

```tsx
import React from 'react';
import figma from '@figma/code-connect';
import { Button } from './Button';

const FIGMA_URL = 'https://www.figma.com/design/<file-id>?node-id=<node-id>';

figma.connect(Button, FIGMA_URL, {
  props: {
    variant: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
    }),
    children: figma.string('Label'),
  },
  example: ({ variant, children }) => (
    <Button variant={variant}>{children}</Button>
  ),
});
```

Key parts:

- **`FIGMA_URL`** — points to the exact Figma node. Get it from the Figma URL when the component is selected (`?node-id=...`).
- **`props`** — maps Figma property names to React prop values using `figma.enum`, `figma.string`, `figma.boolean`, `figma.instance`, `figma.nestedProps`, etc.
- **`example`** — the JSX snippet shown to designers in Dev Mode.

## Variant restrictions

When a Figma component has a `State` property (Default, Disabled, Hover, etc.), states that require a specific React prop need their own `figma.connect` call with a `variant` filter:

```tsx
// State=Default — no extra props
figma.connect(Button, FIGMA_URL, {
  variant: { State: 'Default' },
  props: { ... },
  example: ({ ... }) => <Button ...>{children}</Button>,
});

// State=Disabled — must pass isDisabled
figma.connect(Button, FIGMA_URL, {
  variant: { State: 'Disabled' },
  props: { ... },
  example: ({ ... }) => <Button ... isDisabled>{children}</Button>,
});
```

Purely visual states (Hover, Focus) don't need a separate mapping since no React prop changes.

## Adding or updating a mapping

1. Locate or create `<Component>.figma.tsx` next to the component source.
2. Get the Figma node URL by selecting the component in Figma and copying the link (`Share → Copy link`).
3. Map Figma properties to React props using the `figma.*` helpers.
4. Run a dry-run to validate before publishing (see below).

## Scripts

All scripts run from the repo root and require a `FIGMA_ACCESS_TOKEN` environment variable.

| Script                      | Description                                         |
| --------------------------- | --------------------------------------------------- |
| `npm run figma:publish`     | Publish all mappings to Figma                       |
| `npm run figma:publish:dry` | Dry run — validates and previews without publishing |
| `npm run figma:unpublish`   | **Unpublish all mappings** (see warning below)      |

Always run `figma:publish:dry` first to catch errors before they reach Figma.

> **Warning:** `figma:unpublish` removes **all** Code Connect mappings defined in this repo from Figma at once. Use it only when intentionally resetting everything. It cannot be scoped to a single component.

## figma.config.json

[`figma.config.json`](./figma.config.json) at the repo root controls which files are picked up:

```json
{
  "codeConnect": {
    "parser": "react",
    "include": ["packages/components/**/*.figma.tsx", ...],
    "exclude": ["**/*.test.*", "**/*.stories.*", ...],
    "importPaths": {
      "packages/components/navbar/src/*": "@contentful/f36-navbar",
      "src/*": "@contentful/f36-components"
    }
  }
}
```

`importPaths` rewrites internal source paths to their published package names in the generated snippets.

## Tips

- **Dry run before publishing.** `npm run figma:publish:dry` prints exactly what would be sent to Figma, including any parse errors.
- **One file per component.** If a component needs multiple `figma.connect` calls (e.g. variant restrictions), keep them all in the same `.figma.tsx` file.
