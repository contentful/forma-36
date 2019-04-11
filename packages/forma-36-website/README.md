# Forma 36 Website

## Introduction

This is the home for documentation relating to Forma 36, the Contentful design system.

The website is broken down into four main sections:

- Foundation - Information relating to the basic building blocks of creating Contentful products - design tokens, typography, colour, etc.
- Guidelines - In-depth guidelines to design topics - how we write content, how we space our components, etc.
- Components - In-depth documentation on how to use our components.
- Resources - Links to resources such as our Sketch UI kit, GitHub repos or other tools.

## Development

The documentation website is powered using [Gatsby v2](https://www.gatsbyjs.org). To install dependencies, first run `yarn`, and run `yarn start` to launch the development server. This will create a live preview with hot module reloading at http://localhost:8000/.

## Overview of project structure

```
.
├── components     // Components used internally by the documentation site
├── images         // Images for the website
└── pages
    ├── components // Documentation about our pages
    ├── foundation // Foundation documentation pages
    ├── guidelines // Guidelines documentation pages
    ├── resources  // Resource page
    └── index.mdx  // The homepage content for the documentation site
```

Each page lives within it's own directory and has an `index.mdx` to store it's contents. If a page has child-pages, they should be nested within the page's directory.

**Example**

```
my-page
├── index.mdx     // The contents for `my-page`
└── my-sub-page
    └── index.mdx // The contents for `my-sub-page`
```

## Overview of navigation

There are two places for navigation within the website. The sidebar navigation (generated via `gatsby-config.js`), and page section navigation (generated via front matter).

Here is a guide to creating navigation in both places based on the following structure:

```
my-page
├── index.mdx     // The contents for `my-page`
└── my-sub-page
    └── index.mdx // The contents for `my-sub-page`
```

### Adding/updating sidebar navigation items

To add these pages to the sidebar navigation, you can update the `gatsby-config.js` file by modifying the `menuLinks` property on the `siteMetadata` object as follows:

**`gatsby-config.js` example**

```js
siteMetadata: {
  title: 'Forma 36 - The Contentful Design System',
  menuLinks: [
    {
      name: 'My page',
      link: '/my-page/',
      menuLinks: [
        {
          name: 'My sub-page',
          link: '/my-page/my-sub-page/',
        }
      ],
    },
  ]
}
```

The value for the link property **must** end in a forward slash.

### Adding/updating page section navigation items

To update the page section navigation for a page you just need to update the front matter for the desired page.

**`my-page.mdx` example**

```mdx
---
title: 'My page'
subpages:
  - title: 'My sub-page'
    path: '/my-page/my-sub-page/'
---
```

The value for the path property **must** end in a forward slash.

## Adding component documentation

Component documentation makes use of front matter to generate links to the component on Storybook and in the GitHub repo.

**Example**

```mdx
---
title: 'Typography'
type: 'component'
github: 'https://github.com/contentful/forma-36/tree/master/packages/forma-36-react-components/src/components/Typography'
storybook: 'https://f36-storybook.contentful.com/?path=/info/components-typography-typography--displaytext-large'
---
```

This example generates the header section for the page which contains a page title, and links to Storybook/GitHub.

## Adding images to pages

Page-specific images should live in the same directory as the page file and referenced using a relative path. Here is an example:

**Directory structure**

```
my-page
├── index.mdx // The contents for `my-page`
└── image.jpg // The image referenced in `my-page`
```

**index.mdx**

```
![alt text for the image](image.jpg)
```
