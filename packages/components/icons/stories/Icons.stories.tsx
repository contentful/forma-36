import React, { Fragment } from 'react';
import { Box, Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import type { Meta, Story } from '@storybook/react/types-6-0';
import * as icons from '../src';
import type { IconProps, IconComponent } from '../src';

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
} as Meta;

export const Default: Story<IconProps> = (args) => {
  const Component = icons.ArrowDownIcon;

  return (
    <Fragment>
      <SectionHeading as="h3" marginRight="spacingS" marginBottom="spacingS">
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

      {Object.keys(icons).map((icon) => {
        const Component = icons[icon] as IconComponent;

        return (
          <Box key={icon} marginTop="spacingM">
            <Text>{icon}</Text>

            <Flex alignItems="center" flexDirection="row" gap="spacingL">
              <Component />
              <Component isActive />
              <Component size="small" />
              <Component isActive size="small" />
              <Component size="tiny" />
              <Component isActive size="tiny" />
            </Flex>
          </Box>
        );
      })}
    </Fragment>
  );
};
