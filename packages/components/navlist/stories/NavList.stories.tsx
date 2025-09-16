import React, { useState } from 'react';
import type { StoryObj, Meta, StoryFn } from '@storybook/react-vite';

import { NavList, type NavListProps } from '../src';
import { action } from '@storybook/addon-actions';

export default {
  component: NavList,
  title: 'Components/NavList',
  parameters: {
    propTypes: NavList['__docgenInfo'],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    as: { control: { type: 'select', options: ['nav', 'div'] } },
  },
} as Meta;

export const Basic: StoryObj<NavListProps> = {
  render: (args) => {
    return (
      <NavList {...args} aria-label="Navlist">
        <NavList.Item>Item 1</NavList.Item>
        <NavList.Item>Item 2</NavList.Item>
        <NavList.Item>Item 3</NavList.Item>
        <NavList.Item>Item 4</NavList.Item>
      </NavList>
    );
  },
};

export const WithButtons: StoryObj<NavListProps> = {
  render: (args) => {
    const handleOnClick = (id) => () => action('clicked on button')(id);
    return (
      <NavList {...args}>
        <NavList.Item onClick={handleOnClick(1)} as="button">
          Item 1
        </NavList.Item>
        <NavList.Item onClick={handleOnClick(2)} as="button">
          Item 2
        </NavList.Item>
        <NavList.Item onClick={handleOnClick(3)} as="button">
          Item 3
        </NavList.Item>
        <NavList.Item onClick={handleOnClick(4)} as="button">
          Item 4
        </NavList.Item>
      </NavList>
    );
  },
};

export const WithActiveAndDisable: StoryObj<NavListProps> = {
  render: (args) => {
    return (
      <NavList {...args}>
        <NavList.Item isActive>Item 1</NavList.Item>
        <NavList.Item isDisabled>Item 2</NavList.Item>
        <NavList.Item>Item 3</NavList.Item>
        <NavList.Item>Item 4</NavList.Item>
      </NavList>
    );
  },
};

export const Controlled: StoryObj<NavListProps> = {
  render: (args) => {
    const [active, setActive] = useState(0);
    const handleOnClick = (id) => () => {
      setActive(id);
      action('clicked on button')(id);
    };
    return (
      <NavList {...args}>
        <NavList.Item
          isActive={active === 1}
          onClick={handleOnClick(1)}
          as="button"
        >
          Item 1
        </NavList.Item>
        <NavList.Item
          isActive={active === 2}
          isDisabled
          onClick={handleOnClick(2)}
          as="button"
        >
          Item 2
        </NavList.Item>
        <NavList.Item
          isActive={active === 3}
          onClick={handleOnClick(3)}
          as="button"
        >
          Item 3
        </NavList.Item>
        <NavList.Item
          isActive={active === 4}
          onClick={handleOnClick(4)}
          as="button"
        >
          Item 4
        </NavList.Item>
      </NavList>
    );
  },
};
