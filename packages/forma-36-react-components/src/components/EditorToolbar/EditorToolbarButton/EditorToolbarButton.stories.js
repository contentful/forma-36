import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import EditorToolbarButton from './EditorToolbarButton';
import { iconName } from './../../Icon/constants';

storiesOf('Components|EditorToolbar/EditorToolbarButton', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <EditorToolbarButton
        icon={selectV2('Icon', Object.keys(iconName), Object.keys(iconName)[0])}
        tooltip={text('Tooltip', 'Insert a H1 tag')}
        label={text('Label (screenreader only)', 'H1')}
        isActive={boolean('Active', false)}
        disabled={boolean('Disabled', false)}
        withDropdown={boolean('With dropdown', false)}
        onClick={action('onClick')}
      />
    )),
  );
