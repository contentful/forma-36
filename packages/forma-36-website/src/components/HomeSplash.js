import React from 'react';
import {
  DisplayText,
  Paragraph,
  Note,
  TextLink,
} from '@contentful/forma-36-react-components';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';

const styles = {
  alphaNote: css`
    margin-bottom: ${tokens.spacingL};
  `,
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
        <Note css={styles.alphaNote} noteType="primary">
          This documentation is work in progress. Its contents are subject to
          change. Leave your feedback or get involved{' '}
          <TextLink href="https://github.com/contentful/forma-36">
            here.
          </TextLink>
        </Note>
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
