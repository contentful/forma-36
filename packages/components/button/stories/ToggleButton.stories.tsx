import React, { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { SectionHeading } from '@contentful/f36-typography';
import { action } from 'storybook/actions';

import { Flex, Stack } from '@contentful/f36-core';
import { Icon } from '@contentful/f36-icon';
import * as icons from '@contentful/f36-icons';

import { ButtonGroup } from '../src';
import { ToggleButton, type ToggleButtonProps } from '../src/ToggleButton';

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

export const Basic = {
  render: ({ icon, children, ...rest }: ToggleButtonProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <ToggleButton
        isActive={isActive}
        // @ts-expect-error - The icon React Element can't be passed as a string
        icon={icon && <Icon as={icons[icon]} />}
        onToggle={() => {
          setIsActive(!isActive);
        }}
        {...rest}
      >
        {children}
      </ToggleButton>
    );
  },

  args: {
    isDisabled: false,
    icon: 'ThumbsUpIcon',
    children: 'Like',
  },
};

export const Grouped = () => {
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(true);
  const [isUnderline, setIsUnderline] = useState(false);

  return (
    <ButtonGroup>
      <ToggleButton
        isActive={isItalic}
        icon={<Icon as={icons.TextItalicIcon} />}
        aria-label="Italic"
        size="small"
        onToggle={() => {
          setIsItalic(!isItalic);
        }}
      />
      <ToggleButton
        isActive={isBold}
        icon={<Icon as={icons.TextBIcon} />}
        aria-label="Bold"
        size="small"
        onToggle={() => {
          setIsBold(!isBold);
        }}
      />
      <ToggleButton
        isActive={isUnderline}
        icon={<Icon as={icons.TextUnderlineIcon} />}
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
        icon={<Icon as={icons.TextItalicIcon} />}
        aria-label="Italic"
        size="small"
        onToggle={() => setIsActive('italic')}
      />
      <ToggleButton
        isActive={isActive === 'bold'}
        icon={<Icon as={icons.TextBIcon} />}
        aria-label="Bold"
        size="small"
        onToggle={() => setIsActive('bold')}
      />
      <ToggleButton
        isActive={isActive === 'underline'}
        icon={<Icon as={icons.TextUnderlineIcon} />}
        aria-label="Underline"
        size="small"
        onToggle={() => setIsActive('underline')}
      />
    </ButtonGroup>
  );
};

export const Overview = {
  render: ({ icon, onToggle, ...rest }: ToggleButtonProps) => (
    <>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Toggle variants
        </SectionHeading>

        <Stack marginBottom="spacingM" spacing="spacingXs">
          <ToggleButton onToggle={onToggle} {...rest}>
            Default
          </ToggleButton>

          <ToggleButton isActive onToggle={onToggle} {...rest}>
            Active
          </ToggleButton>

          <ToggleButton isDisabled onToggle={onToggle} {...rest}>
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
            onToggle={onToggle}
            // @ts-expect-error - The icon React Element can't be passed as a string
            icon={icon && <Icon as={icons[icon]} />}
            {...rest}
          >
            Default
          </ToggleButton>

          <ToggleButton
            onToggle={onToggle}
            isActive
            // @ts-expect-error - The icon React Element can't be passed as a string
            icon={icon && <Icon as={icons[icon]} />}
            {...rest}
          >
            Active
          </ToggleButton>

          <ToggleButton
            onToggle={onToggle}
            isDisabled
            // @ts-expect-error - The icon React Element can't be passed as a string
            icon={icon && <Icon as={icons[icon]} />}
            {...rest}
          >
            Disabled
          </ToggleButton>
        </Stack>
      </Flex>
    </>
  ),

  args: {
    onToggle: action('toggled'),
    icon: 'EyeIcon',
  },
};
