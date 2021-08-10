import React from 'react';
import { SectionHeading, Text } from '@contentful/f36-typography';
import * as icons from '@contentful/f36-icons';
import { Flex } from '@contentful/f36-core';
import type { Story } from '@storybook/react/types-6-0';

import { IconButton, IconButtonProps } from './IconButton';

// TODO align colors between Icon and IconButton? (warning is missing in IconButton)
enum IconButtonTypes {
  'primary' = 'primary',
  'positive' = 'positive',
  'negative' = 'negative',
  'muted' = 'muted',
  'secondary' = 'secondary',
  'white' = 'white',
}

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    propTypes: [IconButton['__docgenInfo']],
  },
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    icon: {
      control: {
        options: Object.keys(icons),
        type: 'select',
      },
      defaultValue: 'Star',
    },
    iconProps: { control: { disable: true } },
    iconSize: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'medium', 'large'],
      },
    },
  },
};

interface Args extends IconButtonProps {
  icon: string;
  iconSize?: IconButtonProps['iconProps']['size'];
}

export const Basic: Story<Args> = ({ icon, iconSize, ...args }) => (
  <IconButton iconProps={{ as: icons[icon], size: iconSize }} {...args} />
);
Basic.args = {
  icon: 'Star',
  iconSize: 'medium',
};

export const Overview: Story<Args> = (args) => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingXs">
        IconButton colors
      </SectionHeading>
      {Object.keys(IconButtonTypes).map((color, idx) => (
        <Flex
          padding="spacingXs"
          alignItems="center"
          style={{
            backgroundColor: color === 'white' ? 'black' : 'transparent',
          }}
          key={idx}
        >
          <Flex marginRight="spacingS">
            <IconButton
              iconProps={{
                as: icons[args.icon],
              }}
              buttonType={IconButtonTypes[color]}
              label="Add New Element"
            />
          </Flex>
          <Text style={{ color: color === 'white' ? 'white' : 'initial' }}>
            {color}
          </Text>
        </Flex>
      ))}

      <SectionHeading as="h3" marginTop="spacingL" marginBottom="spacingS">
        IconButton sizes
      </SectionHeading>
      <Flex flexDirection="row">
        <Flex marginRight="spacingS">
          <IconButton
            iconProps={{
              as: icons[args.icon],
              size: 'tiny',
            }}
          />
        </Flex>
        <Flex marginRight="spacingS">
          <IconButton
            iconProps={{
              as: icons[args.icon],
              size: 'small',
            }}
          />
        </Flex>
        <Flex marginRight="spacingS">
          <IconButton
            iconProps={{
              as: icons[args.icon],
              size: 'medium',
            }}
          />
        </Flex>
        <Flex marginRight="spacingS">
          <IconButton
            iconProps={{
              as: icons[args.icon],
              size: 'large',
            }}
          />
        </Flex>
      </Flex>

      <SectionHeading as="h3" marginTop="spacingL" marginBottom="spacingS">
        IconButton disabled
      </SectionHeading>

      <IconButton
        iconProps={{
          as: icons[args.icon],
        }}
        buttonType="primary"
        label="Add New Element"
        disabled
      />
      {/* Not sure what how this option should look like and where it is used */}

      <SectionHeading as="h3" marginTop="spacingL" marginBottom="spacingS">
        IconButton with dropdown
      </SectionHeading>

      <IconButton
        iconProps={{
          as: icons[args.icon],
        }}
        buttonType="primary"
        label="Add New Element"
        withDropdown
      />
    </>
  );
};
