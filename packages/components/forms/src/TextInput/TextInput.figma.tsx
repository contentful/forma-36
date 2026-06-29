import React from 'react';
import figma from '@figma/code-connect';
import { TextInput } from './CompoundTextInput';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=11213:118061';

figma.connect(TextInput, FIGMA_URL, {
  variant: { 'Field type': 'Default' },
  props: {
    size: figma.enum('Size', {
      Medium: 'medium',
      Small: 'small',
    }),
    isDisabled: figma.enum('Disabled', {
      True: true,
      False: false,
    }),
    isInvalid: figma.enum('Invalid', {
      True: true,
      False: false,
    }),
    defaultValue: figma.string('Value'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ size, isDisabled, isInvalid, defaultValue, icon }) => (
    <TextInput
      size={size}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      defaultValue={defaultValue}
      icon={icon}
    />
  ),
});

figma.connect(TextInput, FIGMA_URL, {
  variant: { 'Field type': 'Group merged' },
  props: {
    size: figma.enum('Size', {
      Medium: 'medium',
      Small: 'small',
    }),
    isDisabled: figma.enum('Disabled', {
      True: true,
      False: false,
    }),
    isInvalid: figma.enum('Invalid', {
      True: true,
      False: false,
    }),
    defaultValue: figma.string('Value'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ size, isDisabled, isInvalid, defaultValue, icon }) => (
    <TextInput.Group spacing="none">
      <TextInput
        size={size}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        defaultValue={defaultValue}
        icon={icon}
      />
    </TextInput.Group>
  ),
});

figma.connect(TextInput, FIGMA_URL, {
  variant: { 'Field type': 'Group spaced' },
  props: {
    size: figma.enum('Size', {
      Medium: 'medium',
      Small: 'small',
    }),
    isDisabled: figma.enum('Disabled', {
      True: true,
      False: false,
    }),
    isInvalid: figma.enum('Invalid', {
      True: true,
      False: false,
    }),
    defaultValue: figma.string('Value'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ size, isDisabled, isInvalid, defaultValue, icon }) => (
    <TextInput.Group spacing="spacingS">
      <TextInput
        size={size}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        defaultValue={defaultValue}
        icon={icon}
      />
    </TextInput.Group>
  ),
});
