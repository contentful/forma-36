import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { iconName } from '../Icon/constants';

import Button from './Button';
import notes from './Button.md';

storiesOf('Components|Button', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator((story, context) =>
    withNotes({ markdown: notes })(story)(context),
  )
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add('Button', () => (
    <div style={{ width: 200, display: 'flex', justifyContent: 'center' }}>
      <Button
        extraClassNames={text('Extra Class Names', '')}
        icon={select('Icon', [undefined, ...Object.keys(iconName)], undefined)}
        buttonType={select(
          'Type',
          {
            muted: 'muted',
            primary: 'primary',
            positive: 'positive',
            negative: 'negative',
            naked: 'naked',
          },
          'muted',
        )}
        size={select('Size', [undefined, 'small', 'large'], undefined)}
        loading={boolean('Loading', false)}
        indicateDropdown={boolean('Show dropdown chevron', false)}
        disabled={boolean('Disabled', false)}
        isFullWidth={boolean('Is full width', false)}
        onClick={action('OnClick')}
        onBlur={action('OnBlur')}
        href={text('Href', '')}
      >
        {text('Text', 'Embed entry')}
      </Button>
    </div>
  ));
