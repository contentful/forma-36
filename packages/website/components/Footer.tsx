import React from 'react';
import Image from 'next/image';
import { css, cx } from '@emotion/css';

import tokens from '@contentful/f36-tokens';
import {
  TextLink,
  Flex,
  type TextLinkProps,
  Paragraph,
} from '@contentful/f36-components';

import contentfulLogoSVG from '../resources/icons/contentful-by-salesforce-logo.svg';
import { getGridStyles } from '../utils/getGridStyles';
import { ArrowSquareOutIcon } from '@contentful/f36-icons';

const styles = {
  footer: css({
    gridAutoRows: 'min-content',
    alignItems: 'flex-start',
    justifyItems: 'flex-start',
    marginTop: tokens.spacing2Xl,
    padding: tokens.spacingL,
    rowGap: tokens.spacingXl,
  }),
};

export function Footer() {
  const gridStyles = getGridStyles();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cx(
        gridStyles.contentColumns,
        gridStyles.contentColumnsBigScreens,
        styles.footer,
      )}
    >
      <Flex className={gridStyles.columnStartTwo} gap="spacing2Xl">
        <Flex flexDirection="column" alignItems="flex-start" gap="spacingM">
          <FooterLink
            href="https://github.com/contentful/forma-36"
            label="View the repo on GitHub"
          />
          <FooterLink
            href="https://www.contentful.com/developers/docs/"
            label="Join the developer community"
          />
          <FooterLink
            href="https://forms.gle/j3oC9GuhxEJ1DF4k6"
            label="Give us feedback"
          />
          <FooterLink isExternal={false} href="/whats-new" label="What's new" />
        </Flex>

        <Flex flexDirection="column" alignItems="flex-start" gap="spacingM">
          <FooterLink
            href="https://www.contentful.com/legal/"
            label="Imprint / Legal"
          />
          <FooterLink
            href="https://www.contentful.com/legal/privacy-at-contentful/privacy-notice/"
            label="Privacy"
          />
          <FooterLink
            href="https://www.contentful.com/security/"
            label="Security"
          />
          <TextLink
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              if ((window as any).Osano) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      >
        <Image
          width={140}
          height={36}
          src={contentfulLogoSVG}
          alt="Contentful’s logo"
        />
      </a>

      <Paragraph>
        © Copyright {currentYear} Salesforce, Inc.{' '}
        <TextLink
          href="https://www.salesforce.com/company/legal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          All rights reserved
        </TextLink>
        . Various trademarks held by their respective owners. <br />
        Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA
        94105, United States.
      </Paragraph>
    </footer>
  );
}

function FooterLink({ href, label, isExternal = true }) {
  const externalLinkProps = isExternal
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
        icon: <ArrowSquareOutIcon />,
        alignIcon: 'end' as TextLinkProps['alignIcon'],
      }
    : {};

  return (
    <TextLink variant="secondary" href={href} {...externalLinkProps}>
      {label}
    </TextLink>
  );
}
