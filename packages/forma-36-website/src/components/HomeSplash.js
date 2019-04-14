import React from 'react';
import { DisplayText, Heading } from '@contentful/forma-36-react-components';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';

const styles = {
  homeSplash: css`
    background: ${tokens.colorContrastLight};
    padding: ${tokens.spacing4Xl} 0;
  `,

  title: css`
    color: ${tokens.colorWhite};
  `,

  inner: css`
    width: 960px;
    margin: 0 auto;
    padding: 0 ${tokens.spacingL};
  `,
};

const HomeSplash = () => (
  <header css={styles.homeSplash}>
    <div css={styles.inner}>
      <div>
        <DisplayText size="large" css={styles.title}>
          Forma 36
        </DisplayText>

        <Heading css={styles.title}>The Contentful design system</Heading>
      </div>
    </div>
  </header>
);

export default HomeSplash;
