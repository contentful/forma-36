# Architecture

Forma 36 is Contentful's TypeScript and React design-system monorepo. It uses pnpm workspaces for dependency management and Turborepo to coordinate builds across packages.

## Workspace layout

```text
packages/
  components/                  Publishable UI component packages
  core/                        Shared React primitives and styling utilities
  forma-36-tokens/             Design tokens
  forma-36-react-components/   Umbrella package for the component library
  f36-ai-components/           Private, prerelease AI-focused components
  f36-docs-utils/              Documentation helpers
  f36-i18n-utils/              Internationalisation utilities
  forma-36-codemod/            Migration codemods
  website/                     The Forma 36 documentation site
  cdn/                         CDN assets
scripts/                       Shared build, test, Storybook, and release tooling
docs/                          Contributor and implementation documentation
```

The workspace roots are `packages/*` and `packages/components/*`. Every publishable package owns its `package.json`; package source generally begins at `src/index.ts`.

## Components and documentation

Reusable components are independently packaged beneath `packages/components`. Component code, unit tests, examples, and Storybook stories are deliberately colocated. A typical component package contains:

```text
<component>/
  src/          Implementation, exports, and colocated tests
  examples/     Documentation examples
  stories/      Storybook stories
  README.mdx    Published component documentation
  package.json
```

`README.mdx` files are consumed by the documentation website as well as shown on GitHub. See [docs/folder-structure.md](docs/folder-structure.md) for the supported layouts, including multi-component packages.

`packages/core` contains shared primitives. `packages/forma-36-tokens` provides the token layer used by components. Prefer consuming these shared layers over duplicating tokens, layout primitives, or styling behavior in an individual component.

## Consumer package boundaries

Consumers ordinarily install `@contentful/f36-components`, the umbrella package for the component library. It is designed to be tree-shakeable, so its use does not require every component to be included in an application bundle.

Individual component packages are also supported for consumers that need them. Icons are deliberately delivered through the separate `@contentful/f36-icons` package to keep the main component bundle smaller. Maintain these package exports and package boundaries as public API.

`GlobalStyles` is the documented component for managing default browser styles. It uses Emotion's global styling support, so global browser-style changes belong there rather than in individual components.

## Build and dependency graph

Package builds are commonly implemented with `tsup` and output to each package's `dist/` directory. The root `pnpm build` command runs the Turborepo build graph, so dependencies build before their consumers. Generated build output must not be edited manually.

The repository uses a pnpm catalog for React and React DOM versions and links workspace packages locally. Package dependencies and exports are the source of truth for public package boundaries.

## Quality boundaries

Vitest runs unit tests in jsdom, using aliases generated from workspace package metadata. Tests are restricted to the package paths listed in `vitest.config.mts`; add new test locations there only when introducing a new tested package area. Testing Library and the shared setup in `scripts/test` support component tests.

ESLint covers TypeScript, React, accessibility, imports, and Storybook files. Prettier formats source and Markdown. CircleCI runs build, formatting, lint, type checking, Knip, tests, Storybook/Chromatic, and website link checks in separate workflows.

## Documentation site

`packages/website` is a private Next.js application. It renders component MDX and repository-driven documentation. Its production build is exposed through the root `pnpm docs:next:build` command; link checking starts the production site after a successful build.

## Publishing

Changesets drive releases for publishable packages. Most component packages and the umbrella package are fixed-versioned together. Packages listed in `.changeset/config.json`'s `ignore` array are excluded from the automated changeset flow; this includes private/prerelease packages such as `@contentful/f36-ai-components` and the website.

Read [RELEASES.md](RELEASES.md) and [DEPRECATION.md](DEPRECATION.md) before changing the release or deprecation behavior.
