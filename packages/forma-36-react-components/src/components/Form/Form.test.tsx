import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Form } from './Form';
import { TextField } from '../TextField';

it('renders the component', () => {
  const { container } = render(
    <Form>
      <TextField
        required
        name="nameInput"
        id="nameInput"
        labelText="Name"
        value="Johannes Bugiel"
        helpText="Please enter your name"
      />
    </Form>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Form className="my-extra-class">
      <TextField
        required
        name="nameInput"
        id="nameInput"
        labelText="Name"
        value="Johannes Bugiel"
        helpText="Please enter your name"
      />
    </Form>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with condensed spacing', () => {
  const { container } = render(
    <Form className="my-extra-class" spacing="condensed">
      <TextField
        required
        name="nameInput"
        id="nameInput"
        labelText="Name"
        value="Johannes Bugiel"
        helpText="Please enter your name"
      />
    </Form>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with condensed spacing (prevent default)', () => {
  const mockOnSubmit = jest.fn();
  render(
    <Form className="my-extra-class" onSubmit={mockOnSubmit}>
      <TextField
        required
        name="nameInput"
        id="nameInput"
        labelText="Name"
        value="Johannes Bugiel"
        helpText="Please enter your name"
      />
    </Form>,
  );

  fireEvent.submit(screen.getByTestId('cf-ui-form'));
  expect(mockOnSubmit).toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Form>
      <TextField
        required
        name="nameInput"
        id="nameInput"
        labelText="Name"
        value="Johannes Bugiel"
        helpText="Please enter your name"
      />
    </Form>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
