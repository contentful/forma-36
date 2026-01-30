import React from 'react';
import { css } from '@emotion/css';
import { Text } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import { InternalLink } from '../InternalLink';

const styles = {
  logoLink: css({
    display: 'flex',
    alignItems: 'center',
    color: tokens.colorWhite,
  }),
};

export function TopbarLogo() {
  return (
    <InternalLink href="/" className={styles.logoLink}>
      <Logo />
      <Text
        fontSize="fontSizeL"
        fontWeight="fontWeightDemiBold"
        fontColor="blue700"
        marginLeft="spacingS"
      >
        Forma 36
      </Text>
    </InternalLink>
  );
}

function Logo() {
  return (
    <svg
      x="0px"
      y="0px"
      width="25px"
      height="25px"
      viewBox="0 0 90 90"
      enableBackground="new 0 0 90 90"
      fill={tokens.blue700}
    >
      <circle cx="45" cy="10" r="10" />
      <circle cx="10" cy="10" r="10" />
      <circle cx="80" cy="10" r="10" />
      <circle cx="10" cy="45" r="10" />
      <circle cx="45" cy="45" r="10" />
      <circle cx="10" cy="80" r="10" />
    </svg>
  );
}
