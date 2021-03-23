import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from '@contentful/f36-typography';

import { axe } from '../../../utils/axeHelper';
import { Typography } from './Typography';
import { DisplayText } from '../DisplayText/DisplayText';
import { Paragraph } from '../Paragraph/Paragraph';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Subheading } from '../Subheading/Subheading';

it('renders the component', () => {
  const { container } = render(
    <Typography>
      <Heading>My Heading</Heading>
      <Paragraph>My Paragraph</Paragraph>
    </Typography>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders all typography components with the expected spacing classes', () => {
  const { container } = render(
    <Typography>
      <DisplayText>My DisplayText</DisplayText>
      <Heading>My Heading</Heading>
      <Paragraph>My Paragraph</Paragraph>
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
      <Paragraph>My Paragraph</Paragraph>
    </Typography>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Typography>
      <Heading>My Heading</Heading>
      <Paragraph>My Paragraph</Paragraph>
    </Typography>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
