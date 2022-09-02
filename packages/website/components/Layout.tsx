import React from 'react';
import { css, cx } from 'emotion';
import { Grid } from '@contentful/f36-components';

import { useCurrentLocation } from '../hooks/useCurrentLocation';
import { getGridStyles, TOPBAR_HEIGHT } from '../utils/getGridStyles';
import { Topbar } from './Topbar';
import type { TopbarProps } from './Topbar';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import type { SidebarProps } from './Sidebar';
import { HARDCODED_WEBSITE_SECTION } from '../types';

const styles = {
  mainItem: css({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    height: `calc(100vh - ${TOPBAR_HEIGHT})`,
  }),
};

interface LayoutProps {
  children: React.ReactNode;
  sidebarLinks?: SidebarProps['links'];
  topbarLinks: TopbarProps['links'];
}

export function Layout({ children, sidebarLinks, topbarLinks }: LayoutProps) {
  const { currentSection, currentPage } = useCurrentLocation();
  const isPlayground = currentSection === HARDCODED_WEBSITE_SECTION.PLAYGROUND;
  const gridStyles = getGridStyles(isPlayground);

  return (
    <Grid
      className={cx(gridStyles.wrapper, gridStyles.wrapperColumns)}
      columnGap="none"
    >
      <Topbar links={topbarLinks} />

      {sidebarLinks && <Sidebar links={sidebarLinks} />}

      {/* Unique key for each page, so scroll position is not preserved when opening a new page */}
      <Grid.Item
        key={currentPage}
        area="content"
        as="main"
        className={styles.mainItem}
      >
        {children}
        {!isPlayground && <Footer />}
      </Grid.Item>
    </Grid>
  );
}
