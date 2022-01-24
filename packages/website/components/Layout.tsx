import React from 'react';
import { css, cx } from 'emotion';
import { Grid } from '@contentful/f36-components';

import { useCurrentLocation } from '../hooks/useCurrentLocation';
import { getGridStyles, TOPBAR_HEIGHT } from '../utils/getGridStyles';
import { Topbar } from './Topbar';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

const styles = {
  wrapper: css({
    height: '100vh',
    overflow: 'hidden',
    gridTemplateAreas: `
      "topbar topbar"
      "sidebar content"
    `,
  }),
  mainItem: css({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    height: `calc(100vh - ${TOPBAR_HEIGHT})`,
  }),
};

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const gridStyles = getGridStyles();
  const { activeSection, currentPage } = useCurrentLocation();

  return (
    <Grid
      className={cx(styles.wrapper, gridStyles.wrapperColumns)}
      columnGap="none"
    >
      <Topbar activeSection={activeSection} />

      <Sidebar activeSection={activeSection} currentPage={currentPage} />

      {/* Unique key for each page, so scroll position is not preserved when opening a new page */}
      <Grid.Item
        key={currentPage}
        area="content"
        as="main"
        className={styles.mainItem}
      >
        {children}
        <Footer />
      </Grid.Item>
    </Grid>
  );
}
