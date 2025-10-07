import React, { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { SectionHeading, Paragraph } from '@contentful/f36-typography';
import { Flex, Stack, Box } from '@contentful/f36-core';
import { TextInput } from '@contentful/f36-forms';
import { Icon } from '@contentful/f36-icon';
import * as icons from '@contentful/f36-icons';

import { IconButton } from '../src/IconButton';

export default {
  title: 'Components/Button components/IconButton',
  component: IconButton,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    icon: {
      control: 'select',
      options: ['', ...Object.keys(icons)],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: {
      control: 'select',
      options: ['negative', 'positive', 'primary', 'secondary', 'transparent'],
    },
  },
} as Meta;

export const Basic = {
  render: ({ icon, 'aria-label': ariaLabel, iconProps, ...props }) => (
    <IconButton
      icon={icon && <Icon as={icons[icon]} {...iconProps} />}
      aria-label={ariaLabel}
      {...props}
    />
  ),

  args: {
    icon: 'StarIcon',
    'aria-label': 'Label',
    iconProps: {
      color: 'colorPrimary',
      size: 'medium',
    },
    variant: 'transparent',
  },
};

export const WithTooltip = {
  render: ({ icon, iconProps, ...props }) => (
    <>
      <Flex marginBottom="spacingS">
        <IconButton
          icon={icon && <Icon as={icons[icon]} {...iconProps} />}
          aria-label={'Start the process'}
          withTooltip
          {...props}
        />
      </Flex>
      <Flex marginBottom="spacingS">
        <IconButton
          icon={icon && <Icon as={icons[icon]} {...iconProps} />}
          aria-label={'Start the process'}
          withTooltip
          tooltipProps={{ content: 'Different Content', isVisible: true }}
          {...props}
        />
      </Flex>
    </>
  ),

  args: {
    icon: 'StarIcon',
    'aria-label': 'Label',
    iconProps: {
      color: 'colorPrimary',
      size: 'medium',
    },
    variant: 'transparent',
  },
};

export const ColoredIconInTransparentIconButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Flex flexDirection="column" isInline>
      <SectionHeading>Click on the icon to change its color</SectionHeading>
      <Paragraph>
        We allow this functionality only for transparent variant of the
        IconButton component
      </Paragraph>
      <Box>
        <IconButton
          onClick={() => setIsActive(!isActive)}
          variant="transparent"
          icon={
            <Icon
              as={icons.StarIcon}
              color={isActive ? 'colorPrimary' : 'colorWarning'}
            />
          }
          aria-label="Close"
        />
      </Box>
    </Flex>
  );
};

export const WithTextInput = () => {
  return (
    <Stack flexDirection="column">
      <TextInput.Group>
        <TextInput aria-label="Content type name" defaultValue="blog" />
        <IconButton
          variant="secondary"
          icon={<icons.LockSimpleIcon />}
          aria-label="Unlock"
        />
      </TextInput.Group>
      <TextInput.Group>
        <TextInput
          size="small"
          aria-label="Content type name"
          defaultValue="blog"
        />
        <IconButton
          size="small"
          variant="secondary"
          icon={<icons.LockSimpleIcon />}
          aria-label="Unlock"
        />
      </TextInput.Group>
      <TextInput.Group spacing="spacingS">
        <TextInput aria-label="Content type name" defaultValue="blog" />
        <IconButton
          variant="secondary"
          icon={<icons.LockSimpleIcon />}
          aria-label="Unlock"
        />
      </TextInput.Group>
      <TextInput.Group spacing="spacingS">
        <TextInput
          size="small"
          aria-label="Content type name"
          defaultValue="blog"
        />
        <IconButton
          size="small"
          variant="secondary"
          icon={<icons.LockSimpleIcon />}
          aria-label="Unlock"
        />
      </TextInput.Group>
    </Stack>
  );
};

export const Overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Variants
      </SectionHeading>

      <Stack spacing="spacingXs" marginBottom="spacingM">
        <IconButton
          variant="transparent"
          icon={<Icon as={icons.XIcon} />}
          aria-label="Close"
        />

        <IconButton
          variant="transparent"
          icon={<Icon as={icons.DotsThreeIcon} />}
          aria-label="More"
        />

        <IconButton
          variant="secondary"
          icon={<Icon as={icons.DownloadSimpleIcon} />}
          aria-label="Download"
        />

        <IconButton
          variant="secondary"
          icon={<Icon as={icons.DownloadSimpleIcon} />}
          aria-label="Loading"
          isLoading
        />

        <IconButton
          variant="positive"
          icon={<Icon as={icons.DotsSixVerticalIcon} />}
          aria-label="Resize"
        />

        <IconButton
          variant="negative"
          icon={<Icon as={icons.TrashSimpleIcon} />}
          aria-label="Delete"
        />

        <IconButton
          variant="primary"
          icon={<Icon as={icons.PlusIcon} />}
          aria-label="Add"
        />
      </Stack>
      <Stack spacing="spacingXs" marginBottom="spacingM">
        <IconButton
          variant="primary"
          icon={<Icon as={icons.PlusIcon} />}
          aria-label="Plus"
          size="small"
        />

        <IconButton
          variant="primary"
          icon={<Icon as={icons.PlusIcon} />}
          aria-label="Plus"
          size="medium"
        />
      </Stack>
    </Flex>
  </>
);
