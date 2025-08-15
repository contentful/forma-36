import React, { Fragment } from 'react';
import { Flex, Stack } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { MdAcUnit as ExternalIcon } from 'react-icons/md';

import { Icon, type IconInternalProps } from '../src/Icon';
import { CalendarBlankIcon, GearSixIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Icon,
  parameters: {
    propTypes: [Icon['__docgenInfo']],
  },
  title: 'Components/Icon',
} as Meta;

export const Sizes: Story = () => {
  return (
    <Fragment>
      <SectionHeading as="h3" marginBottom="spacingS">
        Icon sizes
      </SectionHeading>

      <Stack>
        <Flex alignItems="center" gap="spacingS">
          <CalendarBlankIcon size="tiny" /> <Text>Tiny</Text>
        </Flex>
        <Flex alignItems="center" gap="spacingS">
          <CalendarBlankIcon size="small" /> <Text>Small</Text>
        </Flex>
        <Flex alignItems="center" gap="spacingS">
          <CalendarBlankIcon size="medium" /> <Text>Medium</Text>
        </Flex>
      </Stack>
    </Fragment>
  );
};

export const States: Story = () => {
  return (
    <Fragment>
      <SectionHeading as="h3" marginBottom="spacingS">
        Icon states
      </SectionHeading>
      <Stack>
        <Flex alignItems="center" gap="spacingS">
          <GearSixIcon isActive />
          <GearSixIcon isActive color={tokens.colorPrimary} />
          <GearSixIcon isActive color={tokens.colorPositive} />
        </Flex>
      </Stack>
    </Fragment>
  );
};

export const WithSVGPath: Story<IconInternalProps> = (args) => (
  <Fragment>
    <SectionHeading as="h3" marginBottom="spacingS">
      Icon component with SVG paths
    </SectionHeading>

    <Icon {...args}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <circle
          cx="128"
          cy="128"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <path
          d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    </Icon>
  </Fragment>
);

export const WithExternalIcon: Story<
  IconInternalProps & { children?: never }
> = (args) => (
  <Fragment>
    <SectionHeading as="h3" marginBottom="spacingS">
      Icon component with third-party libraries
    </SectionHeading>

    <Icon {...args} as={ExternalIcon} />
  </Fragment>
);
