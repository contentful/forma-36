import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Form from './Form';
import TextField from '../../TextField';

it('renders the component', () => {
  const output = shallow(
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

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
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

  expect(output).toMatchSnapshot();
});

it('renders the component with condensed spacing', () => {
  const output = shallow(
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

  expect(output).toMatchSnapshot();
});

it('renders the component with condensed spacing (prevent default)', () => {
  const mockOnSubmit = jest.fn();
  const output = shallow(
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

  output.simulate('submit', {
    preventDefault: () => {},
  });
  expect(mockOnSubmit).toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const output = mount(
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
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
