import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import tokens from '@contentful/forma-36-tokens';
import { TextInput, Icon } from '@contentful/forma-36-react-components';

const styles = {
  container: css`
    display: flex;
    align-items: center;
    max-width: 500px;
    width: 100%;

    & .algolia-autocomplete {
      width: 100%;
    }
  `,
  icon: css`
    display: flex;
    align-items: center;
    margin-right: ${tokens.spacingXs};
  `,
};

const Docsearch = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

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
        <Icon icon="Search" size="large" color="white" />
      </div>
      <TextInput
        id="search"
        name="search"
        type="search"
        placeholder='Search the docs (Press "/" to focus)'
      />
    </div>
  );
};

export default Docsearch;
