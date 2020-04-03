import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../../utils/axeHelper';
import FieldGroup from './FieldGroup';
import CheckboxField from '../../CheckboxField';

it('renders the component', () => {
  const output = shallow(
    <FieldGroup>
      <CheckboxField
        labelText="Do you agree?"
        helpText="Click if you agree"
        id="agree"
      />
      <CheckboxField
        labelText="Do you really agree?"
        helpText="Click if you really agree"
        id="reallyAgree"
      />
    </FieldGroup>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <FieldGroup className="my-extra-class">
      <CheckboxField
        labelText="Do you agree?"
        helpText="Click if you agree"
        id="agree"
      />
      <CheckboxField
        labelText="Do you really agree?"
        helpText="Click if you really agree"
        id="reallyAgree"
      />
    </FieldGroup>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component children in a row', () => {
  const output = shallow(
    <FieldGroup className="my-extra-class" row>
      <CheckboxField
        labelText="Do you agree?"
        helpText="Click if you agree"
        id="agree"
      />
      <CheckboxField
        labelText="Do you really agree?"
        helpText="Click if you really agree"
        id="reallyAgree"
      />
    </FieldGroup>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <FieldGroup>
      <CheckboxField
        labelText="Do you agree?"
        helpText="Click if you agree"
        id="agree"
      />
      <CheckboxField
        labelText="Do you really agree?"
        helpText="Click if you really agree"
        id="reallyAgree"
      />
    </FieldGroup>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
