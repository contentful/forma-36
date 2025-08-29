import React from 'react';
import Image from 'next/image';
import { css, cx } from 'emotion';

import tokens from '@contentful/f36-tokens';
import { TextLink, Flex, type TextLinkProps } from '@contentful/f36-components';

import contentfulLogoSVG from '../resources/icons/contentful-logo.svg';
import { getGridStyles } from '../utils/getGridStyles';
import { ArrowSquareOutIcon } from '@contentful/f36-icons';

const styles = {
  footer: css({
    gridAutoRows: 'min-content',
    alignItems: 'flex-start',
    justifyItems: 'flex-start',
    marginTop: tokens.spacing2Xl,
    padding: tokens.spacingL,
  }),
};

export function Footer() {
  const gridStyles = getGridStyles();

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
            href="https://www.contentful.com/developers/"
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
      >
        <Image
          width={120}
          height={25}
          src={contentfulLogoSVG}
          alt="Contentful’s logo"
        />
      </a>
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
