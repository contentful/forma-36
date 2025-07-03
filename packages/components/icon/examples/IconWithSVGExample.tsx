import * as React from 'react';
import tokens from '@contentful/f36-tokens';
import { Icon } from '@contentful/f36-icon';

export default function IconAsPropExample() {
  return (
    <Icon color={tokens.gray900}>
      <path d="M7 10l5 5 5-5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
  );
}
