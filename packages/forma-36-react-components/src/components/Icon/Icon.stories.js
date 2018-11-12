import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2 } from '@storybook/addon-knobs/react';
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
        icon={selectV2('Icon', Object.keys(iconName), Object.keys(iconName)[0])}
        size={selectV2(
          'Size',
          {
            'Small (default)': 'small',
            Large: 'large',
          },
          'small',
        )}
        color={selectV2(
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
