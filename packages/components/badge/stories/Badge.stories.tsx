import React from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { Badge } from '../src/Badge/Badge';
import { BadgeInternalProps } from '../src/Badge/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    propTypes: [Badge['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = (args: BadgeInternalProps) => <Badge {...args} />;

Basic.args = {
  size: 'default',
  variant: 'primary',
  children: 'Published',
};

export const Overview = () => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS">
      Badge variants & sizes
    </SectionHeading>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="primary">primary</Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge variant="primary" size="small">
          primary
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="primary-filled">primary filled</Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge variant="primary-filled" size="small">
          primary filled
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="positive">positive</Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge variant="positive" size="small">
          positive
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="negative">negative</Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge variant="negative" size="small">
          negative
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="warning">warning</Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge variant="warning" size="small">
          warning
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="secondary">secondary</Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge variant="secondary" size="small">
          secondary
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="featured">featured</Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge variant="featured" size="small">
          featured
        </Badge>
      </Flex>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Overflow
    </SectionHeading>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS" style={{ maxWidth: '6rem' }}>
        <Badge variant="primary">Lorem Ipsum Dolor Sit Amet</Badge>
      </Flex>
      <Flex marginRight="spacingS" style={{ maxWidth: '6rem' }}>
        <Badge variant="primary" size="small">
          Lorem Ipsum Dolor Sit Amet
        </Badge>
      </Flex>
    </Flex>
  </>
);
