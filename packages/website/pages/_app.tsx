import React from 'react';
import type { AppProps } from 'next/app';
import { css } from 'emotion';
import { GlobalStyles, Grid } from '@contentful/f36-components';

const styles = {
  grid: css({
    height: '100vh',
    overflow: 'hidden',
  }),
  gridItem: css({
    overflow: 'auto',
  }),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Grid className={styles.grid} columns="320px auto" columnGap="none">
        <Grid.Item columnStart={1} columnEnd={3}>
          [TOPBAR]
        </Grid.Item>

        <Grid.Item className={styles.gridItem}>[SideMenu]</Grid.Item>

        <Grid.Item as="main" className={styles.gridItem}>
          <Component {...pageProps} />

          <footer>[FOOTER]</footer>
        </Grid.Item>
      </Grid>
    </>
  );
}

export default MyApp;
