import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { GlobalStyles as FormaGlobalStyles } from '@contentful/f36-components';
import { GlobalStyles } from '../components/GlobalStyles';
import { SessionProvider } from 'next-auth/react';

import '../resources/css/sandpack.css';
import { Session } from 'next-auth';

const osanoCustomerId = process.env.NEXT_PUBLIC_OSANO_CUSTOMER_ID;
const osanoConfigurationId = process.env.NEXT_PUBLIC_OSANO_CONFIGURATION_ID;
const osanoScriptUrl =
  osanoCustomerId && osanoConfigurationId
    ? `https://cmp.osano.com/${osanoCustomerId}/${osanoConfigurationId}/osano.js`
    : undefined;

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
      </Head>

      {osanoScriptUrl && (
        <Script async type="text/javascript" src={osanoScriptUrl} />
      )}

      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
