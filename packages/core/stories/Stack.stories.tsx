import React from 'react';

import tokens from '@contentful/f36-tokens';
import { Text } from '@contentful/f36-typography';
import { Stack, StackInternalProps } from '../src/Stack/Stack';
import { Flex } from '../src/Flex';

const styles = {
  demoBox: {
    backgroundColor: tokens.gray800,
    width: '150px',
    height: '80px',
    color: tokens.colorWhite,
  },
};

export default {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    propTypes: [Stack['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    as: { control: { disable: true } },
    style: { control: { disable: true } },
    exampleBoxesNumber: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
    },
  },
};

const DemoBox = ({ times }: { times?: number }) => {
  if (times) {
    const result = [];
    for (let i = 0; i < times; i++) {
      result.push(
        <Flex
          style={styles.demoBox}
          justifyContent="center"
          alignItems="center"
          padding="spacingM"
        >
          <Text fontColor="colorWhite">Example element {i}</Text>
        </Flex>,
      );
    }
    return <>{result}</>;
  }
  return <Flex style={styles.demoBox}>Example element</Flex>;
};

interface Args extends StackInternalProps {
  exampleBoxesNumber: number;
}

export const Basic = {
  render: ({ exampleBoxesNumber, ...args }: Args) => (
    <Stack {...args}>
      <DemoBox times={exampleBoxesNumber} />
    </Stack>
  ),

  args: {
    exampleBoxesNumber: 5,
    flexDirection: 'row',
    alignItems: 'center',
    spacing: 'spacingM',
  },
};
