import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NavList } from '../src';
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
} as Meta<typeof NavList>;

type Story = StoryObj<typeof NavList>;

export const Basic: Story = {
  render: (args) => {
    return (
      <NavList {...args}>
        <NavList.Item>Item 1</NavList.Item>
        <NavList.Item>Item 2</NavList.Item>
        <NavList.Item>Item 3</NavList.Item>
        <NavList.Item>Item 4</NavList.Item>
      </NavList>
    );
  },
};

export const WithButtons: Story = {
  render: (args) => {
    const handleOnClick = (id) => () => action(`clicked on button`)(id);
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

export const WithActiveAndDisable: Story = {
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

export const Controled: Story = {
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
