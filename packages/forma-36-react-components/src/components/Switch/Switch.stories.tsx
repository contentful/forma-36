import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Switch from './Switch';

storiesOf('Components|Switch', module)
  .addParameters({
    propTypes: Switch['__docgenInfo'],
  })
  .add('default', () => (
    <Switch
      className={text('className', '')}
      isChecked={boolean('isChecked', false)}
      isDisabled={boolean('isDisabled', false)}
      labelText={text('labelText', 'My label text')}
      onToggle={action('onToggle')}
    />
  ));
