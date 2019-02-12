module.exports = {
  siteMetadata: {
    title: 'Forma 36 - The Contentful Design System',
    menuLinks: [
      {
        name: 'Overview',
        link: '/overview',
      },
      {
        name: 'Foundation',
        link: '/foundation',
      },
      {
        name: 'Guidelines',
        link: '/guidelines',
        menuLinks: [
          {
            name: 'Copy',
            link: '/copy',
          },
        ],
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout'),
        },
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Forma 36 - The Contentful Design System',
        short_name: 'Forma 36',
        start_url: '/',
        background_color: '#152233',
        theme_color: '#152233',
        display: 'minimal-ui',
        icon: 'src/images/forma-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
