import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { SearchIcon } from '@contentful/f36-icons';
import { TextInput } from '@contentful/f36-forms';

const DOCSEARCH_API_KEY = process.env.DOCSEARCH_API_KEY || '';
const DOCSEARCH_APP_ID = process.env.DOCSEARCH_APP_ID || '';

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
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // @ts-expect-error ignore missing docsearch
    if (typeof window.docsearch === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('DocSearch unavailable');
    } else {
      try {
        // @ts-expect-error ignore missing docsearch
        window.docsearch({
          // The key is added here only give access to searching the public content of the website https://docsearch.algolia.com/docs/what-is-docsearch
          // You can even check Forma 36's configuration in DocSearch's repo https://github.com/algolia/docsearch-configs/blob/master/configs/contentful_forma-36.json
          appId: DOCSEARCH_APP_ID,
          apiKey: DOCSEARCH_API_KEY,
          indexName: 'forma-36',
          inputSelector: '#search',
          debug: false,
        });
      } catch (e) {
        setIsFailed(true);
        console.warn('Failed to initialize Algolia search');
      }
    }
  }, []);

  if (isFailed) {
    return null;
  }

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
