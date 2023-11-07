import React, { useState } from 'react';
import type { Meta } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from '@storybook/addon-actions';

import { Flex, Stack } from '@contentful/f36-core';
import { Icon } from '@contentful/f36-icon';
import * as icons from '@contentful/f36-icons';

import { ButtonGroup } from '../src';
import { ToggleButton } from '../src/ToggleButton';

export default {
  title: 'Components/Button components/ToggleButton',
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

export const Basic = ({ icon, children, isDisabled }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ToggleButton
      isDisabled={isDisabled}
      isActive={isActive}
      onToggle={() => {
        setIsActive(!isActive);
      }}
      icon={icon && <Icon as={icons[icon]} />}
    >
      {children}
    </ToggleButton>
  );
};

Basic.args = {
  isDisabled: false,
  icon: 'ThumbUpTrimmedIcon',
  children: 'Like',
};

export const Grouped = () => {
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(true);
  const [isUnderline, setIsUnderline] = useState(false);

  return (
    <ButtonGroup>
      <ToggleButton
        isActive={isItalic}
        icon={<Icon as={icons.FormatItalicIcon} />}
        aria-label="Italic"
        size="small"
        onToggle={() => {
          setIsItalic(!isItalic);
        }}
      />
      <ToggleButton
        isActive={isBold}
        icon={<Icon as={icons.FormatBoldIcon} />}
        aria-label="Bold"
        size="small"
        onToggle={() => {
          setIsBold(!isBold);
        }}
      />
      <ToggleButton
        isActive={isUnderline}
        icon={<Icon as={icons.FormatUnderlinedIcon} />}
        aria-label="Underline"
        size="small"
        onToggle={() => {
          setIsUnderline(!isUnderline);
        }}
      />
    </ButtonGroup>
  );
};

export const GroupedWithOnlyOneActive = () => {
  const [isActive, setIsActive] = useState('bold');

  return (
    <ButtonGroup>
      <ToggleButton
        isActive={isActive === 'italic'}
        icon={<Icon as={icons.FormatItalicIcon} />}
        aria-label="Italic"
        size="small"
        onToggle={() => setIsActive('italic')}
      />
      <ToggleButton
        isActive={isActive === 'bold'}
        icon={<Icon as={icons.FormatBoldIcon} />}
        aria-label="Bold"
        size="small"
        onToggle={() => setIsActive('bold')}
      />
      <ToggleButton
        isActive={isActive === 'underline'}
        icon={<Icon as={icons.FormatUnderlinedIcon} />}
        aria-label="Underline"
        size="small"
        onToggle={() => setIsActive('underline')}
      />
    </ButtonGroup>
  );
};

export const Overview = ({ icon, ...props }) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Toggle variants
      </SectionHeading>

      <Stack marginBottom="spacingM" spacing="spacingXs">
        <ToggleButton onToggle={props.onToggle}>Default</ToggleButton>

        <ToggleButton isActive onToggle={props.onToggle}>
          Active
        </ToggleButton>

        <ToggleButton isDisabled onToggle={props.onToggle}>
          Disabled
        </ToggleButton>
      </Stack>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Toggle Button with icon
      </SectionHeading>

      <Stack marginBottom="spacingM" spacing="spacingXs">
        <ToggleButton
          onToggle={props.onToggle}
          icon={icon && <Icon as={icons[icon]} />}
        >
          Default
        </ToggleButton>

        <ToggleButton
          onToggle={props.onToggle}
          isActive
          icon={icon && <Icon as={icons[icon]} />}
        >
          Active
        </ToggleButton>

        <ToggleButton
          onToggle={props.onToggle}
          isDisabled
          icon={icon && <Icon as={icons[icon]} />}
        >
          Disabled
        </ToggleButton>
      </Stack>
    </Flex>
  </>
);

Overview.args = {
  onToggle: action('toggled'),
  icon: 'PreviewIcon',
};
