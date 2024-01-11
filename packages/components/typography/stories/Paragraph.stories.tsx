import React from 'react';
import { Flex } from '@contentful/f36-core';
import { Heading } from '@contentful/f36-typography';
import type { Density } from '@contentful/f36-utils';
import { Paragraph, ParagraphProps } from '../src/Paragraph/Paragraph';
import { DensityContainer } from '../../density-container';

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

export const Basic = (props: ParagraphProps) => <Paragraph {...props} />;

Basic.args = {
  children: 'Paragraph',
};

export const WithDensitySupport = (props: ParagraphProps) => {
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
    <Flex flexDirection="column" gap="spacingS">
      {Densities.map((density) => {
        return (
          <Flex key={density.name} flexDirection="column">
            <Heading>{density.name}</Heading>
            <DensityContainer density={density.density as Density}>
              <Paragraph {...props} />
            </DensityContainer>
          </Flex>
        );
      })}
    </Flex>
  );
};

WithDensitySupport.args = {
  children: 'The brown fox jumps over the lazy dog',
};
