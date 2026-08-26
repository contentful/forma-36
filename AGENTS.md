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

## Validate proportionately

Run the narrowest relevant checks first, then expand for cross-package changes.
The root commands are:

```bash
pnpm prettier:check
pnpm lint
pnpm tsc
pnpm test
pnpm exec knip
pnpm build
```

`pnpm test` builds the token package first, then runs the configured Vitest
suite in jsdom. Use a targeted Vitest invocation while iterating when possible;
run the full suite for shared components, config, or workspace-wide changes.
Do not use the root `pnpm prettier` command as a validation step: it writes to
all matching source and Markdown files. Use `pnpm prettier:check`, or format
only files you intentionally changed.

For visual component changes, consider the existing Storybook workflow
(`pnpm storybook` or `pnpm storybook:build`). Chromatic runs in CI. Website
changes may need `pnpm docs:next:build`; link checking is a separate CI
workflow and requires a production website build.

## Releases, changesets, and pull requests

- Read [`RELEASES.md`](RELEASES.md) before adding a release artifact.
- Add a changeset for a publishable package change. Documentation-only changes
  do not need one.
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
