import React from 'react';
import { Tooltip, TextLink } from '@contentful/f36-components';

export default function WithoutTriggerWrapperTooltipExample() {
  return (
    <Tooltip
      withTriggerWrapper={false}
      content="I am rendered without an extra wrapper"
    >
      <TextLink href="/">Hover me</TextLink>
    </Tooltip>
  );
}
