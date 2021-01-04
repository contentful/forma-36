import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import RadioButton from './RadioButton';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';

storiesOf('Components/RadioButton', module)
  .addParameters({
    propTypes: RadioButton['__docgenInfo'],
    component: RadioButton,
  })
  .add('default', () => (
    <RadioButton
      className={text('className', '')}
      id="Checkbox"
      checked={boolean('Checked', false)}
      labelText={(text('Aria label text'), 'some label text')}
      disabled={boolean('Disabled', false)}
      required={boolean('Required', false)}
      name={text('Name', 'some-name')}
      willBlurOnEsc={boolean('willBlurOnEsc', true)}
    />
  ))
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Radio button default</SectionHeading>
      </Flex>
      <RadioButton id="Checkbox" labelText="some label text" name="some-name" />
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Radio button checked</SectionHeading>
      </Flex>
      <RadioButton
        id="Checkbox"
        checked
        labelText="some label text"
        name="some-name"
      />
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Radio button disabled</SectionHeading>
      </Flex>
      <RadioButton
        id="Checkbox"
        labelText="some label text"
        disabled
        name="some-name"
      />
    </>
  ));
