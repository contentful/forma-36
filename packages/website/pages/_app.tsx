import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles as FormaGlobalStyles } from '@contentful/f36-components';
import { GlobalStyles } from '../components/GlobalStyles';
import { SessionProvider } from 'next-auth/react';

import '../resources/css/sandpack.css';
import 'docsearch.js/dist/cdn/docsearch.min.css';
import { Session } from 'next-auth';

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
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
        <meta
          name="keywords"
          content="contentful, design, design-system, react, component library"
        />
        <link rel="icon" href="/favicon.png" />
        <script
          async
          type="text/javascript"
          src="https://cmp.osano.com/16BcqiRsJId123ATa/fcd81040-24a4-4474-9a22-f295cbec8600/osano.js"
        ></script>
      </Head>

      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

// eslint-disable-next-line import/no-default-export
export default MyApp;
