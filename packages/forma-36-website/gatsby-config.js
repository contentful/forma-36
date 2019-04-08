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
                name: 'Grammar',
                link: '/guidelines/copy/grammar',
                menuLinks: [
                  {
                    name: 'Capitalization',
                    link: '/guidelines/copy/grammar/capitalization',
                  },
                  {
                    name: 'Punctuation',
                    link: '/guidelines/copy/grammar/punctuation',
                  },
                  {
                    name: 'Sentence structure',
                    link: '/guidelines/copy/grammar/sentence-structure',
                  },
                  {
                    name: 'Tense',
                    link: '/guidelines/copy/grammar/tense',
                  },
                  {
                    name: 'Word choice',
                    link: '/guidelines/copy/grammar/word-choice',
                  },
                ],
              },
              {
                name: 'Tone of voice',
                link: '/guidelines/copy/tone-of-voice',
              },
              {
                name: 'Frequently used verbs',
                link: '/guidelines/copy/frequently-used-verbs',
              },
              {
                name: 'Component examples',
                link: '/guidelines/copy/component-examples',
              },
              {
                name: 'Suggested reading',
                link: '/guidelines/copy/suggested-reading',
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
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              sizeByPixelDensity: true,
            },
          },
        ],
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
