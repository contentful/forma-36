module.exports = {
  siteMetadata: {
    title: 'Forma 36 - The Contentful Design System',
    promoText:
      'Join the Berlin Design Coalition’s next design system event on September 3rd',
    promoLink: '#',
    promoLinkText: 'Sign up on Meetup',
    menuLinks: [
      {
        name: 'Foundation',
        link: '/foundation/',
        menuLinks: [
          {
            name: 'Color',
            link: '/foundation/color/',
          },
          {
            name: 'Typography',
            link: '/foundation/typography/',
          },
          {
            name: 'Spacing',
            link: '/foundation/spacing/',
          },
          {
            name: 'Box Shadows',
            link: '/foundation/box-shadows/',
          },
          {
            name: 'Transitions',
            link: '/foundation/transitions/',
          },
        ],
      },
      {
        name: 'Guidelines',
        link: '/guidelines/',
        menuLinks: [
          {
            name: 'Accessibility',
            link: '/guidelines/accessibility/',
          },
          {
            name: 'Copy',
            link: '/guidelines/copy/',
            menuLinks: [
              {
                name: 'Grammar',
                link: '/guidelines/copy/grammar/',
                menuLinks: [
                  {
                    name: 'Capitalization',
                    link: '/guidelines/copy/grammar/capitalization/',
                  },
                  {
                    name: 'Punctuation',
                    link: '/guidelines/copy/grammar/punctuation/',
                  },
                  {
                    name: 'Sentence structure',
                    link: '/guidelines/copy/grammar/sentence-structure/',
                  },
                  {
                    name: 'Tense',
                    link: '/guidelines/copy/grammar/tense/',
                  },
                  {
                    name: 'Word choice',
                    link: '/guidelines/copy/grammar/word-choice/',
                  },
                ],
              },
              {
                name: 'Tone of voice',
                link: '/guidelines/copy/tone-of-voice/',
              },
              {
                name: 'Frequently used verbs',
                link: '/guidelines/copy/frequently-used-verbs/',
              },
            ],
          },
          {
            name: 'Date and time',
            link: '/guidelines/date-and-time/',
          },
          {
            name: 'Layout',
            link: '/guidelines/layout/',
            menuLinks: [
              {
                name: 'Workbench',
                link: '/guidelines/layout/workbench/',
              },
            ],
          },
          {
            name: 'Keyboard shortcuts',
            link: '/guidelines/keyboard-shortcuts/',
          },
        ],
      },
      {
        name: 'Components',
        link: '/components/',
        menuLinks: [
          {
            name: 'Button',
            link: '/components/button/',
          },
          {
            name: 'FormLabel',
            link: '/components/form-label/',
          },
          {
            name: 'HelpText',
            link: '/components/help-text/',
          },
          {
            name: 'Note',
            link: '/components/note/',
          },
          {
            name: 'Table',
            link: '/components/table/',
          },
          {
            name: 'TextField',
            link: '/components/text-field/',
          },
          {
            name: 'TextInput',
            link: '/components/text-input/',
          },
          {
            name: 'TextLink',
            link: '/components/text-link/',
          },
          {
            name: 'Typography',
            link: '/components/typography/',
          },
          {
            name: 'ValidationMessage',
            link: '/components/validation-message/',
          },
        ],
      },
      {
        name: 'Resources',
        link: '/resources/',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-svgr',
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
      resolve: 'gatsby-plugin-mdx',
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
    'gatsby-plugin-emotion',
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-40725207-15',
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
