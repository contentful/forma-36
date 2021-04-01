import React from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import { Clock } from '@contentful/f36-icons';

import { EntryCard, EntryCardProps } from './EntryCard';
import { CardDragHandle } from '../CardDragHandle/CardDragHandle';
import { DropdownList, DropdownListItem } from '../../Dropdown';

export default {
  title: 'Components/Card/EntryCard',
  component: EntryCard,
  parameters: {
    propTypes: [EntryCard['__docgenInfo']],
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

export const Basic = (args: EntryCardProps) => <EntryCard {...args} />;

Basic.args = {
  size: 'default',
  statusIcon: Clock,
  title: 'Closer',
  description:
    'Closer is the second and final studio album by English rock band Joy Division. It was released on 18 July 1980 on Factory Records, following the May 1980 suicide of lead singer Ian Curtis. The album was produced by Martin Hannett.',
  status: 'published',
  contentType: 'album',
  dropdownListElements: dropdownElements,
};

export const WithCustomCardDragHandle = (args: EntryCardProps) => (
  <EntryCard
    {...args}
    cardDragHandleComponent={<CardDragHandle>Reorder card</CardDragHandle>}
  />
);

WithCustomCardDragHandle.args = {
  ...Basic.args,
};

export const WithThumbnailElement = (args: EntryCardProps) => (
  <EntryCard
    {...args}
    thumbnailElement={
      <img
        src="data:image/jpeg;base64,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"
        alt="Joy Division - Closer album cover"
      />
    }
  />
);

WithThumbnailElement.args = {
  ...Basic.args,
};

export const Overview = () => (
  <div>
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Entry Card published</SectionHeading>
    </Flex>
    <EntryCard
      size="auto"
      title="Title"
      description="description"
      status="published"
      contentType="Album"
      thumbnailElement={
        <img
          src="data:image/jpeg;base64,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"
          alt="Joy Division - Closer album cover"
        />
      }
      dropdownListElements={dropdownElements}
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Entry Card draft</SectionHeading>
    </Flex>
    <EntryCard
      size="auto"
      title="Title"
      description="description"
      status="draft"
      contentType="Album"
      thumbnailElement={
        <img
          src="data:image/jpeg;base64,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"
          alt="Joy Division - Closer album cover"
        />
      }
      dropdownListElements={dropdownElements}
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Entry Card changed</SectionHeading>
    </Flex>
    <EntryCard
      size="auto"
      title="Title"
      description="description"
      status="archived"
      contentType="Album"
      thumbnailElement={
        <img
          src="data:image/jpeg;base64,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"
          alt="Joy Division - Closer album cover"
        />
      }
      dropdownListElements={dropdownElements}
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Entry Card changed</SectionHeading>
    </Flex>
    <EntryCard
      size="auto"
      title="Title"
      description="description"
      status="changed"
      contentType="Album"
      thumbnailElement={
        <img
          src="data:image/jpeg;base64,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"
          alt="Joy Division - Closer album cover"
        />
      }
      dropdownListElements={dropdownElements}
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Entry Card changed</SectionHeading>
    </Flex>
    <EntryCard
      title="Closer"
      description="Closer is the second and final studio album by English rock band Joy Division. It was released on 18 July 1980 on Factory Records, following the May 1980 suicide of lead singer Ian Curtis. The album was produced by Martin Hannett."
      status="published"
      contentType="Album"
      thumbnailElement={
        <img
          src="data:image/jpeg;base64,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"
          alt="Joy Division - Closer album cover"
        />
      }
      withDragHandle
      isDragActive
      dropdownListElements={dropdownElements}
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">With Status icon</SectionHeading>
    </Flex>
    <EntryCard
      title="Closer"
      description="Closer is the second and final studio album by English rock band Joy Division. It was released on 18 July 1980 on Factory Records, following the May 1980 suicide of lead singer Ian Curtis. The album was produced by Martin Hannett.',"
      status="published"
      statusIcon={Clock}
      contentType="Album"
      dropdownListElements={dropdownElements}
    />
    <Flex marginBottom="spacingS" marginTop="spacingM">
      <SectionHeading as="h3">Entry Card loading</SectionHeading>
    </Flex>
    <EntryCard
      title="Closer"
      description="Closer is the second and final studio album by English rock band Joy Division. It was released on 18 July 1980 on Factory Records, following the May 1980 suicide of lead singer Ian Curtis. The album was produced by Martin Hannett."
      status="published"
      contentType="Album"
      loading
      dropdownListElements={dropdownElements}
    />
  </div>
);
