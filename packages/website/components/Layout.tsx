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
  gridItem: css({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  }),
};

export function Layout({ children }) {
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

      <Grid.Item area="sidemenu" className={styles.gridItem}>
        <Sidebar />
      </Grid.Item>

      <Grid.Item area="content" as="main" className={styles.gridItem}>
        {children}
        <Footer />
      </Grid.Item>
    </Grid>
  );
}
