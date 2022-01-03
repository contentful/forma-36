import React from 'react';
import { CopyButton } from '@contentful/f36-components';

export default function CopyButtonModifiedTooltipsExample() {
  return (
    <CopyButton
      value="Copy value"
      tooltipCopiedText="The text has been copied"
      tooltipText="Copy this text to clipboard"
      tooltipProps={{ placement: 'bottom', usePortal: true }}
    />
  );
}
