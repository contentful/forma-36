import React from 'react';
import { Icon } from '@contentful/f36-icon';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import * as icons from '@contentful/f36-icons';

import { Badge } from '../src/Badge/Badge';

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

export const Basic = {
  render: ({ startIcon, endIcon, children, ...args }) => (
    <Badge
      startIcon={startIcon && <Icon as={icons[startIcon]} />}
      endIcon={endIcon && <Icon as={icons[endIcon]} />}
      {...args}
    >
      {children}
    </Badge>
  ),

  args: {
    size: 'default',
    variant: 'primary',
    children: 'Published',
  },
};

export const Overview = {
  render: ({ startIcon, endIcon }) => (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Badge variants & sizes
      </SectionHeading>

      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <Badge
            variant="primary"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Primary
          </Badge>
        </Flex>
        <Flex marginRight="spacingS">
          <Badge variant="primary" size="small">
            Primary
          </Badge>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <Badge
            variant="primary-filled"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Primary filled
          </Badge>
        </Flex>
        <Flex marginRight="spacingS">
          <Badge variant="primary-filled" size="small">
            Primary filled
          </Badge>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <Badge
            variant="positive"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Positive
          </Badge>
        </Flex>
        <Flex marginRight="spacingS">
          <Badge variant="positive" size="small">
            Positive
          </Badge>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <Badge
            variant="negative"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Negative
          </Badge>
        </Flex>
        <Flex marginRight="spacingS">
          <Badge variant="negative" size="small">
            Negative
          </Badge>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <Badge
            variant="warning"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Warning
          </Badge>
        </Flex>
        <Flex marginRight="spacingS">
          <Badge variant="warning" size="small">
            Warning
          </Badge>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <Badge
            variant="secondary"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Secondary
          </Badge>
        </Flex>
        <Flex marginRight="spacingS">
          <Badge variant="secondary" size="small">
            Secondary
          </Badge>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <Badge
            variant="featured"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Featured
          </Badge>
        </Flex>
        <Flex marginRight="spacingS">
          <Badge variant="featured" size="small">
            Featured
          </Badge>
        </Flex>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS">
        Text Overflow
      </SectionHeading>

      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS" style={{ maxWidth: '6rem' }}>
          <Badge
            variant="primary"
            startIcon={startIcon && <Icon as={icons[startIcon]} />}
            endIcon={endIcon && <Icon as={icons[endIcon]} />}
          >
            Lorem Ipsum Dolor Sit Amet
          </Badge>
        </Flex>
        <Flex marginRight="spacingS" style={{ maxWidth: '6rem' }}>
          <Badge variant="primary" size="small">
            Lorem Ipsum Dolor Sit Amet
          </Badge>
        </Flex>
      </Flex>
    </>
  ),
};
