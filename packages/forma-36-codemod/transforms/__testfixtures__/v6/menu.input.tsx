import React from 'react';
import { Menu, Submenu, SubmenuTrigger, type SubmenuProps } from '@contentful/f36-menu';

function Example (){
  const submenuProps: SubmenuProps = {
    placement: 'left',
  }

  return (
    <Menu>
      <Menu.Trigger>
        <button> Toggle </button>
      </Menu.Trigger>
      <Menu.List>
        <Menu.Item>MenuItem 1</Menu.Item>
        <Menu.Submenu {...submenuProps}>
          <Menu.SubmenuTrigger>Submenu Trigger</Menu.SubmenuTrigger>
          <Menu.List>
            <Menu.Item>Sub item 1</Menu.Item>
            <Menu.Submenu>
              <Menu.SubmenuTrigger>Sub-Submenu</Menu.SubmenuTrigger>
              <Menu.List>
                <Menu.Item>Sub item 1</Menu.Item>
                <Menu.Item>Sub item 2</Menu.Item>
              </Menu.List>
            </Menu.Submenu>
            <Menu.Item>Sub item 3</Menu.Item>
          </Menu.List>
        </Menu.Submenu>
        <Menu.Item>MenuItem 2</Menu.Item>
        <Submenu>
          <SubmenuTrigger>SubMenu 2</SubmenuTrigger>
          <Menu.List>
            <Menu.Item>Sub item 1</Menu.Item>
            <Menu.Item>Sub item 2</Menu.Item>
            <Menu.Item>Sub item 3</Menu.Item>
          </Menu.List>
        </Submenu>
      </Menu.List>
    </Menu>
  );
}

export default Example;
