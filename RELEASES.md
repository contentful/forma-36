# Releases

The release and versioning of our packages is done using [changesets](https://github.com/changesets/changesets).

Our CI is configured to automatically bump the version and publish the packages on all new commits in `main` branch that contains a new changeset added.

## Adding changesets

We use the `changeset-bot` to comment on PRs when a changeset is found or not.

Note that each line in the description will be renderd as a bullet point on our changelog.

In case the change you are making is only on documentation or you don't want to publish a new package version for the change, you don't need to do anything and can merge the PR once it's approved.

But in case you want a new version to be published, you will need to add a changeset, for that you can:

### Through CLI

- run `npx changeset` on the root of the repository.
- it starts a wizard showing packages that had changes from `main` branch, and which kind of bump should be applied (major, minor or patch), and also ask for a description of the change.
- it creates a file in the `.changeset` folder that needs to be commited to the branch.
- `changeset-bot` will show that information in its comment on the PR.
- when the PR is merged it will trigger the release job on our CI and a new version will be published.

Changesets files should be structured like:

```
---
"@contentful/package-name": version change (minor, patch, major)
"@contentful/another-package": version change (minor, patch, major)
---

- Description of what has changed
- Another change
```

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

## Next branch

The next branch is used for the new version of Forma 36, which will probably have breaking changes. To help the development of the new packages, we have setup an automatic publishing of the packages on that branch to the `alpha` tag.
These packages aren't shown on the website as they can have breaking changes often.

### How to automatic publish

To make changeset publish a new version of the packages it's the same as in the `main` branch, it just requires having a changeset generated and specifing the packages.

```sh
npx changeset
# Always select major change
```

Differently from the `main` branch, neither the packages changelog or the **What's new page** will be updated, and the changeset files will not be removed.

### Testing how the version would change locally

After committing your work, test the version's change by running these commands.

> [!WARNING]
> Remember to revert the changes made through the `npx changeset version` and not commit them.

#### Pre release version

After having the changes done, create the changeset and commit it.

```sh
npx changeset;
# Select the package and set as major version
# Commit the changeset
git add .changeset; git commit -m 'chore: add changeset for [package name]'

npx changeset version;
# This will update the pre.json and the package.json file for the selected package.
# If the package is already in alpha, it will update the version number after -alpha, e.g. alpha.0 > alpha.1
# If the package wasn't in alpha yet, the version will be updated to the next major version and -alpha.0 added at the end.
```

#### Moving to stable version

After having some pre release changsets created like on the previous step, you can run the following to look how it would look like when moving to stable.

```sh
npx changeset pre exit;
# This updates the pre.json file to mark it as exiting prereleases mode

# To test how it would update the changelogs and how it would behave as in main branch, replace the .changeset/config.json file with the one from the main branch, before running changeset version

npx changeset version;
# This will remove the pre.json file, and update all package.json files that need to be updated to the version without the -alpha tag.

```

### Changeset configuration

We use the pre-releasing changeset feature and the [.changeset/pre.json](./.changeset/pre.json), which specifies which tag to use and the packages' initial versions. It allows to control the alpha version bump, for example:

```
initial version: 4.61.2

For that initial version, each type of changeset would update as following:
patch: 4.61.3-alpha.0
minor: 4.62.0-alpha.0
major: 5.0.0-alpha.0

If the initial version is already on the alpha tag, either version would bump the alpha.[x]
```

_In our case we want all changes to be major so we work on the following major release._

**Config file explanation**

The main differences on the config file are the following:

```js
{
  "changelog": false // This is set so the changelog of the packages is not updated
  "ignore": [] // We don't want to ignore any package on the next branch
  "fixed": [] // We don't want to have fixed or linked versions of alpha releases
  "baseBranch": "next", // The branch which changesets uses to check versions
  "bumpVersionsWithWorkspaceProtocolOnly": true, // Avoid bumping dependencies on other packages
}
```

> [!NOTE]
> 
> - The changelog is not updated because after exiting the prerelease state, all the changesets will be compiled and applied to the new version. For example, `5.0.0` will have all the changesets of the `5.0.0-alpha.\*`
> - The `bumpVersionsWithWorkspaceProtocolOnly` prevents bumping packages' versions after a package they depend on is updated. This is because we want alpha packages to depend on stable packages. We would bump all packages to an alpha core if we allow it.

### Exiting prerelease

When exiting the prerelease state, to make the packages stable some steps are necessary:

```sh
# We need to revert the .changeset/config.json file to write the changelog files

npx changeset pre exit # This sets changeset to exit prerelease mode on the next changeset version

npm run changelog:gen # Generates the .changelogrc file that is used to update the What's new page

npx changeset version # This updates the packages changelogs and package.json

npx changeset publish # To publish the packages.
```

_Our CI already handles part of it, we would only need to revert the `.changeset/config.json` file and run the `npx changeset pre exit` command._

If the last commit on the branch before merging into `main` has those changes, the CI will handle the versioning, publishing and generating github releases as usual.

### Differences in the CI

The main difference in the release jobs on the CI, is that in the `next` branch we don't generate the `.changelogrc` file and don't generate the github releases.

Other than that the proccess is the same:

1. Build the packages
2. Update the versioning
3. Commit the updated package.json file
