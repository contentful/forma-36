import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { CopyButton, type CopyButtonProps } from '../src/CopyButton';
import { TextInput } from '@contentful/f36-forms';
export default {
  component: CopyButton,
  parameters: {
    propTypes: CopyButton['__docgenInfo'],
  },
  title: 'Components/Button components/CopyButton',
} as Meta;

export const Default: StoryObj<CopyButtonProps> = {
  render: (args) => {
    return <CopyButton {...args} />;
  },

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['secondary', 'transparent'],
    },
  },

  args: {
    value: 'Lorem Ipsum',
    tooltipCopiedText: 'Value copied to clipboard',
    tooltipText: 'Copy to clipboard',
    onCopy: action('onCopy'),
    tooltipProps: {
      placement: 'bottom',
      usePortal: true,
    },
  },
};

export const WithLabel: StoryObj<CopyButtonProps> = {
  render: (args) => {
    return <CopyButton {...args}>Copy organization Id</CopyButton>;
  },

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['secondary', 'transparent'],
    },
  },

  args: {
    value: 'Lorem Ipsum',
    tooltipCopiedText: 'Value copied to clipboard',
    tooltipText: 'Copy to clipboard',
    onCopy: action('onCopy'),
    tooltipProps: {
      placement: 'bottom',
      usePortal: true,
    },
  },
};
export const WithTextInput: StoryObj<CopyButtonProps> = {
  render: (args) => {
    const value = 'myContentTypeId';
    return (
      <TextInput.Group>
        <TextInput isDisabled isReadOnly value={value} />
        <CopyButton
          value={value}
          tooltipProps={{ placement: 'right', usePortal: true }}
          {...args}
        />
      </TextInput.Group>
    );
  },

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['secondary', 'transparent'],
    },
  },

  args: {
    value: 'Lorem Ipsum',
    tooltipCopiedText: 'Value copied to clipboard',
    tooltipText: 'Copy to clipboard',
    onCopy: action('onCopy'),
    tooltipProps: {
      placement: 'bottom',
      usePortal: true,
    },
  },
};
