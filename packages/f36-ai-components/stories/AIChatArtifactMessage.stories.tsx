import { Icon, Text } from '@contentful/f36-components';
import * as icons from '@contentful/f36-icons';
import type { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import {
  AIChatArtifactMessage,
  type AIChatArtifactMessageProps,
} from '../src/AIChatArtifactMessage/AIChatArtifactMessage';

export default {
  component: AIChatArtifactMessage,
  title: 'Components/AIChatArtifactMessage',
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text to display in the header',
    },
    content: {
      control: 'text',
      description: 'Content to be rendered inside the artifact message',
    },
    icon: {
      type: 'string',
      control: 'select',
      options: ['', ...Object.keys(icons)],
      description: 'Icon to display in the header',
    },
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  args: {
    title: 'Generated Code',
    content: 'const greeting = "Hello from AI!";\nconsole.log(greeting);',
    icon: 'CodeSimpleIcon',
  },
} as Meta;

export const Basic: Story<
  AIChatArtifactMessageProps & { content: string; icon: string }
> = (args) => {
  const { content, icon, ...componentProps } = args;

  return (
    <AIChatArtifactMessage
      {...componentProps}
      icon={icon ? <Icon as={icons[icon]} size="small" /> : undefined}
    >
      <Text>{content}</Text>
    </AIChatArtifactMessage>
  );
};
