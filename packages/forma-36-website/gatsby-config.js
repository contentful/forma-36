module.exports = {
  siteMetadata: {
    title: 'Forma 36 - The Contentful Design System',
    menuLinks: [
      {
        name: 'Foundation',
        link: '/foundation',
        menuLinks: [
          {
            name: 'Color',
            link: '/foundation/color',
          },
          {
            name: 'Typography',
            link: '/foundation/typography',
          },
        ],
      },
      {
        name: 'Guidelines',
        link: '/guidelines',
        menuLinks: [
          {
            name: 'Copy',
            link: '/guidelines/copy',
            menuLinks: [
              {
                name: 'Testing',
                link: '/guidelines/copy/testing',
              },
            ],
          },
          {
            name: 'Spacing',
            link: '/guidelines/spacing',
          },
        ],
      },
      {
        name: 'Components',
        link: '/components',
        menuLinks: [
          {
            name: 'Button',
            link: '/components/button',
          },
          {
            name: 'Note',
            link: '/components/note',
          },
          {
            name: 'Table',
            link: '/components/table',
          },
          {
            name: 'TextLink',
            link: '/components/text-link',
          },
          {
            name: 'Typography',
            link: '/components/typography',
          },
        ],
      },
      {
        name: 'Resources',
        link: '/resources',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-transformer-javascript-frontmatter',
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
