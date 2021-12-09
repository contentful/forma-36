import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '@contentful/f36-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
