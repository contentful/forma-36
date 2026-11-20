import React, { useState } from 'react';
import { FormControl, TextInput } from '@contentful/f36-components';
import { InlineConfigurationPopover } from '@contentful/f36-inline-configuration-popover';

export default function InlineConfigurationPopoverDraggableExample() {
  const [limit, setLimit] = useState('3');

  return (
    <InlineConfigurationPopover isDraggable placement="right-start">
      <InlineConfigurationPopover.Trigger aria-label="Override parameter Limit">
        Override
      </InlineConfigurationPopover.Trigger>
      <InlineConfigurationPopover.Content>
        <InlineConfigurationPopover.Header
          title="Limit"
          caption="Number, optional"
        />
        <InlineConfigurationPopover.Body>
          <FormControl marginBottom="none">
            <FormControl.Label>Number of items</FormControl.Label>
            <TextInput
              type="number"
              size="small"
              value={limit}
              onChange={(event) => setLimit(event.target.value)}
            />
          </FormControl>
        </InlineConfigurationPopover.Body>
      </InlineConfigurationPopover.Content>
    </InlineConfigurationPopover>
  );
}
