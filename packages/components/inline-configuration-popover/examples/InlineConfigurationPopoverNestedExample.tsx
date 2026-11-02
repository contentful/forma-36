import React, { useState } from 'react';
import { Button, FormControl, Menu, Select } from '@contentful/f36-components';
import { InlineConfigurationPopover } from '@contentful/f36-inline-configuration-popover';
import { CaretDownIcon } from '@contentful/f36-icons';

export default function InlineConfigurationPopoverNestedExample() {
  const [contentType, setContentType] = useState('blogPost');
  const [field, setField] = useState('Slug');
  const fields = ['Slug', 'Title', 'Entry ID'];

  return (
    <InlineConfigurationPopover placement="bottom-start">
      <InlineConfigurationPopover.Trigger>
        <Button size="small" aria-label="Edit parameter Blog post">
          Edit
        </Button>
      </InlineConfigurationPopover.Trigger>
      <InlineConfigurationPopover.Content>
        <InlineConfigurationPopover.Header
          title="Blog post"
          caption="Reference, required"
        />
        <InlineConfigurationPopover.Body>
          <FormControl marginBottom="none">
            <FormControl.Label>Content type</FormControl.Label>
            <Select
              size="small"
              value={contentType}
              onChange={(event) => setContentType(event.target.value)}
            >
              <Select.Option value="blogPost">Blog post</Select.Option>
              <Select.Option value="product">Product</Select.Option>
            </Select>
          </FormControl>
          {/* Focus returns to the menu trigger, which reads the new value, so
              the choice doesn't need an announcement */}
          <Menu>
            <Menu.Trigger>
              <Button size="small" endIcon={<CaretDownIcon />}>
                Match field: {field}
              </Button>
            </Menu.Trigger>
            <Menu.List>
              {fields.map((name) => (
                <Menu.Item key={name} onClick={() => setField(name)}>
                  {name}
                </Menu.Item>
              ))}
            </Menu.List>
          </Menu>
        </InlineConfigurationPopover.Body>
      </InlineConfigurationPopover.Content>
    </InlineConfigurationPopover>
  );
}
