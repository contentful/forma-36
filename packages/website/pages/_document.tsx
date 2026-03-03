import React from 'react';
import Document, {
  type DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import * as snippet from '@segment/snippet';
import { renderStatic } from '../utils/renderer';

const { NEXT_PUBLIC_SEGMENT_API_KEY, NODE_ENV } = process.env;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const { css, ids } = await renderStatic(initialProps.html);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </React.Fragment>
      ),
    };
  }

  renderSnippet() {
    const opts = {
      apiKey: NEXT_PUBLIC_SEGMENT_API_KEY,
      page: true,
    };

    if (NODE_ENV === 'production') {
      return snippet.min(opts);
    }

    return '';
  }

  render() {
    const renderedSnippet = this.renderSnippet();

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
