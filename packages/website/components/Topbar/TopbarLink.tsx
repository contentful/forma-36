import React from 'react';
import { css, cx } from '@emotion/css';
import { Text } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import { InternalLink } from '../InternalLink';

const styles = {
  navListLink: css({
    color: tokens.gray900,

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
    <InternalLink href={href} className={styles.navListLink}>
      <Text
        className={cx({ [styles.active]: isActive })}
        fontSize="fontSizeL"
        lineHeight="lineHeightL"
        fontWeight="fontWeightDemiBold"
        marginBottom="none"
      >
        {label}
      </Text>
    </InternalLink>
  );
}
