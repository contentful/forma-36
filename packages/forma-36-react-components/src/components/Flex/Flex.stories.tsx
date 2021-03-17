import React from 'react';
import tokens from '@contentful/forma-36-tokens';

import { Flex, FlexProps } from './Flex';

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight,
    width: '150px',
    height: '80px',
    color: tokens.colorWhite,
  },
};

export default {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    propTypes: [Flex['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
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

interface Args extends FlexProps {
  exampleBoxesNumber: number;
}
export const Basic = ({ exampleBoxesNumber, ...args }: Args) => (
  <Flex {...args} htmlTag="article">
    <DemoBox times={exampleBoxesNumber} />
  </Flex>
);

Basic.args = {
  exampleBoxesNumber: 4,
  flexDirection: 'start',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: 'spacing4Xl',
};
