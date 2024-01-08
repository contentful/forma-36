import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import tokens from '@contentful/f36-tokens';
import {
  Button,
  IconButton,
  Box,
  Flex,
  Heading,
  Text,
  Checkbox,
  Radio,
} from '@contentful/f36-components';
import { PlusIcon } from '@contentful/f36-icons';
import { type Density } from '@contentful/f36-utils';

import {
  DensityContainer,
  type DensityContainerProps,
} from '../src/DensityContainer';

export default {
  component: DensityContainer,
  title: 'Layout/Density Container',
  argTypes: {
    density: { defaultValue: 'low' },
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

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

const Components = [
  {
    name: 'Button',
    component: Button,
    props: [
      {
        variant: 'primary',
        size: 'medium',
        children: 'Medium button',
      },
      {
        variant: 'primary',
        size: 'small',
        children: 'Small button',
      },
    ],
  },
  {
    name: 'IconButton',
    component: IconButton,
    props: [
      {
        variant: 'primary',
        size: 'medium',
        icon: <PlusIcon />,
        'aria-label': 'Medium',
      },
      {
        variant: 'primary',
        size: 'small',
        icon: <PlusIcon />,
        'aria-label': 'Medium',
      },
    ],
  },
  {
    name: 'Checkbox',
    component: Checkbox,
    props: [
      {
        children: 'Checkbox Label',
        helpText: 'Some help text',
      },
    ],
  },
  {
    name: 'Radio',
    component: Radio,
    props: [
      {
        children: 'Radio Label',
        helpText: 'Some help text',
      },
    ],
  },
];

const toStartCase = (s) => s.charAt(0).toUpperCase() + s.substring(1);

export const Default: Story<DensityContainerProps> = (args) => {
  return (
    <>
      <Heading>Density Container</Heading>
      <hr />

      <Heading as="h2" marginTop="spacingS" marginBottom="spacingXs">
        {toStartCase(args?.density)} density
      </Heading>

      <DensityContainer {...args}>
        {Components.map((Component) => {
          return (
            <Box
              key={Component.name}
              marginBottom="spacingL"
              style={{ minHeight: '100px' }}
            >
              <Text>{Component.name}</Text>

              <Box
                marginTop="spacingS"
                style={{
                  backgroundColor: tokens.gray200,
                  padding: tokens.spacingS,
                  borderRadius: tokens.borderRadiusMedium,
                }}
              >
                <Flex gap="spacingS" alignItems="end">
                  {Component.props.map((props, index) => {
                    return <Component.component key={index} {...props} />;
                  })}
                </Flex>
              </Box>
            </Box>
          );
        })}
      </DensityContainer>
    </>
  );
};

export const Overview: Story<DensityContainerProps> = ({
  density,
  ...args
}) => {
  return (
    <>
      <Heading>Density Container</Heading>
      <hr />

      <Flex gap="spacing2Xl" alignItems="start" marginTop="spacingM">
        {Densities.map((density) => {
          return (
            <Box key={density.name}>
              <DensityContainer
                key={density.name}
                density={density.density as Density}
                {...args}
              >
                <Heading as="h2" marginBottom="spacingXs">
                  {density.name}
                </Heading>

                {Components.map((Component) => {
                  return (
                    <Box
                      key={Component.name}
                      marginBottom="spacingL"
                      style={{ minHeight: '100px' }}
                    >
                      <Text>{Component.name}</Text>

                      <Box
                        marginTop="spacingS"
                        style={{
                          backgroundColor: tokens.gray200,
                          padding: tokens.spacingS,
                          borderRadius: tokens.borderRadiusMedium,
                        }}
                      >
                        <Flex gap="spacingS" alignItems="end">
                          {Component.props.map((props, index) => {
                            return (
                              <Component.component key={index} {...props} />
                            );
                          })}
                        </Flex>
                      </Box>
                    </Box>
                  );
                })}
              </DensityContainer>
            </Box>
          );
        })}
      </Flex>
    </>
  );
};
