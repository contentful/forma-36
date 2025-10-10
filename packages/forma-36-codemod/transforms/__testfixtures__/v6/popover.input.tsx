import React from 'react';
import { Popover, Tooltip, Menu, Button } from '@contentful/f36-components';

function Example(){
  return (
    <div>
      <Popover placement="auto-start" offset={[5,6]} renderOnlyWhenOpen={false} isOpen onClose={() => {}}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div>Content</div>
        </Popover.Content>
      </Popover>
      <Tooltip content="auto-start" placement="auto-start"><Button>Hover me</Button></Tooltip>
      <Menu placement="auto-start" offset={[5,6]}>
        <Menu.Trigger>
          <Button>auto-start</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
        </Menu.List>
      </Menu>
      <Popover placement="auto-end" renderOnlyWhenOpen={false} isOpen onClose={() => {}}>
        <Popover.Trigger>
          <Button>Toggle</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div>Content</div>
        </Popover.Content>
      </Popover>
      <Tooltip content="auto-end" placement="auto-end"><Button>Hover me</Button></Tooltip>
      <Menu placement="auto-end">
        <Menu.Trigger>
          <Button>auto-start</Button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
}

export default Example;
