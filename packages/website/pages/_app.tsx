import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { css } from 'emotion';
import { GlobalStyles, Grid } from '@contentful/f36-components';

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
  footer: css({
    position: 'sticky',
    top: '100vh',
  }),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Forma 36 - The Contentful Design System</title>
        <meta
          name="description"
          content="Forma 36 - The Contentful Design System"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Grid
        className={styles.grid}
        columns="320px auto"
        rows="auto 1fr"
        columnGap="none"
      >
        <Grid.Item area="topbar">[TOPBAR]</Grid.Item>

        <Grid.Item area="sidemenu" className={styles.gridItem}>
          [SideMenu]
        </Grid.Item>

        <Grid.Item area="content" as="main" className={styles.gridItem}>
          <Component {...pageProps} />

          <footer className={styles.footer}>[FOOTER]</footer>
        </Grid.Item>
      </Grid>
    </>
  );
}

export default MyApp;
