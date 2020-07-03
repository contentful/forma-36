import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import NavigationIcon from './NavigationIcon';
import { navigationIconName } from './constants';

storiesOf('(alpha)|NavigationIcon', module)
  .addParameters({
    propTypes: NavigationIcon['__docgenInfo'],
  })
  .add('NavigationIcon (default)', () => (
    <NavigationIcon
      icon={select('icon', Object.keys(navigationIconName), Object.keys(navigationIconName)[0])}
      size={select(
        'size',
        {
          Small: 'small',
          'Medium (default)': 'medium',
          Large: 'large',
          Xlarge: 'xlarge'
        },
        'medium',
      )}
      color={select(
        'color',
        {
          'Positive(default)': 'positive',
          White: 'white',
        },
        'primary',
      )}
      tag={select(
        'tagType',
        {
          'div(default)': 'div',
          span: 'span',
        },
        'div',
      )}
      className={text('className', '')}
    />
  ));