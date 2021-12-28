import React from 'react';
import { css } from 'emotion';
import { Grid } from '@contentful/f36-components';
import { Topbar } from './Topbar';
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
    overflowY: 'scroll',
    overflowX: 'auto',
  }),
  mainItem: css({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  }),
};

interface Props {
  children: React.ReactNode;
  currentPage: string;
}

function Main({ children }: Props) {
  return (
    <Grid.Item area="content" as="main" className={styles.mainItem}>
      {children}
      <Footer />
    </Grid.Item>
  );
}

export function Layout({ children, currentPage }: Props) {
  return (
    <Grid
      className={styles.grid}
      columns="320px auto"
      rows="auto 1fr"
      columnGap="none"
    >
      <Grid.Item area="topbar">
        <Topbar />
      </Grid.Item>

      <Grid.Item area="sidemenu" className={styles.sidebarItem}>
        <Sidebar currentPage={currentPage} />
      </Grid.Item>

      {/* Unique key for each page, so scroll position is not preserved when opening a new page */}
      <Main key={currentPage} currentPage={currentPage}>
        {children}
      </Main>
    </Grid>
  );
}
