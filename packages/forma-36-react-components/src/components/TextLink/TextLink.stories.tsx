import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextLink from './TextLink';
import notes from './TextLink.md';
import { iconName } from '../Icon/constants';

storiesOf('Components|TextLink', module)
  .addParameters({
    propTypes: TextLink['__docgenInfo'],
  })
  .add(
    'default',
    () => (
      <TextLink
        href={text('Href', '')}
        onClick={action('onClick')}
        linkType={select(
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
        icon={select('Icon', ['', ...Object.keys(iconName)], undefined)}
      >
        {text('Label (children)', 'Text Link Label')}
      </TextLink>
    ),
    { notes },
  );
