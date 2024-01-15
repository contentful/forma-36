import React from 'react';
import { Flex } from '@contentful/f36-core';
import type { Density } from '@contentful/f36-utils';
import { Heading } from '@contentful/f36-typography';

import { DensityContainer } from '../../density-container';
import { Caption, CaptionProps } from '../src/Caption/Caption';
import { Paragraph } from '../src/Paragraph/Paragraph';

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

export const Basic = (props: CaptionProps<'span'>) => <Caption {...props} />;

Basic.args = {
  children: 'Caption',
};

export const Overview = (props: CaptionProps) => (
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
);

Overview.args = {
  children: 'Caption',
};

export const WithDensitySupport = (props: CaptionProps) => {
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
            <DensityContainer density={density.density as Density}>
              <Caption {...props} />
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
