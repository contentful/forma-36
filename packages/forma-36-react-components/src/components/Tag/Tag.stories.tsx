import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Tag from './Tag';

storiesOf('Components|Tag', module)
  .addParameters({
    propTypes: Tag['__docgenInfo'],
  })
  .add('default', () => (
    <Tag
      tagType={select(
        'tagType',
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
      extraClassNames={text('extraClassNames', '')}
    >
      {text('Children', 'Published')}
    </Tag>
  ));
