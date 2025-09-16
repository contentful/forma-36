import React, { ComponentProps } from 'react';
import { Flex } from '@contentful/f36-core';
import { Heading } from '@contentful/f36-typography';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Subheading } from '../src';

export default {
  title: 'Typography/Subheading',
  component: Subheading,
  parameters: {
    propTypes: [Subheading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = {
  args: {
    as: 'h2',
    children:
      'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
  },
};

export const WithDensitySupport = {
  render: (props: ComponentProps<typeof Subheading>) => {
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
                <Subheading {...props} />
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
  },
};
