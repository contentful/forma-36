import React, { ComponentProps } from 'react';
import { Flex } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading } from '@contentful/f36-typography';
import { Paragraph } from '../src';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  decorators: [
    (StoryComponent) => (
      <div style={{ maxWidth: '600px' }}>
        <StoryComponent />
      </div>
    ),
  ],
  parameters: {
    propTypes: [Paragraph['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = {
  args: {
    children:
      'Ill-informed AI initiatives led Lionel to inspect illegible labels, mistaking mirrored machine-learning models for misplaced Latin inscriptions. In Lisbon, logical layouts and linguistic AI left little illumination, leaving isolated individuals lost in labyrinthine neural networks.',
  },
};

export const WithDensitySupport = {
  render: (props: ComponentProps<typeof Paragraph>) => {
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
  },

  args: Basic.args,
};
