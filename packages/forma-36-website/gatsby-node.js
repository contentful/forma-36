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
        skipChildrenPropWithoutDoc: false,
      },
    );

    const components = tsConfigParser.parse(sourcePath) || [];

    const result = {};
    components.map((component) => {
      result[component.displayName] = component;
    });

    return result;
  } catch (e) {
    // eslint-disable-next-line no-console
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
      const { frontmatter, fields, body } = page.node;
      /**
       * "fields.slug" is generated automatically based on the relative path of the file which is perfect for the pages in the website project,
       * but for pages generated from the components’ MDX files, we should use the slug defined in their frontmatter
       */
      const slug = frontmatter.slug || fields.slug;
      const propsMetadata = {};

      // Extract props information for PropsTable and assign it to propsMetadata
      if (frontmatter.typescript) {
        const typescriptSources = frontmatter.typescript.trim().split(',');

        typescriptSources.forEach((source) => {
          const sourcePath = path.resolve(
            path.dirname(page.node.fileAbsolutePath),
            source,
          );

          Object.assign(
            propsMetadata,
            getTypescriptMetaInformation(sourcePath),
          );
        });
      }

      createPage({
        path: slug,
        component: path.resolve(`./src/components/Layout.js`),
        context: {
          slug,
          frontmatter,
          body,
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
