import React from 'react';
import { DisplayText, Paragraph } from '@contentful/forma-36-react-components';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';

const styles = {
  homeSplash: css`
    background: ${tokens.colorContrastLight};
    padding: 8rem 0;
  `,

  title: css`
    color: ${tokens.colorWhite};
  `,

  strapline: css`
    color: ${tokens.colorWhite};
    font-size: ${tokens.fontSizeL};
    max-width: 35rem;
    margin-top: ${tokens.spacingXs};
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

        <Paragraph css={styles.strapline}>
          A design system by Contentful that intends to reduce the overhead of
          creating UI by providing tools and guidance for digital teams
        </Paragraph>
      </div>
    </div>
  </header>
);

export default HomeSplash;
