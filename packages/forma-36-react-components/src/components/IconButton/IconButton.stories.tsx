import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import IconButton from './IconButton';
import { iconName } from '../Icon/constants';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';
import Paragraph from '../Typography/Paragraph';

// TODO align colors between Icon and IconButton? (warning is missing in IconButton)
export const iconButtonColors = [
  'primary',
  'positive',
  'negative',
  'muted',
  'secondary',
  'white',
];

storiesOf('Components/IconButton', module)
  .addParameters({
    propTypes: IconButton['__docgenInfo'],
    component: IconButton,
  })
  .add('default', () => (
    <IconButton
      iconProps={{
        icon: select('icon', Object.keys(iconName), Object.keys(iconName)[0]),
      }}
      buttonType={select('buttonType', [
        'primary',
        'positive',
        'negative',
        'secondary',
        'muted',
        'white',
      ])}
      label={text('label (screenreader only)', 'Add New Element')}
      disabled={boolean('disabled', false)}
      withDropdown={boolean('withDropdown', false)}
      className={text('className', '')}
    />
  ))
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          Icon button colors overview
        </SectionHeading>
      </Flex>
      {iconButtonColors.map((color, idx) => (
        <Flex marginBottom="spacingM" alignItems="center" key={idx}>
          <Flex marginRight="spacingS">
            <IconButton
              iconProps={{
                icon: 'Calendar',
              }}
              buttonType={color as any}
              label="Add New Element"
            />
          </Flex>
          <Paragraph>{color}</Paragraph>
        </Flex>
      ))}
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Icon button disabled</SectionHeading>
      </Flex>
      <IconButton
        iconProps={{
          icon: 'Calendar',
        }}
        buttonType="primary"
        label="Add New Element"
        disabled
      />
      {/* Not sure what how this option should look like and where it is used */}
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Icon button with dropdown</SectionHeading>
      </Flex>
      <IconButton
        iconProps={{
          icon: 'Calendar',
        }}
        buttonType="primary"
        label="Add New Element"
        withDropdown
      />
    </>
  ));
