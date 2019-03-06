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
  ));
