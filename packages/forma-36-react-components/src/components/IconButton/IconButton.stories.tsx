import React from 'react';

import IconButton, { IconButtonProps } from './IconButton';
import { iconName } from '../Icon/constants';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';
import Paragraph from '../Typography/Paragraph';

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
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    iconProps: { control: { disable: true } },
    icon: { control: { type: 'select', options: iconName } },
    iconSize: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'medium', 'large'],
      },
    },
  },
};

interface Args extends IconButtonProps {
  icon: IconButtonProps['iconProps']['icon'];
  iconSize?: IconButtonProps['iconProps']['size'];
}

export const Basic = ({ icon, iconSize, ...args }: Args) => (
  <IconButton iconProps={{ icon, size: iconSize }} {...args} />
);
Basic.args = {
  icon: iconName.Star,
  iconSize: 'medium',
};

export const Overview = () => (
  <>
    <Flex marginBottom="spacingXs">
      <SectionHeading element="h3">IconButton colors</SectionHeading>
    </Flex>
    {Object.keys(IconButtonTypes).map((color, idx) => (
      <Flex
        padding="spacingXs"
        alignItems="center"
        style={{ backgroundColor: color === 'white' ? 'black' : 'transparent' }}
        key={idx}
      >
        <Flex marginRight="spacingS">
          <IconButton
            iconProps={{
              icon: 'Star',
            }}
            buttonType={IconButtonTypes[color]}
            label="Add New Element"
          />
        </Flex>
        <Paragraph style={{ color: color === 'white' ? 'white' : 'initial' }}>
          {color}
        </Paragraph>
      </Flex>
    ))}
    <Flex marginTop="spacingL" marginBottom="spacingS">
      <SectionHeading element="h3">IconButton sizes</SectionHeading>
    </Flex>
    <Flex flexDirection="row">
      <Flex marginRight="spacingS">
        <IconButton
          iconProps={{
            icon: 'Star',
            size: 'tiny',
          }}
        />
      </Flex>
      <Flex marginRight="spacingS">
        <IconButton
          iconProps={{
            icon: 'Star',
            size: 'small',
          }}
        />
      </Flex>
      <Flex marginRight="spacingS">
        <IconButton
          iconProps={{
            icon: 'Star',
            size: 'medium',
          }}
        />
      </Flex>
      <Flex marginRight="spacingS">
        <IconButton
          iconProps={{
            icon: 'Star',
            size: 'large',
          }}
        />
      </Flex>
    </Flex>
    <Flex marginTop="spacingL" marginBottom="spacingS">
      <SectionHeading element="h3">IconButton disabled</SectionHeading>
    </Flex>
    <IconButton
      iconProps={{
        icon: 'Star',
      }}
      buttonType="primary"
      label="Add New Element"
      disabled
    />
    {/* Not sure what how this option should look like and where it is used */}
    <Flex marginTop="spacingL" marginBottom="spacingS">
      <SectionHeading element="h3">IconButton with dropdown</SectionHeading>
    </Flex>
    <IconButton
      iconProps={{
        icon: 'Star',
      }}
      buttonType="primary"
      label="Add New Element"
      withDropdown
    />
  </>
);
