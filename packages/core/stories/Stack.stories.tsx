import React from 'react';
import { Story } from '@storybook/react';

import tokens from '@contentful/f36-tokens';
import { Stack, _Stack, StackInternalProps } from '../src/Stack/Stack';
import { Box } from '../src/Box';

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight,
    width: '150px',
    height: '80px',
    color: tokens.colorWhite,
  },
};

export default {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    propTypes: [_Stack['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    as: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

const Template: Story<StackInternalProps> = (args) => (
  <Stack {...args}>
    <Box style={styles.demoBox}>Example element 1</Box>
    <Box style={styles.demoBox}>Example element 2</Box>
    <Box style={styles.demoBox}>Example element 3</Box>
    <Box style={styles.demoBox}>Example element 4</Box>
  </Stack>
);

export const Basic = Template.bind({});

Basic.args = {
  direction: 'row',
  gap: 'spacingM',
};
