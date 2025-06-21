import React from 'react';
import { IconButton } from '@contentful/f36-button';
import { CalendarBlankIcon } from '@contentful/f36-icons-alpha';
import { Menu, MenuItem } from '@contentful/f36-menu';

export default function IconButtonWithDropdownExample() {
  return (
    <Menu>
      <Menu.Trigger>
        <IconButton aria-label="Calendar" icon={<CalendarBlankIcon />} />
      </Menu.Trigger>
      <Menu.List>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu.List>
    </Menu>
  );
}
