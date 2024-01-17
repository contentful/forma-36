import React, { ComponentProps } from 'react';
import { Flex } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading } from '@contentful/f36-typography';
import { Paragraph } from '../src';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    propTypes: [Paragraph['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = (props: ComponentProps<typeof Paragraph>) => (
  <Paragraph {...props} />
);

Basic.args = {
  children:
    'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
};

export const WithDensitySupport = (props: ComponentProps<typeof Paragraph>) => {
  const Densities = [
    {
      name: 'Low density',
      density: 'low',
    },
    {
      name: 'High density',
      density: 'high',
    },
  ];

  return (
    <Flex gap="spacing2Xl">
      {Densities.map((density) => {
        return (
          <Flex
            key={density.name}
            flexDirection="column"
            style={{ width: '230px' }}
          >
            <Heading>{density.name}</Heading>
            <DensityProvider value={density.density as Density}>
              <Paragraph {...props} />
            </DensityProvider>
          </Flex>
        );
      })}
    </Flex>
  );
};

WithDensitySupport.args = {
  children:
    'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
};
