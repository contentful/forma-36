import { Layout as OriginalLayout } from './Layout';

import { LayoutHeader } from './LayoutHeader';
import { LayoutBody } from './LayoutBody';
import { LayoutSidebar } from './LayoutSidebar';

type CompoundLayout = typeof OriginalLayout & {
  Header: typeof LayoutHeader;
  Body: typeof LayoutBody;
  Sidebar: typeof LayoutSidebar;
};

export const Layout = OriginalLayout as CompoundLayout;
Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;
Layout.Sidebar = LayoutSidebar;
