import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

// import Icon from './Icon';
import { Icon } from '@contentful/forma-36-icons';

// import { iconName } from './constants';
const iconName = {
  ArrowDown: 'ArrowDown',
  ArrowUp: 'ArrowUp',
}
storiesOf('Components/Icon', module)
  .addParameters({
    propTypes: Icon['__docgenInfo'],
    component: Icon,
  })
  .add('Icon (default)', () => (
    <Icon
      icon="ArrowDown"
      size={select(
        'size',
        {
          Tiny: 'tiny',
          'Small (default)': 'small',
          Medium: 'medium',
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
      className={text('className', '')}
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
        .filter((icon) => !icon.toLowerCase().includes('trimmed'))
        .map((icon) => (
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
