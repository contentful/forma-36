import React from 'react';
import { Icon } from '@contentful/f36-icon';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import * as icons from '@contentful/f36-icons';

import { EntityStatusBadge } from '../src/EntityStatusBadge';
import { EntityStatusBadgeProps } from '../src/EntityStatusBadge';

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
    startIcon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
    endIcon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
  },
};

export const Basic = ({ startIcon, endIcon, args }) => (
  <EntityStatusBadge
    {...args}
    startIcon={startIcon && <Icon as={icons[startIcon]} />}
    endIcon={endIcon && <Icon as={icons[endIcon]} />}
  />
);

Basic.args = {
  size: 'default',
  entityStatus: 'published',
};

export const Overview = ({ startIcon, endIcon }) => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS">
      EntityStatusBadge variants & sizes
    </SectionHeading>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="published"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="published"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
          size="small"
        />
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="new"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="new"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
          size="small"
        />
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="changed"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="changed"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
          size="small"
        />
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="deleted"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="deleted"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
          size="small"
        />
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="draft"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="draft"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
          size="small"
        />
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="archived"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        />
      </Flex>
      <Flex marginRight="spacingS">
        <EntityStatusBadge
          entityStatus="archived"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
          size="small"
        />
      </Flex>
    </Flex>
  </>
);
