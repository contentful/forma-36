import React from 'react';
import { css, cx } from 'emotion';
import Link from 'next/link';
import { Text } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

const styles = {
  navListLink: css({
    color: tokens.gray900,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  active: css({
    color: tokens.blue700,
    textDecoration: 'underline',
  }),
};

export function TopbarLink({ href, label, isActive = false }) {
  return (
    <Link href={href} passHref>
      <Text
        as="a"
        className={cx(styles.navListLink, { [styles.active]: isActive })}
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
