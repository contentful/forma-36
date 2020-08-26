import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import IconButton from './IconButton';
import { iconName } from '../Icon/constants';

storiesOf('Components/IconButton', module)
  .addParameters({
    propTypes: IconButton['__docgenInfo'],
  })
  .add('default', () => (
    <IconButton
      iconProps={{
        icon: select('icon', Object.keys(iconName), Object.keys(iconName)[0]),
      }}
      buttonType={select('buttonType', [
        'primary',
        'positive',
        'negative',
        'secondary',
        'muted',
        'white',
      ])}
      label={text('label (screenreader only)', 'Add New Element')}
      disabled={boolean('disabled', false)}
      withDropdown={boolean('withDropdown', false)}
      className={text('className', '')}
    />
  ));
