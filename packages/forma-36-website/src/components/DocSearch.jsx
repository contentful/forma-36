import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import { TextInput, Icon } from '@contentful/forma-36-react-components';

const styles = {
  container: css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: ${tokens.spacingXs};

    & .algolia-autocomplete {
      width: 100%;
    }
  `,
  icon: css`
    position: absolute;
    right: 0;
    display: flex;
    margin-right: ${tokens.spacingXs};
    z-index: 1000;
  `,
};

const DocSearch = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (typeof window.docsearch === 'undefined') {
      console.error('DocSearch unavailable');
    }

    window.docsearch({
      apiKey: process.env.DOCSEARCH_API_KEY,
      indexName: 'contentful_forma-36',
      inputSelector: '#search',
      debug: false, // optional attr to be used for dropdown debugging ( if 'true' it never closes the dropdown)
    });
  }, []);

  return (
    <div css={styles.container}>
      <div css={styles.icon}>
        <Icon icon="Search" color="muted" />
      </div>
      <TextInput
        id="search"
        name="search"
        type="text"
        placeholder='Search the docs (Press "/" to focus)'
        value=""
      />
    </div>
  );
};

export default DocSearch;
