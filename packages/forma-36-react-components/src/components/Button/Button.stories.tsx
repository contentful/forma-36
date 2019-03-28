import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { iconName } from '../Icon/constants';

import Button from './Button';
import notes from './Button.md';

storiesOf('Components|Button', module)
  .addParameters({
    propTypes: Button['__docgenInfo'],
  })
  .add(
    'Button',
    () => (
      <Button
        className={text('className', '')}
        icon={select('icon', [undefined, ...Object.keys(iconName)], undefined)}
        buttonType={select(
          'buttonType',
          {
            muted: 'muted',
            primary: 'primary',
            positive: 'positive',
            negative: 'negative',
            naked: 'naked',
          },
          'muted',
        )}
        size={select('size', [undefined, 'small', 'large'], undefined)}
        loading={boolean('loading', false)}
        indicateDropdown={boolean('indicateDropdown', false)}
        disabled={boolean('disabled', false)}
        isFullWidth={boolean('isFullWidth', false)}
        onClick={action('onClick')}
        onBlur={action('onBlur')}
        href={text('href', '')}
      >
        {text('Text', 'Embed entry')}
      </Button>
    ),
    { notes },
  );
