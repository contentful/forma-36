const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const listOfIgnoredFiles = [
  '**/dist/**',
  '**/*.css',
  '**/*.js',
  '**/*.snap',
  '**/*.ts',
  '**/*.tsx',
  '**/*.md',
  '**/*.log',
  '**/*.json',
];

module.exports = {
  siteMetadata: {
    title: 'Forma 36 - The Contentful Design System',
    promoText: '',
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
        name: 'Integrations',
        link: '',
        menuLinks: [
          {
            name: 'React Hook Form',
            link: '/integrations/react-hook-form/',
          },
          {
            name: 'Formik',
            link: '/integrations/formik/',
          },
        ],
      },
      {
        name: 'Components',
        link: '',
        menuLinks: [
          {
            name: 'Layout Components',
            link: '',
            menuLinks: [
              {
                name: 'Box',
                link: '/components/box/',
              },
              {
                name: 'Flex',
                link: '/components/flex/',
              },
              {
                name: 'Stack',
                link: '/components/stack/',
              },
              {
                name: 'Grid',
                link: '/components/grid/',
              },
            ],
          },
          {
            name: 'Typography Components',
            link: '',
            menuLinks: [
              {
                name: 'Text',
                link: '/components/text/',
              },
              {
                name: 'Paragraph',
                link: '/components/paragraph/',
              },
              {
                name: 'Heading',
                link: '/components/heading/',
              },
              {
                name: 'SectionHeading',
                link: '/components/section-heading/',
              },
              {
                name: 'Subheading',
                link: '/components/subheading/',
              },
              {
                name: 'DisplayText',
                link: '/components/display-text/',
              },
            ],
          },
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
            name: 'Badge',
            link: '/components/badge/',
          },
          {
            name: 'Button',
            link: '/components/button/',
          },
          {
            name: 'ButtonGroup',
            link: '/components/button-group',
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
            name: 'DateTime Components',
            link: '',
            menuLinks: [
              {
                name: 'DateTime',
                link: '/components/datetime/',
              },
              {
                name: 'RelativeDateTime',
                link: '/components/relative-datetime/',
              },
              {
                name: 'Utility functions',
                link: '/components/datetime-functions/',
              },
            ],
          },
          {
            name: 'Dropdown',
            link: '/components/dropdown/',
          },
          {
            name: 'Popover',
            link: '/components/popover/',
          },
          {
            name: 'EntityList',
            link: '/components/entity-list/',
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
                name: 'Form',
                link: '/components/form/',
              },
              {
                name: 'Radio',
                link: '/components/radio/',
              },
              {
                name: 'Select',
                link: '/components/select/',
              },
              {
                name: 'Switch',
                link: '/components/switch/',
              },
              {
                name: 'TextInput',
                link: '/components/text-input/',
              },
              {
                name: 'Textarea',
                link: '/components/textarea/',
              },
            ],
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
            name: 'Modals',
            link: '',
            menuLinks: [
              {
                name: 'Modal',
                link: '/components/modal/',
              },
              {
                name: 'ModalConfirm',
                link: '/components/modal-confirm/',
              },
              {
                name: 'ModalLauncher',
                link: '/components/modal-launcher/',
              },
            ],
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
            name: 'Skeletons',
            link: '',
            menuLinks: [
              {
                name: 'SkeletonContainer',
                link: '/components/skeleton/skeleton-container/',
              },
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
            name: 'Table',
            link: '/components/table/',
          },
          {
            name: 'Tabs',
            link: '/components/tabs/',
          },
          {
            name: 'TextLink',
            link: '/components/text-link/',
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
        ignore: listOfIgnoredFiles,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve(__dirname, '../components/'),
        ignore: listOfIgnoredFiles,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve(__dirname, '../core/'),
        ignore: listOfIgnoredFiles,
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
        remarkPlugins: [require('remark-slug')],
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
