import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Icon from './Icon';
import { iconName, iconSizes, iconColors } from './constants';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';
import Paragraph from '../Typography/Paragraph';

storiesOf('Components/Icon', module)
  .addParameters({
    propTypes: Icon['__docgenInfo'],
    component: Icon,
  })
  .add('Icon (default)', () => (
    <Icon
      icon={select('icon', Object.keys(iconName), Object.keys(iconName)[0])}
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
  ))
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Icon sizes overview</SectionHeading>
      </Flex>

      {Object.entries(iconSizes).map((icon, idx) => (
        <Flex marginBottom="spacingM" alignItems="center" key={idx}>
          <Flex marginRight="spacingS">
            <Icon icon="Calendar" color="primary" size={icon[0] as any} />
          </Flex>
          <Paragraph>{icon[1]}</Paragraph>
        </Flex>
      ))}
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Icon colors overview</SectionHeading>
      </Flex>
      {iconColors.map((color, idx) => (
        <Flex marginBottom="spacingM" alignItems="center" key={idx}>
          <Flex marginRight="spacingS">
            <Icon icon="Calendar" color={color as any} size="medium" />
          </Flex>
          <Paragraph>{color}</Paragraph>
        </Flex>
      ))}
    </>
  ));
