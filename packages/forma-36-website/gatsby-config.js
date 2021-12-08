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
    promoText: 'This is version 4 beta of Forma 36',
    promoLink: 'https://v3.f36.contentful.com/',
    promoLinkText: 'Go back to last stable version 3',
    promoTagText: '',
    menuLinks: [
      {
        name: 'Getting started',
        link: '/getting-started',
      },
      {
        name: 'Contributing to Forma 36',
        link: '/contributing',
      },
      {
        name: 'Migration guide',
        link: '/migration-v3-to-v4',
      },
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
            name: 'DragHandle',
            link: '/components/drag-handle',
          },
          {
            name: 'Dropdown',
            link: '/deprecated-components/dropdown/',
          },
          {
            name: 'EditorToolbar',
            link: '/deprecated-components/editor-toolbar',
            status: 'deprecated',
          },
          {
            name: 'EmptyState',
            link: '/deprecated-components/empty-state',
          },
          {
            name: 'EntityList',
            link: '/components/entity-list/',
          },
          {
            name: 'Form Components',
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
                name: 'FormControl',
                link: '/components/form-control/',
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
            name: 'GlobalStyles',
            link: '/components/globalstyles',
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
            link: '/deprecated-components/illustration/',
          },
          {
            name: 'InViewport',
            link: '/deprecated-components/in-viewport/',
          },
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
            name: 'List',
            link: '/components/list/',
          },
          {
            name: 'Menu',
            link: '/components/menu/',
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
            name: 'Popover',
            link: '/components/popover/',
          },
          {
            name: 'ScreenReaderOnly',
            link: '/components/screen-reader-only/',
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
            name: 'TabFocusTrap',
            link: '/deprecated-components/tab-focus-trap/',
          },
          {
            name: 'Tag',
            link: '/deprecated-components/tag',
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
            name: 'Typography Components',
            link: '',
            menuLinks: [
              {
                name: 'Typography Component',
                link: '/deprecated-components/typography/',
              },
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
            name: 'Workbench',
            link: '/components/workbench/',
          },
        ],
      },
      {
        name: 'Utils',
        link: '',
        menuLinks: [
          {
            name: 'getStringMatch',
            link: '/utils/get-string-match/',
          },
          {
            name: 'Portal',
            link: '/utils/portal/',
          },
          {
            name: 'useKeyboard',
            link: '/utils/use-keyboard/',
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
        apiKey: 'b2d52e13b82ba7aec7311691be4961c4',
        indexName: 'forma-36',
        inputSelector: '#search',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
