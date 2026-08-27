# Forma 36 agent guidelines

## Repository at a glance

Forma 36 is Contentful's TypeScript/React design-system monorepo. It uses pnpm
workspaces and Turborepo. The root workspace includes packages in
`packages/*` and component packages in `packages/components/*`.

- Use Node `24.x.x` (see `.nvmrc`) and pnpm `11` or newer.
- Run commands from the repository root with `pnpm` unless a package-specific
  command is required.
- Treat generated output (`dist/`, `.next/`, `dist-storybook/`) as build
  artifacts; do not edit it directly.
- Never expose, commit, or print credentials. Local environment files are
  intentionally ignored.

## Find the right place before changing code

- Reusable UI components live in `packages/components/<package>/src`.
- Shared primitives and styling infrastructure live in `packages/core`.
- Tokens are in `packages/forma-36-tokens`.
- AI-focused components live in `packages/f36-ai-components`; this package is
  currently private and prerelease.
- The documentation site is `packages/website`.
- Codemods are in `packages/forma-36-codemod`.
- Shared test setup and helpers are in `scripts/test`.

Read the nearest package `README`/`README.mdx` and its `package.json` before
editing a package. Follow the component layout in
[`docs/folder-structure.md`](docs/folder-structure.md): source, tests,
examples, and stories are colocated with the package. Keep tests close to the
code they exercise.

## Implementing changes

- Make the smallest change that satisfies the request; preserve public APIs
  unless the task explicitly changes them.
- Follow the existing local patterns before introducing a new abstraction,
  dependency, or directory convention.
- Use TypeScript and React idioms already used in the target package. Respect
  the repository ESLint configuration rather than adding broad disables.
- Follow [`docs/code-style-guide.md`](docs/code-style-guide.md) for component
  API naming: callback props use `on…`, handlers use `handle…`, boolean state
  uses `is…`, and visibility options use `with…` where applicable.
- Preserve accessibility. For interactive or semantic UI changes, update or
  add focused Testing Library/Vitest coverage and, when appropriate, a
  Storybook story. The repository enables `jsx-a11y` and Storybook linting.
- Update the package's MDX documentation/examples when a consumer-facing
  component API or behavior changes. Component documentation is published by
  the website, so retain the `README.mdx` naming convention.
- Treat `@contentful/f36-components` as the primary consumer entry point; it
  is tree-shakeable. Individual component packages and the separate
  `@contentful/f36-icons` package are also supported public APIs, so preserve
  their exports and package boundaries when making a change.
- Keep global browser-style behavior in `GlobalStyles` rather than introducing
  a competing global reset. It is the documented public mechanism for this
  concern and is built on Emotion's global styles support.
- When a change would break a public component or prop API, follow the
  [deprecation process](DEPRECATION.md) instead of removing it directly. A
  deprecation needs a replacement and migration guidance; use
  [MIGRATION.md](MIGRATION.md) and the affected component documentation for
  before/after examples and any required codemod guidance.

## Component quality and validation

For component work, make the implementation demonstrable and accessible:

- Add or update Storybook stories that cover every relevant component variant
  and interaction state.
- Document recommended use and implementation patterns in the package's MDX
  examples.
- Add thorough Vitest/Testing Library coverage. Use the shared
  `expectNoA11yViolations` helper for rendered component accessibility checks
  where applicable.

Before handing off, run the applicable root checks and ensure they succeed:

```bash
pnpm prettier:check
pnpm lint
pnpm test
pnpm build
pnpm storybook:build
```

Start Storybook with `pnpm storybook` for visual changes and confirm it serves
the changed stories. `pnpm test` builds the token package before running the
configured Vitest suite in jsdom. Use focused tests while iterating, but do not
hand off a change with a failing lint, test, build, or Storybook build.

Do not use the root `pnpm prettier` command as a validation step: it writes to
all matching source and Markdown files. Use `pnpm prettier:check`, or format
only files you intentionally changed.

## Releases, changesets, and pull requests

- Read [`RELEASES.md`](RELEASES.md) before adding a release artifact.
- Add a changeset for a publishable package change. Documentation-only changes
  do not need one.
- Generate changesets only with `pnpm exec changeset` from the repository
  root. Do not create or edit `.changeset` files by hand.
- Do not add changesets for packages listed in `.changeset/config.json`'s
  `ignore` array (including the private AI and website packages) unless the
  release process is intentionally being changed.
- Component packages are fixed-versioned as a group. Do not hand-edit package
  versions, changelogs, or the lockfile to simulate a release.
- Follow the PR checklist: tests/stories/documentation where needed, supported
  browser behavior, and no sensitive information.

## Agent operating rules

- Inspect the working tree before editing and preserve unrelated user changes.
- Do not run destructive Git commands, publish packages, deploy, or modify CI
  credentials unless the user explicitly requests it.
- State what you validated and what you did not validate in the handoff.
- When repository documentation and these instructions disagree, follow the
  more specific, nearer-to-code guidance and report the conflict.
