import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, selectV2 } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { iconName } from './../Icon/constants';

import Button from './Button';

storiesOf('Components|Button', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <div style={{ width: 200, display: 'flex', justifyContent: 'center' }}>
        <Button
          extraClassNames={text('Extra Class Names', '')}
          icon={selectV2(
            'Icon',
            [undefined, ...Object.keys(iconName)],
            undefined,
          )}
          buttonType={selectV2(
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
          size={selectV2('Size', [undefined, 'small', 'large'], undefined)}
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
    )),
  );
