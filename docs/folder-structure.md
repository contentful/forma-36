# F36 Folder Structure

To make it easy to maintain our files and folders we ask every contributor to follow this folder structure.
Every package that should be published must have its own folder inside the `packages` directory,
with the exception of UI components that should have their folder and files created inside the `packages/components` directory.

```
/packages
  /components
    /autocomplete
      README.mdx
      package.json
    /button
      README.mdx
      package.json
    /forms
      README.mdx
      package.json
  /forma-36-codemod
    README.mdx
    package.json
  /forma-36-tokens
    README.mdx
    package.json
  /website
    README.mdx
    package.json
```

## Table of contents

- [F36 Folder Structure](#f36-folder-structure)
  - [Table of contents](#table-of-contents)
  - [Components](#components)
    - [Test files](#test-files)
    - [Packages with more than one component](#packages-with-more-than-one-component)
    - [Packages with utility functions](#packages-with-utility-functions)
    - [Why do we use MDX?](#why-do-we-use-mdx)
    - [Why is every `.mdx` file named "README"?](#why-is-every-mdx-file-named-readme)

## Components

The basic folder structure of a component looks like this:

```
/my-component
  /examples
  /src
    index.ts
    MyComponent.tsx
    MyComponent.test.tsx
    MyComponent.styles.ts
  /stories
    # stories for storybook of each component inside the package
  README.mdx
  package.json
```

If you run `yarn generate component`, this structure will be generated for you automatically.

### Test files

As you can see from the example above, we want to keep our test files close to what they are testing.
If your tests need supporting mocks and you need them to be in a separate files, we ask you to create a `__mocks__` folder close to the test file,
like this:

```
/my-component
  /src
    /__mocks__
      myMocks.ts
    index.ts
    MyComponent.tsx
    MyComponent.test.tsx
```

### Packages with more than one component

Sometimes the package will include a "base" component and some variants that are build from the base component (e.g. Button).
In these cases, the folder structure of the package will look more like this:

```
/button
  /examples
  /src
    /ButtonGroup
      README.mdx
      index.ts
      ButtonGroup.tsx
      ButtonGroup.test.tsx
    /IconButton
      README.mdx
      index.ts
      IconButton.tsx
      IconButton.test.tsx
    /ToggleButton
      README.mdx
      index.ts
      ToggleButton.tsx
      ToggleButton.test.tsx
    index.ts
    Button.tsx
    Button.test.tsx
  /stories
    # stories for storybook of each component inside the package
  README.mdx
  package.json
```

### Packages with utility functions

Another possible case is that the package has a component and some utility functions. The folder structure will loke like this:

```
/datetime
  /examples
  /src
    /RelativeDateTime
      README.mdx
      index.ts
      RelativeDateTime.tsx
      RelativeDateTime.test.tsx
    /utils
      README.mdx
      index.ts
      formatDateTimeUtils.ts
      formatDateTimeUtils.test.ts
    index.ts
    DateTime.tsx
    DateTime.test.tsx
  /stories
    # stories for storybook of each component inside the package
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
