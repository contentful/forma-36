export type ComponentStatus = 'stable' | 'beta' | 'alpha' | 'deprecated';

export interface FrontMatter {
  github?: string;
  section?: string;
  slug?: string;
  status?: ComponentStatus;
  title: string;
  type?: string;
  typescript?: string;
  storybook?: string;
}

/**
 * Enum helper for parts of the website that have hardcoded navigation behaviour
 */
export enum HARDCODED_WEBSITE_SECTION {
  COMPONENTS = 'components',
  PLAYGROUND = 'playground',
  TOKENS = 'tokens',
  WHATS_NEW = 'whats-new',
  UTILS = 'utils',
  HOOKS = 'hooks',
  INTEGRATIONS = 'integrations',
}

/**
 * Helper for checking whether an object from GraphQL should be rendered as
 * a sidebar link
 */
const sidebarLinkObjectTypes = ['link', 'KbAppLink', 'KbAppArticle'] as const;
type SidebarLinkObjectType = (typeof sidebarLinkObjectTypes)[number];

export type SidebarLink = {
  title: string;
  slug: string;
  type?: SidebarLinkObjectType;
  isNew?: boolean;
  status?: ComponentStatus;
  authProtected?: boolean;
};

export type SidebarSubsection = {
  title: string;
  links: SidebarLink[];
  type: 'subsection';
  authProtected?: never;
};

export type SidebarSection =
  | SidebarSubsection
  | {
      title?: string;
      links: (SidebarLink | SidebarSubsection)[];
      type?: never;
      authProtected?: boolean;
    };
