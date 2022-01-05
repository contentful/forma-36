import React from 'react';
import { TextLink, Flex } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

import contentfulLogoSVG from '../resources/icons/contentful-logo.svg';

const styles = {
  footer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${tokens.spacingL} ${tokens.spacing2Xl}`,
    marginTop: tokens.spacing4Xl,
    backgroundColor: tokens.gray100,
  }),

  svg: css({
    maxHeight: '30px',
  }),
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
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
              /* eslint-disable @typescript-eslint/no-explicit-any */
              if ((window as any).Osano) {
                (window as any).Osano.cm.showDrawer();
              }
              /* eslint-enable @typescript-eslint/no-explicit-any */
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
        className={styles.svg}
      >
        <img
          alt="Contentful’s logo"
          className={styles.svg}
          src={contentfulLogoSVG.src}
        />
      </a>
    </footer>
  );
};
