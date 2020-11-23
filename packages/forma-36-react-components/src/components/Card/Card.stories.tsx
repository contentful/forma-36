import React, { useState } from 'react';

import { Typography } from '../Typography/Typography';
import { Heading } from '../Typography/Heading';
import { Paragraph } from '../Typography/Paragraph';

import { Card, CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    propTypes: Card['__docgenInfo'],
  },
};

export const Default = ({ children, ...args }: CardProps) => {
  return (
    <Card {...args}>
      <Typography>
        <Paragraph>{children}</Paragraph>
      </Typography>
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

export const SelectableCards = () => {
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

export const WithLinkAndTarget = (args: CardProps) => {
  return (
    <Card {...args}>
      <Typography>
        <Heading>Forma36</Heading>
        <Paragraph>
          Forma 36 is an open-source design system by Contentful created with
          the intent to reduce the overhead of creating UI by providing tools
          and guidance for digital teams building and extending Contentful
          products.
        </Paragraph>
      </Typography>
    </Card>
  );
};
WithLinkAndTarget.args = {
  href: 'https://f36.contentful.com/',
  target: '_blank',
};
