import React from 'react';
import Image from 'next/image';
import { Flex, Menu, Button } from '@contentful/f36-components';

import caretDown from '../../resources/icons/caret-down.svg';

export function VersionSwitch() {
  return (
    <Flex alignItems="center" marginLeft="spacingM">
      <Menu usePortal={false}>
        <Menu.Trigger>
          <Button
            size="small"
            endIcon={<Image src={caretDown} width={18} height={18} />}
          >
            v5
          </Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item as="a" href="https://f36.contentful.com/">
            v5
          </Menu.Item>
          <Menu.Item as="a" href="https://v4.f36.contentful.com/">
            v4
          </Menu.Item>
        </Menu.List>
      </Menu>
    </Flex>
  );
}
