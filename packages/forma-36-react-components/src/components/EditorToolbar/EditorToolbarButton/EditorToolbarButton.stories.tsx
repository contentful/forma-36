import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import EditorToolbarButton from './EditorToolbarButton';
import { iconName } from './../../Icon/constants';
import EditorToolbar from '../EditorToolbar/EditorToolbar';

storiesOf('Components/EditorToolbar/EditorToolbarButton', module)
  .addParameters({
    propTypes: EditorToolbarButton['__docgenInfo'],
    component: EditorToolbar,
  })
  .add('default', () => (
    <EditorToolbarButton
      icon={select('icon', Object.keys(iconName), Object.keys(iconName)[0])}
      tooltip={text('tooltip', 'Insert a H1 tag')}
      label={text('label (screenreader only)', 'H1')}
      isActive={boolean('isActive', false)}
      disabled={boolean('disabled', false)}
      withDropdown={boolean('withDropdown', false)}
      onClick={action('onClick')}
    />
  ));
