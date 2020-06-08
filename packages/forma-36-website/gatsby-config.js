module.exports = {
  siteMetadata: {
    title: 'Forma 36 - The Contentful Design System',
    promoText: '',
    promoLink: '',
    promoLinkText: '',
    menuLinks: [
      {
        name: 'Foundation',
        link: '',
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
          {
            name: 'Z-Index',
            link: '/foundation/z-index/',
          },
        ],
      },
      {
        name: 'Guidelines',
        link: '',
        menuLinks: [
          {
            name: 'Accessibility',
            link: '/guidelines/accessibility/',
          },
          {
            name: 'Copy',
            link: '',
            menuLinks: [
              {
                name: 'Introduction',
                link: '/guidelines/copy/introduction/',
              },
              {
                name: 'Grammar',
                link: '',
                menuLinks: [
                  {
                    name: 'Introduction',
                    link: '/guidelines/copy/grammar/introduction/',
                  },
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
            link: '',
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
        link: '',
        menuLinks: [
          {
            name: 'Asset',
            link: '/components/asset/',
          },
          {
            name: 'Button',
            link: '/components/button/',
          },
          {
            name: 'Card',
            link: '/components/card/',
          },
          {
            name: 'Checkbox',
            link: '/components/checkbox/',
          },
          {
            name: 'Dropdown',
            link: '/components/dropdown/',
          },
          {
            name: 'EditorToolbar',
            link: '/components/editor-toolbar/',
          },
          {
            name: 'EmptyState',
            link: '/components/empty-state/',
          },
          {
            name: 'EntityList',
            link: '/components/entity-list/',
          },
          {
            name: 'Form',
            link: '/components/form/',
          },
          {
            name: 'FormLabel',
            link: '/components/form-label/',
          },
          {
            name: 'Grid',
            link: '/components/grid/',
          },
          {
            name: 'HelpText',
            link: '/components/help-text/',
          },
          {
            name: 'Icon',
            link: '/components/icon/',
          },
          {
            name: 'IconButton',
            link: '/components/icon-button/',
          },
          {
            name: 'List',
            link: '/components/list/',
          },
          {
            name: 'Modal',
            link: '/components/modal/',
          },
          {
            name: 'Note',
            link: '/components/note/',
          },
          {
            name: 'Notification',
            link: '/components/notification/',
          },
          {
            name: 'Pill',
            link: '/components/pill/',
          },
          {
            name: 'RadioButton',
            link: '/components/radio-button/',
          },
          {
            name: 'Select',
            link: '/components/select/',
          },
          {
            name: 'SelectField',
            link: '/components/select-field/',
          },
          {
            name: 'Skeleton',
            link: '/components/skeleton/',
          },
          {
            name: 'Spinner',
            link: '/components/spinner/',
          },
          {
            name: 'Switch',
            link: '/components/switch/',
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
          {
            name: 'Workbench',
            link: '/components/workbench/',
          },
        ],
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
              maxWidth: 912,
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
    {
      resolve: `gatsby-plugin-algolia-docsearch`,
      options: {
        // The key is added here only give access to searching the public content of the website https://docsearch.algolia.com/docs/what-is-docsearch
        // You can even check Forma36's configuration in DocSearch's repo https://github.com/algolia/docsearch-configs/blob/master/configs/contentful_forma-36.json
        apiKey: 'b7d2cac8e38b0903385db259b042c66c',
        indexName: 'contentful_forma-36',
        inputSelector: '#search',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
