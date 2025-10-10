import React from "react";
import { Menu } from "@contentful/f36-menu";

function Example (){
  return(
      <Menu>
        <Menu.Trigger>
          <button> Toggle </button>
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>MenuItem 1</Menu.Item>
          <Menu>
            <Menu.SubmenuTrigger>Submenu Trigger</Menu.SubmenuTrigger>
            <Menu.List>
              <Menu.Item>Sub item 1</Menu.Item>
              <Menu>
                <Menu.SubmenuTrigger>Sub-Submenu</Menu.SubmenuTrigger>
                <Menu.List>
                  <Menu.Item>Sub item 1</Menu.Item>
                  <Menu.Item>Sub item 2</Menu.Item>
                </Menu.List>
              </Menu>
              <Menu.Item>Sub item 3</Menu.Item>
            </Menu.List>
          </Menu>
          <Menu.Item>MenuItem 2</Menu.Item>
          <Menu>
            <Menu.SubmenuTrigger>SubMenu 2</Menu.SubmenuTrigger>
            <Menu.List>
              <Menu.Item>Sub item 1</Menu.Item>
              <Menu.Item>Sub item 2</Menu.Item>
              <Menu.Item>Sub item 3</Menu.Item>
            </Menu.List>
          </Menu>
        </Menu.List>
      </Menu>
  );
}

export default Example;