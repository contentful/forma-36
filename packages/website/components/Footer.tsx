import React from 'react';
import { TextLink, Flex } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/core';
import Link from 'next/link';
import contentfulLogoSVG from '../resources/icons/contentful-logo.svg';
import { ExternalLinkIcon } from '@contentful/f36-icons';

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
        <Flex flexDirection="column" marginRight="spacing2Xl">
          <Flex marginRight="spacingL" marginBottom="spacingM">
            <Link href="/playground" passHref>
              <TextLink
                href="/playground"
                variant="secondary"
                alignIcon="end"
              >
                Playground
              </TextLink>
            </Link>
          </Flex>
          <Flex marginRight="spacingL" marginBottom="spacingM">
            <TextLink
              variant="secondary"
              href="https://github.com/contentful/forma-36"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLinkIcon />}
              alignIcon="end"
            >
              View the repo on GitHub
            </TextLink>
          </Flex>

          <Flex marginRight="spacingL" marginBottom="spacingM">
            <TextLink
              variant="secondary"
              href="https://medium.com/contentful-design"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLinkIcon />}
              alignIcon="end"
            >
              Contentful desing blog
            </TextLink>
          </Flex>

          <Flex marginRight="spacingL" marginBottom="spacingM">
            <TextLink
              variant="secondary"
              href="https://www.contentful.com/developers/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLinkIcon />}
              alignIcon="end"
            >
              Join the developer comunnity
            </TextLink>
          </Flex>

          <Flex>
            <TextLink
              href="https://forms.gle/qC7LLbiy4CcF5HPLA"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLinkIcon />}
              alignIcon="end"
            >
              Give us feedback
            </TextLink>
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Flex marginRight="spacingL" marginBottom="spacingM">
            <TextLink
              variant="secondary"
              href="https://www.contentful.com/legal/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLinkIcon />}
              alignIcon="end"
            >
              Imprint / Legal
            </TextLink>
          </Flex>

          <Flex marginRight="spacingL" marginBottom="spacingM">
            <TextLink
              variant="secondary"
              href="https://www.contentful.com/legal/privacy-at-contentful/privacy-notice/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLinkIcon />}
              alignIcon="end"
            >
              Privacy
            </TextLink>
          </Flex>

          <Flex marginRight="spacingL" marginBottom="spacingM">
            <TextLink
              variant="secondary"
              href="https://www.contentful.com/security/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLinkIcon />}
              alignIcon="end"
            >
              Security
            </TextLink>
          </Flex>

          <Flex>
            <TextLink
              variant="secondary"
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
