import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { FieldGroup } from './FieldGroup';
import { CheckboxField } from '../../CheckboxField';

it('renders the component', () => {
  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component children in a row', () => {
  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
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
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
