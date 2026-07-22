import { Layout as OriginalLayout } from './Layout';

import { LayoutHeader } from './LayoutHeader';
import { LayoutBody } from './LayoutBody';
import { LayoutSidebar } from './LayoutSidebar';
import { LayoutHeaderInner } from './LayoutHeaderInner/LayoutHeaderInner';

type CompoundLayout = typeof OriginalLayout & {
  Header: typeof LayoutHeader;
  HeaderInner: typeof LayoutHeaderInner;
  Body: typeof LayoutBody;
  Sidebar: typeof LayoutSidebar;
};

export const Layout = OriginalLayout as CompoundLayout;
Layout.Header = LayoutHeader;
Layout.HeaderInner = LayoutHeaderInner;
Layout.Body = LayoutBody;
Layout.Sidebar = LayoutSidebar;
