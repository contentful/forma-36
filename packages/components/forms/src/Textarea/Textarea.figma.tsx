import React from 'react';
import figma from '@figma/code-connect';
import { Textarea } from './Textarea';
import { FormControl } from '../FormControl/CompoundFormControl';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=16509:101241';

figma.connect(Textarea, FIGMA_URL, {
  props: {
    label: figma.boolean('Show label', {
      true: <FormControl.Label>Label</FormControl.Label>,
      false: undefined,
    }),
    helpText: figma.boolean('Help text', {
      true: <FormControl.HelpText>Help text</FormControl.HelpText>,
      false: undefined,
    }),
    counter: figma.boolean('Counter', {
      true: <FormControl.Counter />,
      false: undefined,
    }),
    isRequired: figma.boolean('Required'),
    isInvalid: figma.enum('Invalid', {
      True: true,
      False: false,
    }),
  },
  example: ({ label, helpText, counter, isRequired, isInvalid }) => (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      {label}
      <Textarea />
      {helpText}
      {counter}
    </FormControl>
  ),
});
