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

# Release process

Our releases are managed automatically through the CI. It only generates new release if a new changeset is present in the PR that was merged into the main branch.

The CI will use the changeset publish method to update the versions on the packages and publish to NPM, and then based on which packages were published, it will generate the tags and releases and add them to Github.

It also updates the [What's new](https://f36.contentful.com/whats-new) page that we show in our [website](https://f36.contentful.com/whats-new). In order to update the website daily we had to create a custom flow where we group all changes by package.

## Generating What's new page

What we are doing in this custom flow, is that we store all changesets in a single file from where we later extract the changes to add to the page, that is handled by the CI, on the release job, and uses the [changelog-generate.js](https://github.com/contentful/forma-36/blob/fe934ff657852993ef321348651cbce0a68dc349/scripts/changesets/changelog-generate.js) script file.

This file reads and parse the `.changelogrc` file, and adds the news changesets to it, so it contains all changes on the last merges, it groups the changes by packages.

After updating the `.changelogrc` file it uses the changeset version to update the packages `CHANGELOG` files, and then calls [generate-releases.js](https://github.com/contentful/forma-36/blob/fe934ff657852993ef321348651cbce0a68dc349/scripts/changesets/generate-releases.js) script file, that handles publishing to NPM and generating the releases on Github.

Every day there is a task running on the CI that calls the [changelog-write.js](https://github.com/contentful/forma-36/blob/fe934ff657852993ef321348651cbce0a68dc349/scripts/changesets/changelog-write.js). This file checks for contents on the `.changelogrc` file and generates the [What's new](https://f36.contentful.com/whats-new) page based on those. Then it empty the files to not have duplicated contents when it needs to generate the page again.

## Prereleases

> Prereleases are only used for new components, once a package is stable we avoid adding prerelease code into it.
>
> For changes in stable components we follow the semver versioning

We work with the concept of the prereleases being `alpha` and `beta`.

Since we want to show the documentation of the components that are still on prereleases on our website, we need to have them merged on `main` branch, but we don't want to have them published or handled by changeset.

For that we need to take some precautions:

- The package that is in prerelease (alpha, beta) needs to be added to the ignore field on the [.changeset/config.json](https://github.com/contentful/forma-36/blob/main/.changeset/config.json), so if a changeset is created for that package it will be ignored and not change the version or publish that specific package.
- And we don't have prerelease packages being part of the umbrela package (`f36-components`), which means that when it becomes stable we add it there and replace where it was being used before, e.g. on the website and/or playground.

Trying to make prereleases easier to handle we created a script that you can use on your branch before merging into master, that will bump the package you select, and you can choose if you it's an alpha or beta release, before publishing it to NPM.

You can check the script [here](https://github.com/contentful/forma-36/blob/c6b10071959a085b21e49f5411a5ebff2f8a70d6/scripts/prerelease.mjs)
