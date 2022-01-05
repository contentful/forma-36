import React, { useEffect } from 'react';
import { css } from 'emotion';
// @ts-expect-error ignore missing type declarations
import docsearch from '@docsearch/js';
import tokens from '@contentful/f36-tokens';

const DOCSEARCH_API_KEY = process.env.DOCSEARCH_API_KEY || '';
const DOCSEARCH_APP_ID = process.env.DOCSEARCH_APP_ID || '';

const styles = {
  container: css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${tokens.spacingM} ${tokens.spacingM} 0;
    margin-bottom: ${tokens.spacingM};

    button {
      margin-left: 0;
      width: 280px;
    }
  `,
};

export const DocSearch = () => {
  useEffect(() => {
    try {
      docsearch({
        // The key is added here only give access to searching the public content of the website https://docsearch.algolia.com/docs/what-is-docsearch
        // You can even check Forma 36's configuration in DocSearch's repo https://github.com/algolia/docsearch-configs/blob/master/configs/contentful_forma-36.json
        appId: DOCSEARCH_APP_ID,
        apiKey: DOCSEARCH_API_KEY,
        indexName: 'forma-36',
        container: '#search-container',
        debug: false,
        placeholder: 'Search the docs',
      });
    } catch (e) {
      console.error('Failed to initialize Algolia search', e);
    }
  }, []);
  return <div className={styles.container} id="search-container" />;
};
