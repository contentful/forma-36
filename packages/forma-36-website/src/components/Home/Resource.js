import React from 'react';
import {
  Typography,
  Subheading,
  Paragraph,
  TextLink,
} from '@contentful/forma-36-react-components';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';

const styles = {
  resource: css`
    display: flex;
  `,
  text: css`
    text-align: left;
  `,
  paragraph: css`
    font-size: ${tokens.fontSizeL};
  `,
  link: css`
    font-size: ${tokens.fontSizeL}!important;
  `,
  image: css`
    width: 80px;
    height: 80px;
    margin-right: ${tokens.spacingXl};

    img {
      display: block;
      max-width: 100%;
    }
  `,
};

const Resource = ({ title, description, imageNode, linkHref, linkText }) => (
  <article css={styles.resource}>
    <div css={styles.image}>{imageNode}</div>
    <Typography css={styles.text}>
      <Subheading>{title}</Subheading>
      <Paragraph css={styles.paragraph}>{description}</Paragraph>
      <Paragraph css={styles.paragraph}>
        <TextLink css={styles.link} href={linkHref}>
          {linkText}
        </TextLink>
      </Paragraph>
    </Typography>
  </article>
);

export default Resource;
