import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { Heading, SectionHeading, Text } from '@contentful/f36-typography';
import { Clock } from '@contentful/f36-icons';
import { DropdownList, DropdownListItem } from '@contentful/f36-components';
import { EntityStatusBadge } from '@contentful/f36-badge';

import { Card } from '../src';
import type { CardProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    rel: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Card,
  parameters: {
    propTypes: Card['__docgenInfo'],
  },
  title: 'Components/Card',
} as Meta;

export const Default: Story<CardProps> = ({ children, ...args }) => {
  return (
    <Card {...args}>
      <Text>{children}</Text>
    </Card>
  );
};

Default.args = {
  children: 'This is the Card’s content',
};

export const WithOnClick = (args: CardProps) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Card {...args} onClick={() => setShow(!show)}>
        Click on this card
        <br />
        {show && (
          <span role="img" aria-label="sparkles">
            ✨✨✨
          </span>
        )}
      </Card>
    </div>
  );
};

export const SelectableCards: Story<CardProps> = () => {
  const [taco, setTaco] = useState(false);
  const [pizza, setPizza] = useState(false);
  const [broccoli, setBroccoli] = useState(false);
  return (
    <div style={{ maxWidth: '280px' }}>
      <Heading>What is your favorite food?</Heading>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <Card onClick={() => setTaco(!taco)} isSelected={taco}>
          <span style={{ fontSize: '3rem' }} role="img" aria-label="taco">
            🌮
          </span>
        </Card>
        <Card onClick={() => setPizza(!pizza)} isSelected={pizza}>
          <span style={{ fontSize: '3rem' }} role="img" aria-label="pizza">
            🍕
          </span>
        </Card>
        <Card onClick={() => setBroccoli(!broccoli)} isSelected={broccoli}>
          <span style={{ fontSize: '3rem' }} role="img" aria-label="broccoli">
            🥦
          </span>
        </Card>
      </div>
    </div>
  );
};

export const WithLinkAndTarget: Story<CardProps> = (args) => {
  return (
    <Card {...args}>
      <Text>
        Forma 36 is an open-source design system by Contentful created with the
        intent to reduce the overhead of creating UI by providing tools and
        guidance for digital teams building and extending Contentful products.
      </Text>
    </Card>
  );
};

WithLinkAndTarget.args = {
  href: 'https://f36.contentful.com/',
  target: '_blank',
  title: 'Forma 36',
};

export const Overview: Story<CardProps> = () => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Default
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Default
          </SectionHeading>

          <Card icon={Clock} title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <Card
            actions={
              <DropdownList>
                <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
                <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
                <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
              </DropdownList>
            }
            isHovered
            title="Forma 36"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Focus
          </SectionHeading>
          <Card
            badge={<EntityStatusBadge entityStatus="draft" />}
            isFocused
            title="Forma 36"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <Card isSelected title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>
      </Flex>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingL">
        Large padding
      </SectionHeading>

      <Flex flexWrap="wrap">
        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Default
          </SectionHeading>

          <Card padding="large" title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <Card
            actions={
              <DropdownList>
                <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
                <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
                <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
              </DropdownList>
            }
            isHovered
            padding="large"
            title="Forma 36"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Focus
          </SectionHeading>
          <Card
            badge={<EntityStatusBadge entityStatus="draft" />}
            isFocused
            padding="large"
            title="Forma 36"
          >
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <Card isSelected padding="large" title="Forma 36">
            <Text>
              Forma 36 is an open-source design system by Contentful created
              with the intent to reduce the overhead of creating UI by providing
              tools and guidance for digital teams building and extending
              Contentful products.
            </Text>
          </Card>
        </Flex>
      </Flex>
    </>
  );
};
