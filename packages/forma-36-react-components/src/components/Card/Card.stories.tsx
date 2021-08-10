import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, SectionHeading, Paragraph } from '@contentful/f36-typography';

import { Card, CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    propTypes: Card['__docgenInfo'],
  },
} as Meta;

export const Default: Story<CardProps> = ({ children, ...args }) => {
  return (
    <Card {...args}>
      <Paragraph marginBottom="none">{children}</Paragraph>
    </Card>
  );
};
Default.args = { title: 'Title', children: 'This is the Card’s content' };

export const WithOnClick = (args: CardProps) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Card
        {...args}
        onClick={() => setShow(!show)}
        style={{ textAlign: 'center' }}
      >
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
        <Card onClick={() => setTaco(!taco)} selected={taco}>
          <span style={{ fontSize: '3rem' }} role="img" aria-label="taco">
            🌮
          </span>
        </Card>
        <Card onClick={() => setPizza(!pizza)} selected={pizza}>
          <span style={{ fontSize: '3rem' }} role="img" aria-label="pizza">
            🍕
          </span>
        </Card>
        <Card onClick={() => setBroccoli(!broccoli)} selected={broccoli}>
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
      <Heading>Forma 36</Heading>
      <Paragraph marginBottom="none">
        Forma 36 is an open-source design system by Contentful created with the
        intent to reduce the overhead of creating UI by providing tools and
        guidance for digital teams building and extending Contentful products.
      </Paragraph>
    </Card>
  );
};

export const overview: Story<CardProps> = (args) => {
  return (
    <>
      <SectionHeading as="h3" marginBottom="spacingS">
        Card with link and target
      </SectionHeading>

      <Card {...args}>
        <Heading marginBottom="none">Forma 36</Heading>
        <Paragraph marginBottom="none">
          Forma 36 is an open-source design system by Contentful created with
          the intent to reduce the overhead of creating UI by providing tools
          and guidance for digital teams building and extending Contentful
          products.
        </Paragraph>
      </Card>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
        Card selected
      </SectionHeading>

      <Card selected>
        <Heading marginBottom="none">Forma 36</Heading>
        <Paragraph marginBottom="none">
          Forma 36 is an open-source design system by Contentful created with
          the intent to reduce the overhead of creating UI by providing tools
          and guidance for digital teams building and extending Contentful
          products.
        </Paragraph>
      </Card>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
        Card with default padding
      </SectionHeading>

      <Card padding="default">
        <Heading marginBottom="none">Forma 36</Heading>
        <Paragraph marginBottom="none">
          Forma 36 is an open-source design system by Contentful created with
          the intent to reduce the overhead of creating UI by providing tools
          and guidance for digital teams building and extending Contentful
          products.
        </Paragraph>
      </Card>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
        Card with large padding
      </SectionHeading>

      <Card padding="large">
        <Heading marginBottom="none">Forma 36</Heading>
        <Paragraph marginBottom="none">
          Forma 36 is an open-source design system by Contentful created with
          the intent to reduce the overhead of creating UI by providing tools
          and guidance for digital teams building and extending Contentful
          products.
        </Paragraph>
      </Card>

      <SectionHeading as="h3" marginBottom="spacingS" marginTop="spacingM">
        Card without padding
      </SectionHeading>

      <Card padding="none">
        <Heading marginBottom="none">Forma 36</Heading>
        <Paragraph marginBottom="none">
          Forma 36 is an open-source design system by Contentful created with
          the intent to reduce the overhead of creating UI by providing tools
          and guidance for digital teams building and extending Contentful
          products.
        </Paragraph>
      </Card>
    </>
  );
};

WithLinkAndTarget.args = {
  href: 'https://f36.contentful.com/',
  target: '_blank',
};
