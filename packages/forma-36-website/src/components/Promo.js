import React from 'react';
import tokens from '@contentful/forma-36-tokens';
import { Tag } from '@contentful/forma-36-react-components';
import { Flex } from '@contentful/forma-36-react-components/dist/alpha';
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
      <Tag tagType="primary">{tagText}</Tag>
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
