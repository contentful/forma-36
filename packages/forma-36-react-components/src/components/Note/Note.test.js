import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Note from './Note';

it('renders the component', () => {
  const output = shallow(
    <Note>
      A piece of information that is relevant to the context the user is
      currently in.
    </Note>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with title', () => {
  const output = shallow(
    <Note noteType={Note.Type.POSITIVE} title="Positive title">
      A piece of information that is relevant to the context the user is
      currently in.
    </Note>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Note extraClassNames="my-extra-class">
      A piece of information that is relevant to the context the user is
      currently in.
    </Note>,
  );

  expect(output).toMatchSnapshot();
});

it(`has no a11y issues`, async () => {
  const output = mount(
    <Note>
      A piece of information that is relevant to the context the user is
      currently in.
    </Note>,
  ).html();

  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
