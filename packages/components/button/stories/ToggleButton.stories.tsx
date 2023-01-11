import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Flex, Stack } from '@contentful/f36-core';
import * as icons from '@contentful/f36-icons';

import { ToggleButton, type ToggleButtonProps } from '../src/ToggleButton';
import { ButtonGroup } from '../src';

export default {
  title: 'Components/Button/ToggleButton',
  component: ToggleButton,
  parameters: {
    propTypes: [ToggleButton['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    icon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
  },
} as Meta;

const Overview = (args: ToggleButtonProps) => {
  const [active, setActive] = useState('');

  const handleClick = (size: string) => {
    setActive(active === size ? '' : size);
  };

  return (
    <Flex flexDirection="column" marginBottom="spacingL">
      <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
        <ToggleButton
          isActive={active === 'small'}
          onToggle={() => handleClick('small')}
          size="small"
          {...args}
        >
          Like
        </ToggleButton>

        <ToggleButton
          isActive={active === 'medium'}
          onToggle={() => handleClick('medium')}
          size="medium"
          {...args}
        >
          Like
        </ToggleButton>

        <ToggleButton
          isActive={active === 'large'}
          onToggle={() => handleClick('large')}
          size="large"
          {...args}
        >
          Like
        </ToggleButton>
      </Stack>
    </Flex>
  );
};

export const basic: Story<ToggleButtonProps> = (args) => {
  return <Overview {...args} />;
};

basic.args = {
  icon: <icons.ThumbUpTrimmedIcon />,
};

export const Grouped: Story<ToggleButtonProps> = (args) => {
  const [active, setActive] = useState('');

  const handleClick = (size: string) => {
    setActive(active === size ? '' : size);
  };

  return (
    <Flex flexDirection="column" marginBottom="spacingL">
      <Stack flexDirection="row" marginBottom="spacingM" spacing="spacingXs">
        <ButtonGroup>
          <ToggleButton
            isActive={active === '1'}
            onToggle={() => {
              handleClick('1');
            }}
            size="small"
            {...args}
          >
            Like
          </ToggleButton>

          <ToggleButton
            isActive={active === '2'}
            onToggle={() => handleClick('2')}
            size="small"
            {...args}
          >
            Like
          </ToggleButton>

          <ToggleButton
            isActive={active === '3'}
            onToggle={() => handleClick('3')}
            size="small"
            {...args}
          >
            Like
          </ToggleButton>
        </ButtonGroup>
      </Stack>
    </Flex>
  );
};

Grouped.args = {
  icon: <icons.ThumbUpTrimmedIcon />,
};
