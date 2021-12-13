import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { css } from 'emotion';
import { GlobalStyles, Grid } from '@contentful/f36-components';

const styles = {
  grid: css({
    height: '100vh',
    overflow: 'hidden',
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
        rows="50px auto"
        columnGap="none"
      >
        <Grid.Item columnStart={1} columnEnd={3}>
          [TOPBAR]
        </Grid.Item>

        <Grid.Item className={styles.gridItem}>[SideMenu]</Grid.Item>

        <Grid.Item className={styles.gridItem}>
          <Component {...pageProps} />

          <footer className={styles.footer}>[FOOTER]</footer>
        </Grid.Item>
      </Grid>
    </>
  );
}

export default MyApp;
