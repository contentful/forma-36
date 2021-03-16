import React from 'react';

import tokens from '@contentful/f36-tokens';
import { Box, _Box, BoxInternalProps } from '../src/Box/Box';

const styles = {
  demoBox: {
    backgroundColor: tokens.colorContrastLight,
    width: '150px',
    height: '80px',
    color: tokens.colorWhite,
  },
};

export default {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    propTypes: [_Box['__docgenInfo']],
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
          Example element {i}
        </Box>,
      );
    }
    return <>{result}</>;
  }
  return <Box style={styles.demoBox}>Example element</Box>;
};

interface Args extends BoxInternalProps {
  exampleBoxesNumber: number;
}

export const Basic = ({ exampleBoxesNumber, ...args }: Args) => (
  <Box as="article" {...args}>
    <DemoBox times={exampleBoxesNumber} />
  </Box>
);

Basic.args = {
  exampleBoxesNumber: 4,
  margin: 'spacing4Xl',
};
