import React from 'react';
import type { Density } from '@contentful/f36-utils';
import { Flex } from '@contentful/f36-core';
import { Heading, HeadingProps } from '../src/Heading/Heading';
import { DensityContainer } from '../../density-container/';

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

export const Basic = (props: HeadingProps<'h1'>) => <Heading {...props} />;

Basic.args = {
  children: 'Heading',
  as: 'h1',
};

export const WithDensitySupport = (props: HeadingProps<'h1'>) => {
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
              <Heading {...props} />
            </DensityContainer>
          </Flex>
        );
      })}
    </Flex>
  );
};

WithDensitySupport.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  as: 'h1',
};
