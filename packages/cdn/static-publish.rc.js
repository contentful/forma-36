/** @type {import('@fastly/compute-js-static-publish').StaticPublisherConfig} */
const config = {
  rootDir: './public',
  staticContentRootDir: './static-publisher',
  server: {
    staticItems: ['/fonts/*'],
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
