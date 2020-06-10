import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import NavigationIcon from './NavigationIcon';
import { navigationIconName } from './constants';

storiesOf('Components|NavigationIcon', module)
  .addParameters({
    propTypes: NavigationIcon['__docgenInfo'],
  })
  .add('NavigationIcon (default)', () => (
    <NavigationIcon
      icon={select('icon', Object.keys(navigationIconName), Object.keys(navigationIconName)[0])}
      size={select(
        'size',
        {
          'Medium (default)': 'medium',
          Large: 'large',
        },
        'medium',
      )}
      color={select(
        'color',
        {
          'Primary (default)': 'primary',
          Positive: 'positive',
          Negative: 'negative',
          Warning: 'warning',
          Secondary: 'secondary',
          Muted: 'muted',
          White: 'white',
        },
        'primary',
      )}
      className={text('className', '')}
    />
  ));