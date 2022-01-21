import React from 'react';
import { Flex, Menu, Button } from '@contentful/f36-components';
import { ChevronDownIcon } from '@contentful/f36-icons';

export function VersionSwitch() {
  return (
    <Flex alignItems="center" marginLeft="spacingM">
      <Menu usePortal={false}>
        <Menu.Trigger>
          <Button size="small" endIcon={<ChevronDownIcon />}>
            v4
          </Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item as="a" href="https://f36.contentful.com/">
            v4
          </Menu.Item>
          <Menu.Item as="a" href="https://v3.f36.contentful.com/">
            v3
          </Menu.Item>
        </Menu.List>
      </Menu>
    </Flex>
  );
}
