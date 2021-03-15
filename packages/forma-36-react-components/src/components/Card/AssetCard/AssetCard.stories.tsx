import React from 'react';
import { Flex } from '@contentful/f36-layout';

import { AssetCard, AssetCardProps } from './AssetCard';
import { Icon } from '../../Icon';
import { DropdownList, DropdownListItem } from '../../Dropdown';
import { CardDragHandle } from '../CardDragHandle/CardDragHandle';
import { SectionHeading } from '../../Typography';

export default {
  title: 'Components/Card/AssetCard',
  component: AssetCard,
  parameters: {
    propTypes: [AssetCard['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: AssetCardProps) => <AssetCard {...args} />;

Basic.args = {
  status: 'published',
  type: 'image',
  src: 'https://via.placeholder.com/200x300',
  title: 'Image of a cat',
};

export const WithCustomCardDragHandle = (args: AssetCardProps) => (
  <AssetCard
    {...args}
    cardDragHandleComponent={<CardDragHandle>Reorder card</CardDragHandle>}
  />
);

WithCustomCardDragHandle.args = {
  ...Basic.args,
};

export const WithDropdownListElements = (args: AssetCardProps) => (
  <AssetCard
    {...args}
    dropdownListElements={
      <React.Fragment>
        <DropdownList>
          <DropdownListItem isTitle>Actions</DropdownListItem>
          <DropdownListItem>Edit</DropdownListItem>
          <DropdownListItem>Download</DropdownListItem>
          <DropdownListItem>Remove</DropdownListItem>
        </DropdownList>
        <DropdownList border="top">
          <DropdownListItem isTitle>File info</DropdownListItem>
          <DropdownListItem>Asset name</DropdownListItem>
          <DropdownListItem>Asset type</DropdownListItem>
          <DropdownListItem>Asset size</DropdownListItem>
          <DropdownListItem>Asset resolution</DropdownListItem>
        </DropdownList>
      </React.Fragment>
    }
  />
);

WithDropdownListElements.args = {
  ...Basic.args,
};

export const WithStatusIcon = (args: AssetCardProps) => <AssetCard {...args} />;

WithStatusIcon.args = {
  ...Basic.args,
  statusIcon: 'Clock',
};

export const WithACustomStatusIcon = (args: AssetCardProps) => (
  <AssetCard {...args} statusIcon={<Icon icon="Calendar" />} />
);

WithACustomStatusIcon.args = {
  ...Basic.args,
};
export const Overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          Published card small and default with image
        </SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <AssetCard
          status="published"
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="default"
        />
        <AssetCard
          status="published"
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="small"
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          Draft card small and default with image
        </SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <AssetCard
          status="draft"
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="default"
        />
        <AssetCard
          status="draft"
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="small"
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          archived card small and default with image
        </SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <AssetCard
          status="archived"
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="default"
        />
        <AssetCard
          status="archived"
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="small"
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          changed card small and default with image
        </SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <AssetCard
          status="changed"
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="default"
        />
        <AssetCard
          status="changed"
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="small"
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          Published card, small and default, with custom icon
        </SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <AssetCard
          status="published"
          statusIcon={<Icon icon="Calendar" color="positive" />}
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="default"
        />
        <AssetCard
          status="published"
          statusIcon={<Icon icon="Calendar" color="positive" />}
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="small"
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          card withDragHandle, small and default with image
        </SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <AssetCard
          status="published"
          withDragHandle
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="default"
        />
        <AssetCard
          status="published"
          withDragHandle
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="small"
        />
      </Flex>
    </Flex>
    <Flex flexDirection="column" marginBottom="spacingM">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">
          loading state of card, small and default
        </SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <AssetCard
          status="published"
          isLoading
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="default"
        />
        <AssetCard
          status="published"
          isLoading
          type="image"
          src="https://via.placeholder.com/200x300'"
          title="Image of the cat"
          size="small"
        />
      </Flex>
    </Flex>
  </>
);
