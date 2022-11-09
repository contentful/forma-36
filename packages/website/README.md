# Forma36 Documentation Website

## Note to outside contributors

We did not expect outside contributors to run the forma documentation website locally, as this content is coming from the ui-team's contentful space, and is intended for internal use. For sandboxing and playing around locally we recommend to start the storybook package locally (see [the 'Storybook for f36-components' section on the main page](https://github.com/contentful/forma-36#storybook-for-f36-components)).

## Getting Started

First, run the development server:

```bash
npm run-script start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Content

Most of the content of our website comes from [MDX](https://mdxjs.com/) files in the repo.

For the documentation of Forma36’s components, we get all the mdx files inside `/components` and `/core` folders in the repo
and Next.js will create a page for each of them that has a `slug` parameter in their frontmatter (the top part of the mdx files between `--`).

The content that is not related to components like our "Getting started" guide is located in the `/content` folder here in the website package.
To simplify the maintainability of this content, we ask you to keep the files in the same structure as if they were routes in Next.js style
where the slug of the page defines its location in the folders.
For example, if you have a page with the slug `/tokens/colors`, the structure will look like:

```
/content
  /tokens
    colors.mdx
```

Following this structure makes it easy to find the file that needs to be updated or changed in the future.

## Environment variables

To run this website locally, you need to create a `.env.local` with the following variables:

```
NEXT_PUBLIC_DOCSEARCH_APP_ID={{ You can find the value of this variable at our Algolia account}}
NEXT_PUBLIC_DOCSEARCH_API_KEY={{ You can find the value of this variable at our Algolia account}}
NEXT_PUBLIC_DOCSEARCH_INDEX_NAME={{ You can find the value of this variable at our Algolia account}}

CONTENTFUL_SPACE_ID={{ You can find the value of this variable at our Contentful account}}
CONTENTFUL_ACCESS_TOKEN={{ You can find the value of this variable at our Contentful account}}
CONTENTFUL_PREVIEW_ACCESS_TOKEN={{ You can find the value of this variable at our Contentful account}}
```
