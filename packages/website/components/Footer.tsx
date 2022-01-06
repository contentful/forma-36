import React from 'react';
import { TextLink, Flex } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/core';

import contentfulLogoSVG from '../resources/icons/contentful-logo.svg';

const styles = {
  footer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${tokens.spacingL} ${tokens.spacing2Xl};
    margin-top: ${tokens.spacing2Xl};
    background-color: ${tokens.gray100};
  `,

  svg: css`
    height: 30px;
    width: auto;
  `,
};

export const Footer = () => {
  return (
    <footer css={styles.footer}>
      <Flex>
        <Flex marginRight="spacingL">
          <TextLink
            href="https://www.contentful.com/legal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Imprint / Legal
          </TextLink>
        </Flex>

        <Flex marginRight="spacingL">
          <TextLink
            href="https://www.contentful.com/legal/privacy-at-contentful/privacy-notice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </TextLink>
        </Flex>

        <Flex marginRight="spacingL">
          <TextLink
            href="https://www.contentful.com/security/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Security
          </TextLink>
        </Flex>

        <Flex>
          <TextLink
            onClick={(e) => {
              e.preventDefault();
              if ((window as any).Osano) {
                (window as any).Osano.cm.showDrawer();
              }
            }}
          >
            Cookie Preferences
          </TextLink>
        </Flex>
      </Flex>

      <a
        href="https://www.contentful.com"
        target="_blank"
        rel="noopener noreferrer"
        css={styles.svg}
      >
        <img
          alt="Contentful’s logo"
          css={styles.svg}
          src={contentfulLogoSVG.src}
        />
      </a>
    </footer>
  );
};
