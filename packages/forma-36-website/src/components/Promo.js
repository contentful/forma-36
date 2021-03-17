import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Badge, Flex } from '@contentful/f36-components';
import { css } from '@emotion/core';

const styles = {
  promo: css`
    background-color: #f36;
    color: #fff;
    padding: ${tokens.spacingXs};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${tokens.fontSizeM};
    font-weight: ${tokens.fontWeightMedium};
  `,
  link: css`
    margin-left: ${tokens.spacingS};
    color: #fff;
  `,
};

const Promo = ({ text, linkText, linkHref, tagText }) => (
  <div css={styles.promo}>
    <Flex marginRight="spacingXs">
      <Badge variant="primary">{tagText}</Badge>
    </Flex>
    {text}
    {linkHref && (
      <a
        href={linkHref}
        css={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
      </a>
    )}
  </div>
);

export default Promo;
