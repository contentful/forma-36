import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import TextLink from './TextLink';
import { iconName } from './../Icon/constants';

storiesOf('Components|TextLink', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <TextLink
        href={text('Href', '')}
        onClick={action('onClick')}
        linkType={selectV2(
          'Link Type',
          {
            'Primary (default)': 'primary',
            Positive: 'positive',
            Negative: 'negative',
            Secondary: 'secondary',
            Muted: 'muted',
          },
          'primary',
        )}
        disabled={boolean('Disabled', false)}
        extraClassNames={text('Extra Class Names', '')}
        icon={selectV2('Icon', ['', ...Object.keys(iconName)], undefined)}
      >
        {text('Label (children)', 'Text Link Label')}
      </TextLink>
    )),
  );
