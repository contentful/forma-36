import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import EditorToolbarButton from './EditorToolbarButton';
import { iconName } from './../../Icon/constants.ts';

storiesOf('Components|EditorToolbar/EditorToolbarButton', module).add(
  'default',
  () => (
    <EditorToolbarButton
      icon={select('Icon', Object.keys(iconName), Object.keys(iconName)[0])}
      tooltip={text('Tooltip', 'Insert a H1 tag')}
      label={text('Label (screenreader only)', 'H1')}
      isActive={boolean('Active', false)}
      disabled={boolean('Disabled', false)}
      withDropdown={boolean('With dropdown', false)}
      onClick={action('onClick')}
    />
  ),
);
