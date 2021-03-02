import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../../utils/axeHelper';
import { InlineEntryCard } from './InlineEntryCard';
import { DropdownList, DropdownListItem } from '../../Dropdown';

it('renders the component', () => {
  const { container } = render(
    <InlineEntryCard>Title of inline entry</InlineEntryCard>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <InlineEntryCard className="my-extra-class">
      Title of inline entry
    </InlineEntryCard>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with published status', () => {
  const { container } = render(
    <InlineEntryCard className="my-extra-class" status="published">
      Title of inline entry
    </InlineEntryCard>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a dropdown', () => {
  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <InlineEntryCard>InlineEntryCard</InlineEntryCard>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
