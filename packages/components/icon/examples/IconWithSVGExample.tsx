import * as React from 'react';
import { Icon } from '@contentful/f36-components';

export default function IconAsPropExample() {
  return (
    <Icon variant="secondary">
      <path d="M7 10l5 5 5-5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Icon>
  );
}
