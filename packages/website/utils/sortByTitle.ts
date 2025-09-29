import type { SidebarLink, SidebarSubsection } from '../types';

export const sortByTitle = (arr: (SidebarSubsection | SidebarLink)[]) => {
  return [...arr].sort((a, b) => {
    if (!a.title || !b.title) {
      throw new Error('Cannot sort elements without a title');
    }

    return a.title.localeCompare(b.title);
  });
};
