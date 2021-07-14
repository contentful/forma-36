import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Typography } from './Typography';
import { DisplayText } from './DisplayText';
import { Heading } from './Heading';
import { Text } from './Text';
import { SectionHeading } from './SectionHeading';
import { Subheading } from './Subheading';

it('renders the component', () => {
  const { container } = render(
    <Typography>
      <Heading>My Heading</Heading>
      <Text>My Text</Text>
    </Typography>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders all typography components with the expected spacing classes', () => {
  const { container } = render(
    <Typography>
      <DisplayText>My DisplayText</DisplayText>
      <Heading>My Heading</Heading>
      <Text>My Text</Text>
      <SectionHeading>My SectionHeading</SectionHeading>
      <Subheading>My Subheading</Subheading>
    </Typography>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Typography className="my-extra-class">
      <Heading>My Heading</Heading>
      <Text>My Text</Text>
    </Typography>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Typography>
      <Heading>My Heading</Heading>
      <Text>My Text</Text>
    </Typography>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
