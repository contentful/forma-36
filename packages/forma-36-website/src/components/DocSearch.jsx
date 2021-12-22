import React, { useEffect } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { SearchIcon } from '@contentful/f36-icons';
import { TextInput } from '@contentful/f36-forms';
import '@docsearch/css';
import docsearch from '@docsearch/js';

const styles = {
  container: css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${tokens.spacingM} 0;
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

const DocSearch = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    docsearch({
      // todo: use env variable from Vercel
      appId: '',
      // The key is added here only give access to searching the public content of the website https://docsearch.algolia.com/docs/what-is-docsearch
      // You can even check Forma 36's configuration in DocSearch's repo https://github.com/algolia/docsearch-configs/blob/master/configs/contentful_forma-36.json
      // todo: use env variable from Vercel
      apiKey: '',
      // todo: use env variable from Vercel
      indexName: 'forma-36',
      inputSelector: '#docsearch',
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <SearchIcon color="muted" />
      </div>
      <TextInput
        id="docsearch"
        name="search"
        type="text"
        placeholder="Search the docs"
        defaultValue=""
      />
    </div>
  );
};

export default DocSearch;
