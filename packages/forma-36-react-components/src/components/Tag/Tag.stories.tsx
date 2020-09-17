import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Tag from './Tag';

storiesOf('Components/Tag', module)
  .addParameters({
    propTypes: Tag['__docgenInfo'],
    component: Tag,
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
      entityStatusType={select(
        'Entity Status Type',
        {
          Published: 'published',
          Archived: 'archived',
          draft: 'draft',
          changed: 'changed',
          deleted: 'deleted',
          'None (default)': undefined,
        },
        undefined,
      )}
      className={text('className', '')}
    >
      {text('Children', 'Published')}
    </Tag>
  ));
