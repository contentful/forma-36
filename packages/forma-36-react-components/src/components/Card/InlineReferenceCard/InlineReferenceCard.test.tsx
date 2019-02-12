import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import InlineReferenceCard from './InlineReferenceCard';
import DropdownListItem from '../../Dropdown/DropdownListItem';

it('renders the component', () => {
  const output = shallow(
    <InlineReferenceCard>Title of inline reference</InlineReferenceCard>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <InlineReferenceCard extraClassNames="my-extra-class">
      Title of inline reference
    </InlineReferenceCard>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with published status', () => {
  const output = shallow(
    <InlineReferenceCard extraClassNames="my-extra-class" status="published">
      Title of inline reference
    </InlineReferenceCard>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a dropdown', () => {
  const output = shallow(
    <InlineReferenceCard
      extraClassNames="my-extra-class"
      dropdownListItemNodes={[
        <DropdownListItem key="edit" onClick={() => {}}>
          Edit
        </DropdownListItem>,
        <DropdownListItem key="remove" onClick={() => {}}>
          Remove
        </DropdownListItem>,
      ]}
    >
      Title of inline reference
    </InlineReferenceCard>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <InlineReferenceCard>InlineReferenceCard</InlineReferenceCard>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
