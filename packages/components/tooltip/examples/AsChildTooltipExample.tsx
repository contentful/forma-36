import React from 'react';
import { Tooltip, TextLink } from '@contentful/f36-components';

export default function AsChildTooltipExample() {
  return (
    <Tooltip asChild content="I am rendered without an extra wrapper">
      <TextLink href="/">Hover me</TextLink>
    </Tooltip>
  );
}
