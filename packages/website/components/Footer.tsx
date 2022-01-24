import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { css, cx } from 'emotion';
import { TextLink, Flex, TextLinkProps } from '@contentful/f36-components';
import { ExternalLinkIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

import contentfulLogoSVG from '../resources/icons/contentful-logo.svg';
import { getGridStyles } from '../utils/getGridStyles';

const styles = {
  footer: css({
    gridAutoRows: 'min-content',
    alignItems: 'flex-start',
    marginTop: tokens.spacing2Xl,
    backgroundColor: tokens.gray100,
    padding: tokens.spacingL,
  }),
  logo: css({ justifySelf: 'flex-end' }),
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
          <Link href="/playground" passHref>
            <FooterLink
              href="/playground"
              label="Playground"
              isExternal={false}
            />
          </Link>
          <FooterLink
            href="https://github.com/contentful/forma-36"
            label="View the repo on GitHub"
          />
          <FooterLink
            href="https://www.contentful.com/developers/"
            label="Join the developer comunnity"
          />
          <FooterLink
            href="https://forms.gle/qC7LLbiy4CcF5HPLA"
            label="Give us feedback"
          />
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
        className={styles.logo}
      >
        <Image src={contentfulLogoSVG} alt="Contentful’s logo" />
      </a>
    </footer>
  );
}

function FooterLink({ href, label, isExternal = true }) {
  const externalLinkProps = isExternal
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
        icon: <ExternalLinkIcon />,
        alignIcon: 'end' as TextLinkProps['alignIcon'],
      }
    : {};

  return (
    <TextLink variant="secondary" href={href} {...externalLinkProps}>
      {label}
    </TextLink>
  );
}
