import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import * as snippet from '@segment/snippet';

const { ANALYTICS_WRITE_KEY, NODE_ENV } = process.env;
export default class MyDocument extends Document<{
  ids: string[];
  css: string;
}> {
  renderSnipet() {
    const opts = {
      apiKey: ANALYTICS_WRITE_KEY,
      page: true,
    };

    if (NODE_ENV === 'development') {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <script dangerouslySetInnerHTML={{ __html: this.renderSnipet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
