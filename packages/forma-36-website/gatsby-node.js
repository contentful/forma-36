const fs = require('fs');
const docgen = require('react-docgen-typescript');
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

function getTypescriptMetaInformation(sourcePath) {
  try {
    const tsConfigParser = docgen.withCustomConfig(
      path.resolve('../../tsconfig.json'),
      {
        savePropValueAsString: true,
        shouldExtractLiteralValuesFromEnum: true,
        shouldExtractValuesFromUnion: true,
      },
    );

    const components = tsConfigParser.parse(sourcePath) || [];

    const result = {};
    components.map((component) => {
      result[component.displayName] = component;
    });

    return result;
  } catch (e) {
    console.log('Problem with parsing Typescript props for  ' + sourcePath);
    return {};
  }
}

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
              fileAbsolutePath
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
                typescript
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
      const sourcePath = page.node.frontmatter.typescript
        ? path.resolve(
            path.dirname(page.node.fileAbsolutePath),
            page.node.frontmatter.typescript,
          )
        : null;

      let propsMetadata = sourcePath
        ? getTypescriptMetaInformation(sourcePath)
        : {};

      createPage({
        path: slug,
        component: layout,
        context: {
          slug: slug,
          frontmatter: page.node.frontmatter,
          body: page.node.body,
          propsMetadata,
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
