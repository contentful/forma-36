import React from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import { Text } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

const getNavLinkStyles = (isDarkMode) => ({
  navListLink: css({
    color: isDarkMode ? tokens.colorWhite : tokens.gray900,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  active: css({
    color: isDarkMode ? tokens.blue400 : tokens.blue700,
    textDecoration: 'underline',
  }),
});

export function TopbarLink({
  href,
  label,
  isActive = false,
  isDarkMode = false,
}) {
  const navLinkStyles = getNavLinkStyles(isDarkMode);
  return (
    <Link href={href} passHref>
      <Text
        as="a"
        className={cx(navLinkStyles.navListLink, {
          [navLinkStyles.active]: isActive,
        })}
        fontSize="fontSizeL"
        lineHeight="lineHeightL"
        fontWeight="fontWeightDemiBold"
        marginBottom="none"
      >
        {label}
      </Text>
    </Link>
  );
}
