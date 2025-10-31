import React from 'react';

import tokens from '@contentful/f36-tokens';
import { Text } from '@contentful/f36-typography';
import { Box, BoxInternalProps } from '../src/Box/Box';

const styles = {
  demoBox: {
    backgroundColor: tokens.gray800,
    width: '150px',
    height: '80px',
    color: tokens.colorWhite,
  },
};

export default {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    propTypes: [Box['__docgenInfo']],
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
        <Box style={styles.demoBox} padding="spacingM" margin="spacingXs">
          <Text fontColor="colorWhite">Example element {i}</Text>
        </Box>,
      );
    }
    return <>{result}</>;
  }
  return (
    <Box style={styles.demoBox}>
      <Text fontColor="colorWhite">Example element</Text>
    </Box>
  );
};

interface Args extends BoxInternalProps {
  exampleBoxesNumber: number;
}

export const Basic = {
  render: ({ exampleBoxesNumber, ...args }: Args) => (
    <Box as="article" {...args}>
      <DemoBox times={exampleBoxesNumber} />
    </Box>
  ),

  args: {
    exampleBoxesNumber: 4,
    margin: 'spacing4Xl',
  },
};
