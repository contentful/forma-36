# Forma36 Documentation Website

## Getting Started

First, run the development server:

```bash
yarn start
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
For example, if you have a page with the slug `/getting-started`, the structure will look like:

```
/content
  getting-started.mdx
```

if you have a page with the slug `/guidelines/copy/grammar-and-rules`, the structure will looke like:

```
/content
  /guidelines
    /copy
      grammar-and-rules.mdx
  getting-started.mdx
```

Following this structure makes it easy to find the file that needs to be updated or changed in the future.
