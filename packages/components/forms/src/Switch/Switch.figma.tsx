import React from 'react';
import figma from '@figma/code-connect';

import { Switch } from './Switch';

figma.connect(
  Switch,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=11289:95266',
  {
    props: {
      size: figma.enum('Size', {
        Medium: 'medium',
        Small: 'small',
      }),
      isChecked: figma.enum('Checked', {
        True: true,
        False: false,
      }),
      isDisabled: figma.enum('Disabled', {
        True: true,
        False: false,
      }),
      isInvalid: figma.boolean('Invalid'),
      helpText: figma.boolean('Help text', {
        true: 'Help text content',
        false: undefined,
      }),
    },
    example: (props) => (
      <Switch
        size={props.size}
        isChecked={props.isChecked}
        isDisabled={props.isDisabled}
        isInvalid={props.isInvalid}
        helpText={props.helpText}
      >
        Label
      </Switch>
    ),
  },
);
