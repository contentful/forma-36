import React from 'react';
import figma from '@figma/code-connect';
import { Checkbox } from './Checkbox';

const figmaNodeUrl =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=10943:4306';

/**
 * Checked: False
 */
figma.connect(Checkbox, figmaNodeUrl, {
  variant: { Checked: 'False' },
  props: {
    isDisabled: figma.enum('Disabled', {
      True: true,
      False: undefined,
    }),
    isInvalid: figma.boolean('Invalid'),
    helpText: figma.boolean('Help text', {
      true: 'Help text',
      false: undefined,
    }),
  },
  example: ({ isDisabled, isInvalid, helpText }) => (
    <Checkbox isDisabled={isDisabled} isInvalid={isInvalid} helpText={helpText}>
      Label
    </Checkbox>
  ),
});

/**
 * Checked: True
 */
figma.connect(Checkbox, figmaNodeUrl, {
  variant: { Checked: 'True' },
  props: {
    isDisabled: figma.enum('Disabled', {
      True: true,
      False: undefined,
    }),
    isInvalid: figma.boolean('Invalid'),
    helpText: figma.boolean('Help text', {
      true: 'Help text',
      false: undefined,
    }),
  },
  example: ({ isDisabled, isInvalid, helpText }) => (
    <Checkbox
      isChecked
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      helpText={helpText}
    >
      Label
    </Checkbox>
  ),
});

/**
 * Checked: Indeterminate
 */
figma.connect(Checkbox, figmaNodeUrl, {
  variant: { Checked: 'Indeterminate' },
  props: {
    isDisabled: figma.enum('Disabled', {
      True: true,
      False: undefined,
    }),
    isInvalid: figma.boolean('Invalid'),
    helpText: figma.boolean('Help text', {
      true: 'Help text',
      false: undefined,
    }),
  },
  example: ({ isDisabled, isInvalid, helpText }) => (
    <Checkbox
      isIndeterminate
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      helpText={helpText}
    >
      Label
    </Checkbox>
  ),
});
