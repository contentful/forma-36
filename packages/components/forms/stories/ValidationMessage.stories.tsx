import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { type Density } from '@contentful/f36-utils';
import { DensityContainer } from '../../density-container';

import { ValidationMessage } from '../src';
import type { ValidationMessageInternalProps } from '../src/ValidationMessage/ValidationMessage';

export default {
  title: 'Form Elements/ValidationMessage',
  component: ValidationMessage,
  parameters: {
    propTypes: [ValidationMessage['__docgenInfo']],
  },
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    display: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Default: Story<ValidationMessageInternalProps> = (args) => (
  <ValidationMessage {...args} />
);

Default.args = {
  children: 'Validation message',
};

export const WithDensitySupport = () => {
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
    <>
      {Densities.map((density) => {
        return (
          <DensityContainer
            key={density.name}
            density={density.density as Density}
          >
            <ValidationMessage>{density.name}</ValidationMessage>
          </DensityContainer>
        );
      })}
    </>
  );
};
