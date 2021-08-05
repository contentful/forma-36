import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { Badge } from '../src/Badge';
import { BadgeInternalProps } from '../src/Badge';

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

export const basic = (args: BadgeInternalProps) => <Badge {...args} />;

basic.args = {
  size: 'default',
  variant: 'primary',
  children: 'Published',
};

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading as="h3">Badge variants & sizes</SectionHeading>
    </Flex>
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
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="muted">muted</Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge variant="muted" size="small">
          muted
        </Badge>
      </Flex>
      <div style={{ color: tokens.colorRedBase, fontSize: tokens.fontSizeM }}>
        {' '}
        - this tagType is deprecated, please use <strong>secondary</strong>{' '}
        instead
      </div>
    </Flex>
  </>
);
