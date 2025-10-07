import React from 'react';
import { Tooltip, Button } from '@contentful/f36-components';

export default function ButtonWithTooltipExample() {
  return (
    <Tooltip placement="top" id="tooltip-1" content="This feature is disabled.">
      <Button isDisabled>Update</Button>
    </Tooltip>
  );
}
