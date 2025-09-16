import React, { type ComponentProps } from 'react';
import { Flex } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading } from '@contentful/f36-typography';
import { SectionHeading } from '../src';

export default {
  title: 'Typography/SectionHeading',
  component: SectionHeading,
  parameters: {
    propTypes: [SectionHeading['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = {
  args: {
    children:
      'The quick brown fox jumps over the lazy dog named Henry like an over-motivated frog.',
  },
};

export const WithDensitySupport = {
  render: (props: ComponentProps<typeof SectionHeading>) => {
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
                <SectionHeading {...props} />
              </DensityProvider>
            </Flex>
          );
        })}
      </Flex>
    );
  },

  args: {
    children:
      'The quick brown fox jumps over the lazy dog named Henry like an over-motivated frog.',
  },
};
