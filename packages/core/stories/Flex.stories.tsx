import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@contentful/f36-tokens';
import { Text } from '@contentful/f36-typography';
import { Flex } from '../src/Flex/Flex';

export default {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    propTypes: [Flex['__docgenInfo']],
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
} as Meta<typeof Flex>;

type Story = StoryObj<typeof Flex>;

const styles = {
  demoBox: {
    backgroundColor: tokens.gray800,
    width: '150px',
    height: '80px',
    color: tokens.colorWhite,
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
          margin="spacingXs"
        >
          <Text fontColor="colorWhite">Example element {i}</Text>
        </Flex>,
      );
    }
    return <>{result}</>;
  }
  return <Flex style={styles.demoBox}>Example element</Flex>;
};

export const Basic: Story = {
  args: {
    exampleBoxesNumber: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 'spacing4Xl',
  },
  render: ({ exampleBoxesNumber, ...args }: Args) => (
    <Flex as="article" flexDirection="row" {...args}>
      <DemoBox times={exampleBoxesNumber} />
    </Flex>
  ),
};
