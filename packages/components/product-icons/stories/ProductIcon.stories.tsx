import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex, Grid } from '@contentful/f36-core';
import * as icons from '../src';
import type { IconProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: icons.ApisIcon,
  parameters: {
    propTypes: [icons.ApisIcon['__docgenInfo']],
  },
  title: 'Components/Product icon',
} as Meta;

export const Default: Story<IconProps> = (args) => {
  const Component = icons.ApisIcon;

  return (
    <>
      <SectionHeading as="h3" marginRight="spacingS" marginBottom="spacingS">
        Product icon
      </SectionHeading>

      <Component {...args} />
    </>
  );
};

export const Overview: Story = () => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Product icons overview
      </SectionHeading>

      <Grid columns={'auto 1fr 1fr 1fr 1fr'}>
        {Object.keys(icons).map((icon) => {
          const Component = icons[icon];

          return (
            <Flex
              key={icon}
              padding="spacingS"
              marginRight="spacingM"
              alignItems="center"
              justifyContent="flex-start"
              flexGrow={0}
            >
              <Flex marginRight="spacingS">{icon}</Flex>
              <Component />
            </Flex>
          );
        })}
      </Grid>
    </>
  );
};
