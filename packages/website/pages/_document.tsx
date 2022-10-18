import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as snippet from '@segment/snippet';

const { SEGMENT_KEY, NODE_ENV } = process.env;
export default class MyDocument extends Document {
  renderSnipet() {
    const opts = {
      apiKey: SEGMENT_KEY,
      page: true,
    };

    if (NODE_ENV === 'production') {
      return snippet.min(opts);
    }

    return '';
  }

  render() {
    const renderedSnippet = this.renderSnipet();

    return (
      <Html lang="en">
        <Head>
          {renderedSnippet && (
            <script dangerouslySetInnerHTML={{ __html: renderedSnippet }} />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
