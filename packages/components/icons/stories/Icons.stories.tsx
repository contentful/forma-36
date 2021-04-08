import React, { Fragment } from 'react';
import { Flex, Grid } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import type { Meta, Story } from '@storybook/react/types-6-0';

import * as icons from '../src';
import type { IconProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: icons.ArrowDown,
  parameters: {
    propTypes: [icons.ArrowDown['__docgenInfo']],
  },
  title: 'Components/Icons',
} as Meta;

export const Default: Story<IconProps> = (args) => {
  const Component = icons.ArrowDown;

  return (
    <Fragment>
      <SectionHeading as="h3" marginRight="spacingS">
        Built-in icons
      </SectionHeading>

      <Component {...args} />
    </Fragment>
  );
};

export const Overview: Story = () => {
  return (
    <Fragment>
      <SectionHeading as="h3" marginBottom="spacingS">
        Built-in icons
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
    </Fragment>
  );
};
