import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import * as snippet from '@segment/snippet';

const { SEGMENT_KEY, NODE_ENV } = process.env;
export default class MyDocument extends Document<{
  ids: string[];
  css: string;
}> {
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

  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    const renderedSnippet = this.renderSnipet();

    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
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
