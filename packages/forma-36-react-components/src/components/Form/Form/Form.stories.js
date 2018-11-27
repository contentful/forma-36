import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import { withState } from '@dump247/storybook-state';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import Form from '.';
import FieldGroup from '../FieldGroup';
import Button from '../../Button';
import TextField from '../../TextField';
import CheckboxField from '../../CheckboxField';

storiesOf('Components|Form', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
      width: 400,
    }),
  )
  .add(
    'default',
    withState({ agreeTerms: 'yes' }, store =>
      withInfo()(() => (
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
              onChange={e => store.set({ agreeTerms: e.target.value })}
              checked={store.state.agreeTerms === 'yes'}
              id="termsCheckboxYes"
            />
            <CheckboxField
              labelText="I don't agree"
              value="no"
              onChange={e => store.set({ agreeTerms: e.target.value })}
              checked={store.state.agreeTerms === 'no'}
              helpText="Click if you don't agree"
              id="termsCheckboxNo"
            />
          </FieldGroup>
          <Button>Submit</Button>
        </Form>
      )),
    ),
  );
