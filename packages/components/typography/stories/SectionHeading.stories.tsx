import React from 'react';
import { Flex } from '@contentful/f36-core';
import { Heading } from '@contentful/f36-typography';
import type { Density } from '@contentful/f36-utils';
import { DensityContainer } from '../../density-container';
import {
  SectionHeading,
  SectionHeadingProps,
} from '../src/SectionHeading/SectionHeading';

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

export const Basic = (props: SectionHeadingProps<'h3'>) => (
  <SectionHeading {...props} />
);

Basic.args = {
  children: 'Section heading',
};

export const WithDensitySupport = (props: SectionHeadingProps<'h3'>) => {
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
              <SectionHeading {...props} />
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
