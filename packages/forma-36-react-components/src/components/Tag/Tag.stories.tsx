import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import Tag from './Tag';

storiesOf('Components|Tag', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <Tag
        tagType={select(
          'Tag Type',
          {
            'Primary (default)': 'primary',
            Positive: 'positive',
            Negative: 'negative',
            Warning: 'warning',
            Secondary: 'secondary',
            Muted: 'muted',
          },
          'primary',
        )}
        extraClassNames={text('Extra Class Names', '')}
      >
        {text('Children', 'Published')}
      </Tag>
    )),
  );
