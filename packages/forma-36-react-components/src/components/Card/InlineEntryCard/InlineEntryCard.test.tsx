import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../../utils/axeHelper';
import InlineEntryCard from './InlineEntryCard';
import DropdownListItem from '../../Dropdown/DropdownListItem';
import DropdownList from '../../Dropdown/DropdownList';

it('renders the component', () => {
  const output = shallow(
    <InlineEntryCard>Title of inline entry</InlineEntryCard>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <InlineEntryCard className="my-extra-class">
      Title of inline entry
    </InlineEntryCard>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with published status', () => {
  const output = shallow(
    <InlineEntryCard className="my-extra-class" status="published">
      Title of inline entry
    </InlineEntryCard>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a dropdown', () => {
  const output = shallow(
    <InlineEntryCard
      className="my-extra-class"
      dropdownListElements={
        <DropdownList>
          <DropdownListItem key="edit" onClick={() => {}}>
            Edit
          </DropdownListItem>
          <DropdownListItem key="remove" onClick={() => {}}>
            Remove
          </DropdownListItem>
        </DropdownList>
      }
    >
      Title of inline entry
    </InlineEntryCard>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <InlineEntryCard>InlineEntryCard</InlineEntryCard>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
