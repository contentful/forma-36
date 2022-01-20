import React from 'react';
import { css } from 'emotion';
import { Grid } from '@contentful/f36-components';
import { Topbar, TopbarHeight } from './Topbar';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

const styles = {
  grid: css({
    height: '100vh',
    overflow: 'hidden',
    gridTemplateAreas: `"topbar topbar"
    "sidemenu content"`,
  }),
  sidebarItem: css({
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100vh - ${TopbarHeight})`,
  }),
  mainItem: css({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    height: `calc(100vh - ${TopbarHeight})`,
  }),
};

interface Props {
  children: React.ReactNode;
  currentPage: string;
}

export function Layout({ children, currentPage }: Props) {
  return (
    <Grid
      className={styles.grid}
      columns="2fr 10fr"
      rows="auto 1fr"
      columnGap="none"
    >
      <Grid.Item area="topbar">
        <Topbar currentPage={currentPage} />
      </Grid.Item>

      <Grid.Item area="sidemenu" className={styles.sidebarItem}>
        <Sidebar currentPage={currentPage} />
      </Grid.Item>

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
