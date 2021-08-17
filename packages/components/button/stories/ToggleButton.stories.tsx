import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';
import { Box, Flex } from '@contentful/f36-core';
import { Icon } from '@contentful/f36-icon';
import * as icons from '@contentful/f36-icons';
import { ButtonGroup } from '../src';

import { ToggleButton } from '../src/ToggleButton';

export default {
  title: 'Components/Button/ToggleButton',
  component: ToggleButton,
  parameters: {
    propTypes: [ToggleButton['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    icon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
  },
} as Meta;

export const basic = ({ icon, children, ...props }) => (
  <div>
    <ToggleButton icon={icon && <Icon as={icons[icon]} />} {...props}>
      {children}
    </ToggleButton>
  </div>
);

basic.args = {
  isDisabled: false,
  isActive: false,
  icon: undefined,
  children: 'Single',
  onToggle: action('toggled'),
};

export const grouped = ({ icon }) => (
  <div>
    <ButtonGroup>
      <ToggleButton>Apples</ToggleButton>
      <ToggleButton isActive>Pears</ToggleButton>
      <ToggleButton>Peaches</ToggleButton>
      <ToggleButton>Mangos</ToggleButton>
      <ToggleButton isActive icon={icon && <Icon as={icons[icon]} />}>
        Kiwis
      </ToggleButton>
      <ToggleButton isDisabled>Bananas</ToggleButton>
    </ButtonGroup>
  </div>
);

grouped.args = {
  icon: 'PreviewIcon',
};

export const Overview = ({ icon, ...props }) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Toggle variants
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <ToggleButton onToggle={props.onToggle}>Default</ToggleButton>
        </Box>
        <Box marginRight="spacingXs">
          <ToggleButton isActive onToggle={props.onToggle}>
            Active
          </ToggleButton>
        </Box>
        <Box marginRight="spacingXs">
          <ToggleButton isDisabled onToggle={props.onToggle}>
            Disabled
          </ToggleButton>
        </Box>
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Toggle Button with icon
      </SectionHeading>

      <Flex flexDirection="row" marginBottom="spacingM">
        <Box marginRight="spacingXs">
          <ToggleButton
            onToggle={props.onToggle}
            icon={icon && <Icon as={icons[icon]} />}
          >
            Default
          </ToggleButton>
        </Box>
        <Box marginRight="spacingXs">
          <ToggleButton
            onToggle={props.onToggle}
            isActive
            icon={icon && <Icon as={icons[icon]} />}
          >
            Active
          </ToggleButton>
        </Box>
        <Box marginRight="spacingXs">
          <ToggleButton
            onToggle={props.onToggle}
            isDisabled
            icon={icon && <Icon as={icons[icon]} />}
          >
            Disabled
          </ToggleButton>
        </Box>
      </Flex>
    </Flex>
  </>
);

Overview.args = {
  onToggle: action('toggled'),
  icon: 'PreviewIcon',
};
