# F36 Folder Structure

To make it easy to maintain our files and folders we ask every contributor to follow this folder structure.
Every package has its own folder, except for components which should be kept in the folder `/components` (every component must have its own folder).

## Table of contents

- [Components](#components)
  - [Packages with more than one component](#packages-with-more-than-one-component)
  - [Packages with utility functions](#packages-with-utility-functions)
  - [Why do we use MDX?](#why-do-we-use-mdx)
  - [Why is every `.mdx` file named "README"](#why-is-every-mdx-file-named-readme)

## Components

The basic folder structure of a component looks like this:

```
/my-component
  /src
    index.ts
    MyComponent.tsx
    MyComponent.styles.ts
  /stories
    # stories for storybook
  /test
    # test files
  README.mdx
  package.json
```

### Packages with more than one component

Sometimes the package will include a "base" component and some variants that are build from the base component (e.g. Button).
In these cases, the folder structure of the package will look more like this:

```
/button
  /src
    /ButtonGroup
      README.mdx
      index.ts
      ButtonGroup.tsx
    /IconButton
      README.mdx
      index.ts
      IconButton.tsx
    /ToggleButton
      README.mdx
      index.ts
      IconButton.tsx
    index.ts
    Button.tsx
  /stories
    # stories for storybook
  /test
    # test files
  README.mdx
  package.json
```

### Packages with utility functions

Another possible case is that the package has a component and some utility functions. The folder structure will loke like this:

```
/datetime
  /src
    /RelativeDateTime
      README.mdx
      index.ts
      RelativeDateTime.tsx
    /utils
      README.mdx
      index.ts
      formatDateTimeUtils.ts
    index.ts
    DateTime.tsx
  /stories
    # stories for storybook
  /test
    # test files
  README.mdx
  package.json
```

### Why do we use MDX?

We use `.mdx` file format instead of just `.md` because these files are also used
by our website to generate its pages.
You can read more about the benefits of mdx [here](https://mdxjs.com/).

### Why is every `.mdx` file named "README"?

The markdown files must be named "README" because we want them to show up in GitHub
for the people that navigate through the folders of the repo looking for documentation.
