import React from 'react';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const styles = {
  promo: css`
    background-color: #f36;
    color: #fff;
    padding: ${tokens.spacingXs};
    display: flex;
    justify-content: center;
    font-size: ${tokens.fontSizeM};
    font-weight: ${tokens.fontWeightMedium};
  `,
  new: css`
    background-color: #fff;
    display: flex;
    color: ${tokens.colorTextDark};
    align-items: center;
    font-weight: ${tokens.fontWeightDemiBold};
    text-transform: uppercase;
    border-radius: 2px;
    padding: 0 ${tokens.spacingS};
    margin-right: ${tokens.spacingS};
    font-size: ${tokens.fontSizeS};
  `,
  link: css`
    margin-left: ${tokens.spacingS};
    color: #fff;
  `,
};

const Promo = ({ text, linkText, linkHref }) => (
  <div css={styles.promo}>
    <span css={styles.new}>New</span> {text}
    {linkHref && (
      <a href={linkHref} css={styles.link}>
        {linkText}
      </a>
    )}
  </div>
);

export default Promo;
