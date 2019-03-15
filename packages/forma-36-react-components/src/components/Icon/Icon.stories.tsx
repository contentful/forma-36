import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Icon from './Icon';
import { iconName } from './constants';

storiesOf('Components|Icon', module)
  .addParameters({
    propTypes: Icon['__docgenInfo'],
  })
  .add('Icon (default)', () => (
    <Icon
      icon={select('icon', Object.keys(iconName), Object.keys(iconName)[0])}
      size={select(
        'size',
        {
          'Small (default)': 'small',
          Large: 'large',
        },
        'small',
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
      extraClassNames={text('extraClassNames', '')}
    />
  ))
  .add('Icon (all icons)', () => (
    <div
      style={{
        columns: '3',
        width: '800px',
      }}
    >
      {Object.keys(iconName)
        .filter(icon => !icon.toLowerCase().includes('trimmed'))
        .map(icon => (
          <div
            key={icon}
            style={{ padding: '4px', fontSize: '14px', lineHeight: '21px' }}
          >
            <Icon
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              icon={icon as any}
              style={{ marginRight: '4px', verticalAlign: 'middle' }}
            />
            <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              {icon}
            </span>
          </div>
        ))}
    </div>
  ));
