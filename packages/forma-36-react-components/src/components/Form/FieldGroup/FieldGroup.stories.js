import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import CheckboxField from '../../CheckboxField';

import FieldGroup from './FieldGroup';

storiesOf('Components|Form/FieldGroup', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
      width: 400,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <FieldGroup
        extraClassNames={text('Extra Class Names', '')}
        row={boolean('Row', false)}
      >
        <CheckboxField
          labelText="Do you agree?"
          helpText="Click if you agree"
          id="termsCheckbox"
        />
        <CheckboxField
          labelText="Do you really agree?"
          helpText="Click if you really agree"
          id="termsCheckbox"
        />
      </FieldGroup>
    )),
  );
