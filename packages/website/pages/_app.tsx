import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles as FormaGlobalStyles } from '@contentful/f36-components';
import { GlobalStyles } from '../components/GlobalStyles';

import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FormaGlobalStyles />
      <GlobalStyles />
      <Head>
        <title>Forma 36 - The Contentful Design System</title>
        <meta
          name="description"
          content="Forma 36 is an open-source design system by Contentful created with the intent to reduce the overhead of creating UI by providing tools and guidance for digital teams building and extending Contentful products."
        />
        <meta name="keywords" content="contentful, design, design-system" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
