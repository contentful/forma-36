const fs = require('fs');

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onPostBuild = () => {
  fs.copyFileSync('./_redirects', './public/_redirects');
  console.log('redirect added!'); // eslint-disable-line
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const layout = path.resolve(`./src/components/Layout.js`);
  return graphql(
    `
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                slug
                type
                status
                github
                storybook
              }
              body
            }
          }
        }
      }
    `,
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const pages = result.data.allMdx.edges;

    pages.forEach((page) => {
      const slug = page.node.frontmatter.slug || page.node.fields.slug;
      createPage({
        path: slug,
        component: layout,
        context: {
          slug: slug,
          frontmatter: page.node.frontmatter,
          body: page.node.body,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
