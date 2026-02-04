import React, { ComponentProps } from 'react';
import { Flex } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading } from '../src/Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    propTypes: [Heading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = {
  args: {
    children:
      'The quick brown fox jumps over the lazy dog like an over-motivated frog',
    as: 'h1',
  },
};

export const WithDensitySupport = {
  render: (props: ComponentProps<typeof Heading>) => {
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
                <Heading {...props} />
              </DensityProvider>
            </Flex>
          );
        })}
      </Flex>
    );
  },

  args: {
    children:
      'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
    as: 'h1',
  },
};
