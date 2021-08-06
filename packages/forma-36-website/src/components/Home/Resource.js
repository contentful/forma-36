import React from 'react';
import { Subheading, Paragraph } from '@contentful/f36-components';
import { TextLink } from '@contentful/f36-text-link';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

const styles = {
  resource: css`
    display: flex;
  `,
  text: css`
    text-align: left;
    flex: 1;
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
  <article className={styles.resource}>
    <div className={styles.image}>{imageNode}</div>
    <div className={styles.text}>
      <Subheading>{title}</Subheading>
      <Paragraph className={styles.paragraph}>{description}</Paragraph>
      <Paragraph className={styles.paragraph}>
        <TextLink
          className={styles.link}
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </TextLink>
      </Paragraph>
    </div>
  </article>
);

export default Resource;
