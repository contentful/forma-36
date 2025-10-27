import { Button, Icon, Text } from '@contentful/f36-components';
import { action } from '@storybook/addon-actions';
import React, { useEffect, useState } from 'react';

import { AIChatMessage } from '../src/AIChatMessage';
import { getStyles } from '../src/AIChatLayout/AIChatLayout.styles';

export default {
  component: AIChatMessage,
  title: 'Components/AIChatMessage',
  parameters: { docs: { source: { type: 'code' } } },
  argTypes: {
    // variant: {
    //   control: 'select',
    //   options: ['normal', 'expanded'],
    // },
    // display: {
    //   control: 'select',
    //   options: ['closed', 'collapsed', 'open'],
    // },
    // buttons: {
    //   type: 'string',
    //   control: 'check',
    //   options: ['open', 'minimize', 'close', 'threads'],
    // },
    // icon: {
    //   type: 'string',
    //   control: 'select',
    //   options: ['', ...Object.keys(icons)],
    // },
    // content: {
    //   type: 'string',
    // },
    // children: { control: { disable: true } },
    // onCollapsedClick: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = (props) => {
  return <AIChatMessage {...props} />;
};

Basic.args = {
  title: 'Translation Agent',
  icon: 'TranslateIcon',
  buttons: ['open', 'minimize', 'close', 'threads'],
  display: 'collapsed',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
