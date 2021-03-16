import React from 'react';
import { Flex } from '@contentful/f36-core';

import { Badge } from '../src/Badge';
import { BadgeProps } from '../src/Badge';
import { SectionHeading } from '../../../forma-36-react-components/src/components/Typography/SectionHeading/SectionHeading';

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

export const basic = (args: BadgeProps) => <Badge {...args} />;

basic.args = {
  variant: 'primary',
  children: 'Published',
};

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Badge types overview</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="primary">primary</Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="primary-filled">primary filled</Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="positive">positive</Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="negative">negative</Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="warning">warning</Badge>
      </Flex>
    </Flex>

    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Tag sizes overview</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="muted">muted</Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge variant="secondary">secondary</Badge>
      </Flex>
    </Flex>
  </>
);
