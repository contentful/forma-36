import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2, boolean } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import IconButton from './IconButton';
import { iconName } from './../Icon/constants';

storiesOf('Components|IconButton', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <IconButton
        iconProps={{
          icon: selectV2(
            'Icon',
            Object.keys(iconName),
            Object.keys(iconName)[0],
          ),
        }}
        buttonType={selectV2('Button Type', [
          'primary',
          'positive',
          'negative',
          'secondary',
          'muted',
        ])}
        label={text('Label (screenreader only)', 'Add New Element')}
        disabled={boolean('Disabled', false)}
        withDropdown={boolean('With dropdown', false)}
        extraClassNames={text('Extra Class Names', '')}
      />
    )),
  );
