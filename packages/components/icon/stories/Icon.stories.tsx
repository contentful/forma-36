import React, { Fragment } from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { MdAcUnit as ExternalIcon } from 'react-icons/md';

import { Icon } from '../src/';
import type { IconProps } from '../src/';

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

export const WithSVGPath: Story<IconProps> = (args) => (
  <Fragment>
    <SectionHeading as="h3" marginBottom="spacingS">
      Icon component with SVG paths
    </SectionHeading>

    <Icon {...args}>
      <Fragment>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </Fragment>
    </Icon>
  </Fragment>
);

export const WithExternalIcon: Story<IconProps & { children?: never }> = (
  args,
) => (
  <Fragment>
    <SectionHeading as="h3" marginBottom="spacingS">
      Icon component with third-party libraries
    </SectionHeading>

    <Icon {...args} as={ExternalIcon} />
  </Fragment>
);
const CustomIcon = (props: Omit<IconProps, 'as' | 'children'>) => (
  <Icon {...props}>
    <path d="M8 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h2.778A3.222 3.222 0 0123 5.222v15.556A3.222 3.222 0 0119.778 24H4.222A3.222 3.222 0 011 20.778V5.222A3.222 3.222 0 014.222 2H7V1a1 1 0 011-1zM7 4H4.222C3.547 4 3 4.547 3 5.222V9h18V5.222C21 4.547 20.453 4 19.778 4H17v1a1 1 0 11-2 0V4H9v1a1 1 0 01-2 0V4zm14 7H3v9.778C3 21.453 3.547 22 4.222 22h15.556c.675 0 1.222-.547 1.222-1.222V11z" />
  </Icon>
);

export const Overview: Story = () => {
  const sizes = ['large', 'medium', 'small', 'tiny'];

  return (
    <Fragment>
      <SectionHeading as="h3" marginBottom="spacingS">
        Icon sizes
      </SectionHeading>

      {sizes.map((sizeKey) => {
        const size = sizeKey as IconProps['size'];
        return (
          <Flex marginBottom="spacingM" alignItems="center" key={size}>
            <Flex marginRight="spacingS">
              <CustomIcon variant="primary" size={size} />
            </Flex>
            <Text>{size}</Text>
          </Flex>
        );
      })}

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
        Icon variants
      </SectionHeading>

      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <CustomIcon variant="primary" />
        </Flex>
        <Text>primary</Text>
      </Flex>

      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <CustomIcon variant="positive" />
        </Flex>
        <Text>positive</Text>
      </Flex>

      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <CustomIcon variant="negative" />
        </Flex>
        <Text>negative</Text>
      </Flex>

      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <CustomIcon variant="warning" />
        </Flex>
        <Text>warning</Text>
      </Flex>

      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <CustomIcon variant="secondary" />
        </Flex>
        <Text>secondary</Text>
      </Flex>

      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <CustomIcon variant="muted" />
        </Flex>
        <Text>muted</Text>
      </Flex>

      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <CustomIcon variant="white" />
        </Flex>
        <Text>white</Text>
      </Flex>
    </Fragment>
  );
};
