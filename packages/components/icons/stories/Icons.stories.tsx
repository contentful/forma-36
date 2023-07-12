import React, { Fragment } from 'react';
import { Flex, Grid } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import type { Meta, StoryObj } from '@storybook/react';

import * as icons from '../src';

type Icon = typeof icons.ArrowDownIcon;

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: icons.ArrowDownIcon,
  parameters: {
    propTypes: [icons.ArrowDownIcon['__docgenInfo']],
  },
  title: 'Components/Icons',
} as Meta<Icon>;

type Story = StoryObj<Icon>;

export const Default: Story = {
  render: (args) => {
    const Component = icons.ArrowDownIcon;

    return (
      <Fragment>
        <SectionHeading as="h3" marginRight="spacingS" marginBottom="spacingS">
          Built-in icons
        </SectionHeading>

        <Component {...args} />
      </Fragment>
    );
  },
};

export const Overview: Story = {
  render: () => {
    return (
      <Fragment>
        <SectionHeading as="h3" marginBottom="spacingS">
          Built-in icons
        </SectionHeading>

        <Grid columns="auto 1fr 1fr 1fr 1fr">
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
  },
};
