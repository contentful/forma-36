import React from 'react';

import { InlineEntryCard, InlineEntryCardPropTypes } from './InlineEntryCard';
import { DropdownList, DropdownListItem } from '../../Dropdown';

export default {
  title: 'Components/Card/InlineEntryCard',
  component: InlineEntryCard,
  parameters: {
    propTypes: [InlineEntryCard['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

const dropdownElements = (
  <React.Fragment>
    <DropdownList>
      <DropdownListItem isTitle>Actions</DropdownListItem>
      <DropdownListItem href="#">Edit (with href)</DropdownListItem>
      <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
      <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
    </DropdownList>
    <DropdownList>
      <DropdownListItem isTitle>Actions</DropdownListItem>
      <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
      <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
      <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
    </DropdownList>
  </React.Fragment>
);

interface Args extends InlineEntryCardPropTypes {
  entryText?: string;
}

export const Basic = ({ entryText, ...args }: Args) => (
  <div
    style={{
      lineHeight: 1.5,
      display: 'inline-block',
      maxWidth: 600,
      fontSize: 16,
    }}
  >
    Fusce a odio pharetra, porta justo vel, maximus ex. In pellentesque a orci
    et pretium. Praesent libero lorem, gravida eu pulvinar id, eleifend a
    sapien. &nbsp;
    <InlineEntryCard {...args}>{entryText}</InlineEntryCard>
    &nbsp; Nulla a ultrices nulla, vel blandit sapien. Etiam eget massa dui.
    Fusce id nisl quam. Integer nec mi arcu. Nullam lacinia est lectus, a
    euismod purus eleifend id. Fusce a odio pharetra, porta justo vel, maximus
    ex. In pellentesque a orci et pretium. Praesent libero lorem, gravida eu
    pulvinar id, eleifend a sapien. &nbsp;
    <InlineEntryCard {...args}>{entryText}</InlineEntryCard>
    &nbsp; Nulla a ultrices nulla, vel blandit sapien. Etiam eget massa dui.
    Fusce id nisl quam. Integer nec mi arcu. Nullam lacinia est lectus, a
    euismod purus eleifend id.
  </div>
);

Basic.args = {
  status: 'published',
  dropdownListElements: dropdownElements,
  entryText: 'Title of inline entry',
};
