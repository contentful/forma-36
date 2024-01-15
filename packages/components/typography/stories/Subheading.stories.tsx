import React from 'react';
import { Flex } from '@contentful/f36-core';
import { Heading } from '@contentful/f36-typography';
import type { Density } from '@contentful/f36-utils';
import { DensityContainer } from '../../density-container';
import { Subheading, SubheadingProps } from '../src/Subheading/Subheading';

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

export const Basic = (props: SubheadingProps<'h2'>) => (
  <Subheading {...props} />
);

Basic.args = {
  as: 'h2',
  children: 'Subheading',
};

export const WithDensitySupport = (props: SubheadingProps<'h2'>) => {
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
            <DensityContainer density={density.density as Density}>
              <Subheading {...props} />
            </DensityContainer>
          </Flex>
        );
      })}
    </Flex>
  );
};

WithDensitySupport.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
