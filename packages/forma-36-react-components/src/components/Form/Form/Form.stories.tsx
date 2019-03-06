import React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { StateDecorator, Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import Form from './Form';
import FieldGroup from '../FieldGroup';
import Button from '../../Button';
import TextField from '../../TextField';
import CheckboxField from '../../CheckboxField';

const store = new Store({
  agreeTerms: 'yes',
});

storiesOf('Components|Form', module)
  .addDecorator(StateDecorator(store) as StoryDecorator)
  .add('default', () => (
    <Form
      onSubmit={action('onSubmit')}
      spacing={select(
        'Spacing',
        {
          Default: 'default',
          Condensed: 'condensed',
        },
        'default',
      )}
    >
      <TextField
        required
        name="nameInput"
        id="nameInput"
        labelText="Name"
        value="Johannes Bugiel"
        helpText="Please enter your name"
      />
      <TextField
        required
        name="emailInput"
        id="emailInput"
        labelText="E-Mail"
        value="johannes.bugiel@contentful.com"
        helpText="Please enter your mail"
      />
      <FieldGroup row={boolean('Field Group Row', false)}>
        <CheckboxField
          labelText="I agree"
          value="yes"
          helpText="Click if you agree"
          onChange={e =>
            store.set({ agreeTerms: (e.target as HTMLInputElement).value })
          }
          checked={store.state.agreeTerms === 'yes'}
          id="termsCheckboxYes"
        />
        <CheckboxField
          labelText="I don't agree"
          value="no"
          onChange={e =>
            store.set({ agreeTerms: (e.target as HTMLInputElement).value })
          }
          checked={store.state.agreeTerms === 'no'}
          helpText="Click if you don't agree"
          id="termsCheckboxNo"
        />
      </FieldGroup>
      <Button>Submit</Button>
    </Form>
  ));
