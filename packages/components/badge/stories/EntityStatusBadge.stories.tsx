import React from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { EntityStatusBadge } from '../src/EntityStatusBadge/EntityStatusBadge';

export default {
  title: 'Components/EntityStatusBadge',
  component: EntityStatusBadge,
  parameters: {
    propTypes: [EntityStatusBadge['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = {
  args: {
    size: 'default',
    entityStatus: 'published',
  },
};

export const Overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS">
      EntityStatusBadge variants & sizes
    </SectionHeading>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="published" />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="published" isScheduled />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="published" size="small" />
      </Flex>
    </Flex>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="new" />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="new" isScheduled />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="new" size="small" />
      </Flex>
    </Flex>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="changed" />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="changed" isScheduled />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="changed" size="small" />
      </Flex>
    </Flex>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="deleted" />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="deleted" isScheduled />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="deleted" size="small" />
      </Flex>
    </Flex>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="draft" />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="draft" isScheduled />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="draft" size="small" />
      </Flex>
    </Flex>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="archived" />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="archived" isScheduled />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge entityStatus="archived" size="small" />
      </Flex>
    </Flex>
  </>
);
