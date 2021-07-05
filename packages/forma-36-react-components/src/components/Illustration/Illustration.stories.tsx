import React from 'react';

import {
  Illustration,
  IllustrationProps,
  IllustrationType,
} from './Illustration';
import { illustrationName } from './constants';
import { Flex, Grid } from '@contentful/f36-core';

export default {
  title: 'Components/Illustration',
  component: Illustration,
  parameters: {
    propTypes: [Illustration['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: IllustrationProps) => <Illustration {...args} />;

Basic.args = {
  illustration: 'Archive',
};

export const AllIllustrations = () => (
  <Grid columns={'auto 1fr 1fr'} columnGap="spacingM">
    {Object.keys(illustrationName)
      .filter((illustration) => !illustration.toLowerCase().includes('trimmed'))
      .map((illustration) => (
        <Flex
          key={illustration}
          padding="spacingS"
          marginRight="spacingM"
          alignItems="center"
          justifyContent="flex-start"
          flexGrow={0}
        >
          <Flex marginRight="spacingS">
            <Illustration illustration={illustration as IllustrationType} />
          </Flex>
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            {illustration}
          </span>
        </Flex>
      ))}
  </Grid>
);
