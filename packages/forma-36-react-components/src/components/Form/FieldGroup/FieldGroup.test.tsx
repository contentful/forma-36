import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';
import { Checkbox } from '@contentful/f36-forms';

import { FieldGroup } from './FieldGroup';

it('renders the component', () => {
  const { container } = render(
    <FieldGroup>
      <Checkbox label="Do you agree?" id="agree" />
      <Checkbox label="Do you really agree?" id="reallyAgree" />
    </FieldGroup>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <FieldGroup className="my-extra-class">
      <Checkbox label="Do you agree?" id="agree" />
      <Checkbox label="Do you really agree?" id="reallyAgree" />
    </FieldGroup>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component children in a row', () => {
  const { container } = render(
    <FieldGroup className="my-extra-class" row>
      <Checkbox label="Do you agree?" id="agree" />
      <Checkbox label="Do you really agree?" id="reallyAgree" />
    </FieldGroup>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <FieldGroup>
      <Checkbox label="Do you agree?" id="agree" />
      <Checkbox label="Do you really agree?" id="reallyAgree" />
    </FieldGroup>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
