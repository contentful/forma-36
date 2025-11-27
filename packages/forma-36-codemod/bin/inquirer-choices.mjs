export const PARSER_CHOICES = [
  {
    name: 'JavaScript',
    value: 'babel',
  },
  {
    name: 'TypeScript',
    value: 'tsx',
  },
];

export const SETUP_CHOICES = [
  {
    name: 'v6-popper: Update changed placement and offset properties of Popover, Menu and Tooltip after migration from react-popper to floating-ui',
    short: 'Update popover',
    value: 'v6/popover',
  },
  {
    name: 'v6-menu: Update usage on codebase. This will replace the deprecated Submenu compound component with Menu.',
    short: 'Update menu',
    value: 'v6/menu',
  },
  {
    name: 'v6-skeleton: Update usage on codebase. It will remove deprecated PropTypes for SkeletonDisplayTextProps and SkeletonBodyTextProps and replace them with SkeletonTextProps',
    short: 'Update skeleton',
    value: 'v6/skeleton',
  },
  {
    name: 'v5-icons: Update package json with new icon package and update usage on codebase.',
    short: 'Update icons',
    value: 'v5/icons',
  },
];
