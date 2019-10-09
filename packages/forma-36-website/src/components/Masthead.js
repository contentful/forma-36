import React from 'react';
import { DisplayText, Paragraph } from '@contentful/forma-36-react-components';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';

const styles = {
  masthead: css`
    display: flex;
    justify-content: center;
    background-color: ${tokens.colorPrimary};
    text-align: center;
    padding: ${tokens.spacing3Xl} 0;
  `,
  content: css`
    width: 28rem;
  `,
  title: css`
    color: #fff;
  `,
  description: css`
    font-size: ${tokens.fontSizeL};
    color: #fff;
  `,
  logo: css`
    margin-bottom: ${tokens.spacingXl};
  `,
};

const Logo = () => (
  <svg
    x="0px"
    y="0px"
    width="64px"
    height="64px"
    viewBox="0 0 90 90"
    enable-background="new 0 0 90 90"
    css={styles.logo}
  >
    <circle fill="#ffffff" cx="45" cy="10" r="10" />
    <circle fill="#ffffff" cx="10" cy="10" r="10" />
    <circle fill="#ffffff" cx="80" cy="10" r="10" />
    <circle fill="#ffffff" cx="10" cy="45" r="10" />
    <circle fill="#ffffff" cx="45" cy="45" r="10" />
    <circle fill="#ffffff" cx="10" cy="80" r="10" />
  </svg>
);

const Masthead = ({ title, description, hasLogo }) => (
  <div css={styles.masthead}>
    <div css={styles.content}>
      {hasLogo && <Logo />}
      <DisplayText size="large" css={styles.title}>
        {title}
      </DisplayText>
      {description && (
        <Paragraph css={styles.description}>{description}</Paragraph>
      )}
    </div>
  </div>
);

export default Masthead;
