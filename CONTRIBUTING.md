# Contributing to Forma 36

Forma 36 is an open-source design system by Contentful and we welcome contributions from our community. If you have an idea that could help other users, a new solution, a fix to an existing component, or a new component, this guide explains how to transform those ideas into contributions.

## Before contributing

### Check if your idea is already present

Before writing a proposal or code, explore this website and the [GitHub repository](https://github.com/contentful/forma-36) to check whether the idea is already implemented. Review the current [open proposals](https://github.com/contentful/forma-36/issues?q=is%3Aopen+is%3Aissue+label%3Aproposal), too: you may find a similar idea and be able to collaborate with its proposer.

### Could an existing component be extended to realize your idea?

If an existing component almost meets the need, propose an update or refactor instead. This may mean a new variation or a new component property.

## Contribution process

Once you have checked the library and decided to create a component or extend an existing one, follow this process.

### Step 1: Open a GitHub issue

[Open a new GitHub issue](https://github.com/contentful/forma-36/issues/new/choose) using the appropriate template. Describe the idea in detail and include images when they help explain it.

### Step 2: Proposal review

The Forma 36 team reviews repository issues regularly and provides feedback on proposals. After discussion and approval, you can begin work; the team can help as needed.

Review similar components and follow the [code style guide](docs/code-style-guide.md) so that your contribution uses the established conventions.

### Step 3: Open a pull request

When the code is ready, open a pull request. The pull request template explains what to include.

Include a changeset if the change should result in a new version. From the repository root, run:

```bash
pnpm exec changeset
```

Read [RELEASES.md](RELEASES.md) for details about changesets and publishing.

### Step 4: Code and design review

The team reviews the code and any design changes to ensure that the solution is maintainable and scalable.

### Step 5: Merge the changes to the main branch

After approval, merge the pull request into `main`. If it includes a changeset, the automated release process publishes a new Forma 36 version containing the change.

## Bugs and light contributions

For bugs, it is possible to skip the proposal steps and open a pull request directly with the fix. The same applies to light contributions: visual defects, small visual changes, and documentation updates.
