import {
  SidebarLinkType,
  SidebarSectionType,
} from '../components/SidebarSection';

export const sortByTitle = (arr: Array<SidebarSectionType | SidebarLinkType>) =>
  [...arr].sort((a, b) => (a.title < b.title ? -1 : 1));
