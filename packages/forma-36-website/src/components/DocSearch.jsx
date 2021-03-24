import React, { useEffect } from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { TextInput, Icon } from '@contentful/f36-components';

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

    if (typeof window.docsearch === 'undefined') {
      // eslint-disable-next-line no-console
      console.error('DocSearch unavailable');
    }

    window.docsearch({
      // The key is added here only give access to searching the public content of the website https://docsearch.algolia.com/docs/what-is-docsearch
      // You can even check Forma36's configuration in DocSearch's repo https://github.com/algolia/docsearch-configs/blob/master/configs/contentful_forma-36.json
      apiKey: 'b7d2cac8e38b0903385db259b042c66c',
      indexName: 'contentful_forma-36',
      inputSelector: '#search',
      debug: false, // optional attr to be used for dropdown debugging ( if 'true' it never closes the dropdown)
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon icon="Search" color="muted" />
      </div>
      <TextInput
        id="search"
        name="search"
        type="text"
        placeholder="Search the docs"
        value=""
      />
    </div>
  );
};

export default DocSearch;
