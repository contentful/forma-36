const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Forma 36 - The Contentful Design System',
    promoText: ``,
    promoLink: '',
    promoLinkText: '',
    promoTagText: '',
    menuLinks: [
      {
        name: 'Foundation',
        link: '',
        menuLinks: [
          {
            name: 'Color system',
            link: '/foundation/color-system/',
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
                name: 'UX writing principles',
                link: '/guidelines/copy/ux-writing-principles/',
              },
              {
                name: 'Grammar and rules',
                link: '/guidelines/copy/grammar-and-rules/',
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
            name: 'Accordion',
            link: '/components/accordion/',
          },
          {
            name: 'Asset',
            link: '/components/asset/',
          },
          {
            name: 'Autocomplete',
            link: '/components/autocomplete/',
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
            name: 'CopyButton',
            link: '/components/copy-button/',
          },
          {
            name: 'DateTime',
            link: '/components/date-time/',
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
            name: 'Flex',
            link: '/components/flex/',
          },
          {
            name: 'Form Elements',
            link: '',
            menuLinks: [
              {
                name: 'Checkbox',
                link: '/components/checkbox/',
              },
              {
                name: 'CheckboxField',
                link: '/components/checkbox-field/',
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
                name: 'RadioButton',
                link: '/components/radio-button/',
              },
              {
                name: 'RadioButtonField',
                link: '/components/radio-button-field/',
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
                name: 'Textarea',
                link: '/components/textarea/',
              },
            ],
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
            name: 'Illustration',
            link: '/components/illustration/',
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
            name: 'ProductIcon',
            link: '/components/product-icon/',
          },
          {
            name: 'Skeletons',
            link: '',
            menuLinks: [
              {
                name: 'SkeletonBodyText',
                link: '/components/skeleton/skeleton-body-text/',
              },
              {
                name: 'SkeletonDisplayText',
                link: '/components/skeleton/skeleton-display-text/',
              },
              {
                name: 'SkeletonImage',
                link: '/components/skeleton/skeleton-image/',
              },
              {
                name: 'SkeletonRow',
                link: '/components/skeleton/skeleton-row/',
              },
            ],
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
            name: 'Tabs',
            link: '/components/tabs/',
          },
          {
            name: 'Tag',
            link: '/components/tag/',
          },
          {
            name: 'ToggleButton',
            link: '/components/toggle-button/',
          },
          {
            name: 'Tooltip',
            link: '/components/tooltip/',
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
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve(
          __dirname,
          '../forma-36-react-components/src/components/',
        ),
        ignore: ['**/*.css', '**/*.js', '**/*.snap', '**/*.ts', '**/*.tsx'],
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
        // You can even check Forma 36's configuration in DocSearch's repo https://github.com/algolia/docsearch-configs/blob/master/configs/contentful_forma-36.json
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
