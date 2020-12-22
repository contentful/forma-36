import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';

storiesOf('Components/Checkbox', module)
  .addParameters({
    propTypes: Checkbox['__docgenInfo'],
    component: Checkbox,
  })
  .add('default', () => (
    <Checkbox
      className={text('className', '')}
      id="Checkbox"
      checked={boolean('checked', false)}
      labelText={(text('labelText'), 'some label text')}
      disabled={boolean('disabled', false)}
      required={boolean('required', false)}
      name={text('name', 'some-name')}
      onChange={action('onChange')}
      willBlurOnEsc={boolean('willBlurOnEsc', true)}
    />
  ))
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS" marginTop="spacingM">
        <SectionHeading element="h3">Checkbox default</SectionHeading>
      </Flex>
      <Checkbox id="Checkbox" labelText="some label text" name="some-name" />
      <Flex marginBottom="spacingS" marginTop="spacingM">
        <SectionHeading element="h3">Checkbox checked</SectionHeading>
      </Flex>
      <Checkbox
        id="Checkbox"
        checked
        labelText="some label text"
        name="some-name"
      />
      <Flex marginBottom="spacingS" marginTop="spacingM">
        <SectionHeading element="h3">Checkbox disabled</SectionHeading>
      </Flex>
      <Checkbox
        id="Checkbox"
        disabled
        labelText="some label text"
        name="some-name"
      />
    </>
  ));
