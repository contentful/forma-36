# Releases

The release and versioning of our packages is done using [changesets](https://github.com/changesets/changesets).

Our CI is configured to automatically bump the version and publish the packages on all new commits in `main` branch that contains a new changeset added.

## Adding changesets

We use the `changeset-bot` to comment on PRs when a changeset is found or not.
In case the change you are making is only on documentation or you don't want to publish a new package version for the change, you don't need to do anything and can merge the PR once it's approved.

But in case you want a new version to be published, you will need to add a changeset, for that you can:

### Through CLI

- run `yarn changeset` on the root of the repository.
- it starts a wizard showing packages that had changes from `main` branch, and which kind of bump should be applied (major, minor or patch), and also ask for a description of the change.
- it creates a file in the `.changeset` folder that needs to be commited to the branch.
- `changeset-bot` will show that information in its comment on the PR.
- when the PR is merged it will trigger the release job on our CI and a new version will be published.

## Fixed versioning

We use the fixed packages approach from changeset on all our component packages, and the umbrella package (`@contentful/f36-components`), the fixed packages as described on changesets documentation:

> Fixed packages allow you to specify a group or groups of packages that should be versioned and published together.

So when any component package receives a patch, minor or major version change, it will also update the version of all the other packages and update their version on the dependencies list, so for example when using `@contentful/f36-components@4.3.10` all components used by it will also be the version `4.3.10`.

You can read more about fixed version on changeset [here](https://github.com/changesets/changesets/blob/main/docs/fixed-packages.md).

## Why changesets

We decided to use changesets to have a fixed version across our components packages and our umbrella package, and so we can have a changelog with the changes on all packages to display on our repository and also on our documentation [website](https://f36.contentful.com/whats-new).

Also as we moved towards `turborepo`, we also decided to remove lerna entirely and changesets is also the recommended tool for versioning on `turborepo` [website](https://turborepo.org/docs/guides/migrate-from-lerna#package-publishing-versioning-and-changelog-generation)
