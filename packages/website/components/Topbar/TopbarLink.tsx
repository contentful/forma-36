import React from 'react';
import { css, cx } from '@emotion/css';
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
    <Link href={href}>
      {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */}
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
