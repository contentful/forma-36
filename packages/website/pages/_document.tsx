import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import * as snippet from '@segment/snippet';

const { SEGMENT_WRITE_KEY } = process.env;
export default class MyDocument extends Document<{
  ids: string[];
  css: string;
}> {
  renderSnipet() {
    const opts = {
      apiKey: SEGMENT_WRITE_KEY,
      page: true,
    };

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
