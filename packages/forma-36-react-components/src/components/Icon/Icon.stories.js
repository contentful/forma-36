import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import Icon from './Icon';
import { iconName } from './constants';

storiesOf('Components|Icon', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <Icon
        icon={select('Icon', Object.keys(iconName), Object.keys(iconName)[0])}
        size={select(
          'Size',
          {
            'Small (default)': 'small',
            Large: 'large',
          },
          'small',
        )}
        color={select(
          'Color',
          {
            'Primary (default)': 'primary',
            Positive: 'positive',
            Negative: 'negative',
            Secondary: 'secondary',
            Muted: 'muted',
            White: 'white',
          },
          'primary',
        )}
        extraClassNames={text('Extra Class Names', '')}
      />
    )),
  )
  .add(
    'All Icons',
    withInfo()(() => (
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
                icon={icon}
                style={{ marginRight: '4px', verticalAlign: 'middle' }}
              />
              <span
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
              >
                {icon}
              </span>
            </div>
          ))}
      </div>
    )),
  );
