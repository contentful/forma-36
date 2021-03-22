import React from 'react';

import tokens from '@contentful/f36-tokens';
import { Flex, _Flex, FlexInternalProps } from '../src/Flex/Flex';
import { Box } from '../src/Box/Box';

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight,
    width: '150px',
    height: '80px',
    color: tokens.colorWhite,
  },
};

export default {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    propTypes: [_Flex['__docgenInfo']],
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
          margin="spacingXs"
        >
          Example element {i}
        </Flex>,
      );
    }
    return <>{result}</>;
  }
  return <Flex style={styles.demoBox}>Example element</Flex>;
};

interface Args extends FlexInternalProps {
  exampleBoxesNumber: number;
}

export const Basic = ({ exampleBoxesNumber, ...args }: Args) => (
  <Flex as="article" flexDirection="row" {...args}>
    <DemoBox times={exampleBoxesNumber} />
  </Flex>
);

Basic.args = {
  exampleBoxesNumber: 4,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: 'spacing4Xl',
};
