import React, { ComponentProps } from 'react';
import { Flex } from '@contentful/f36-core';
import { type Density, DensityProvider } from '@contentful/f36-utils';
import { Heading, Paragraph } from '@contentful/f36-typography';
import { Caption } from '../src';

export default {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    propTypes: [Caption['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = {
  args: {
    children:
      'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
  },
};

export const Overview = {
  render: (props: ComponentProps<typeof Caption>) => (
    <>
      <Flex alignItems="center" gap="spacingS">
        <Paragraph marginBottom="none">fontWeightNormal</Paragraph>
        <Caption {...props} fontWeight="fontWeightNormal" />
      </Flex>

      <Flex alignItems="center" gap="spacingS">
        <Paragraph marginBottom="none">fontWeightMedium</Paragraph>
        <Caption {...props} fontWeight="fontWeightMedium" />
      </Flex>
    </>
  ),

  args: {
    children:
      'The quick brown fox jumps over the lazy dog like an over-motivated frog.',
  },
};

export const WithDensitySupport = {
  render: (props: ComponentProps<typeof Caption>) => {
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
              <Heading marginBottom="spacingXs">{density.name}</Heading>
              <DensityProvider value={density.density as Density}>
                <Caption {...props} />
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
