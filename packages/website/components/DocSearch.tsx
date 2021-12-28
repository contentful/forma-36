import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { SearchIcon } from '@contentful/f36-icons';
import { TextInput } from '@contentful/f36-forms';

const styles = {
  container: css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${tokens.spacingM} ${tokens.spacingM} 0;
    margin-bottom: ${tokens.spacingM};

    & .algolia-autocomplete {
      width: 100%;
    }
  `,
  icon: css`
    position: absolute;
    right: 0;
    display: flex;
    margin-right: ${tokens.spacingL};
    z-index: 1000;
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
          apiKey: process.env.DOCSEARCH_API_KEY || 'invalid_token',
          indexName: 'forma-36',
          inputSelector: '#search',
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
      <div className={styles.icon}>
        <SearchIcon variant="muted" />
      </div>
      <TextInput
        id="search"
        name="search"
        type="text"
        placeholder="Search the docs"
        defaultValue=""
      />
    </div>
  );
};
