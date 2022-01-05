import React, { useEffect } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { SearchIcon } from '@contentful/f36-icons';
import { TextInput } from '@contentful/f36-forms';

const styles = {
  container: css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${tokens.spacingM} ${tokens.spacingM} 0;
    margin-bottom: ${tokens.spacingM};
    & .algolia-autocomplete {
      width: 100%;
    }
  `,
};

export const DocSearch = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore ignore a complaint about dynamic import
    import('docsearch.js').then((docsearch) => {
      try {
        docsearch.default({
          // The key is added here only give access to searching the public content of the website https://docsearch.algolia.com/docs/what-is-docsearch
          // You can even check Forma 36's configuration in DocSearch's repo https://github.com/algolia/docsearch-configs/blob/master/configs/contentful_forma-36.json
          appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID || '',
          apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY || '',
          indexName: 'forma-36',
          inputSelector: '#search',
        });
      } catch (e) {
        console.error('Failed to initialize Algolia search', e);
      }
    });
  }, []);
  return (
    <div className={styles.container}>
      <TextInput
        id="search"
        icon={<SearchIcon variant="muted" />}
        name="search"
        type="text"
        placeholder="Search the docs"
        defaultValue=""
      />
    </div>
  );
};
