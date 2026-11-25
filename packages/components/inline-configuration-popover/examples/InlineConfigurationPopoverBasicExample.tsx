import React, { useState } from 'react';
import { FormControl, Select, Switch } from '@contentful/f36-components';
import { InlineConfigurationPopover } from '@contentful/f36-inline-configuration-popover';

export default function InlineConfigurationPopoverBasicExample() {
  const [order, setOrder] = useState('newest');
  const [allowOverride, setAllowOverride] = useState(false);

  return (
    <InlineConfigurationPopover placement="bottom-start">
      <InlineConfigurationPopover.Trigger aria-label="Edit query Related posts">
        Edit
      </InlineConfigurationPopover.Trigger>
      <InlineConfigurationPopover.Content>
        <InlineConfigurationPopover.Header
          title="Related posts"
          caption="Query, optional"
        />
        <InlineConfigurationPopover.Body>
          <FormControl marginBottom="none">
            <FormControl.Label>Order</FormControl.Label>
            <Select
              value={order}
              onChange={(event) => setOrder(event.target.value)}
            >
              <Select.Option value="newest">Newest first</Select.Option>
              <Select.Option value="oldest">Oldest first</Select.Option>
            </Select>
          </FormControl>
          <Switch
            isChecked={allowOverride}
            onChange={(event) => setAllowOverride(event.target.checked)}
          >
            Let your app override these values
          </Switch>
        </InlineConfigurationPopover.Body>
      </InlineConfigurationPopover.Content>
    </InlineConfigurationPopover>
  );
}
