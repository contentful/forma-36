import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { axe } from 'jest-axe';
import Typography from './Typography';
import DisplayText from './../DisplayText';
import Heading from './../Heading';
import Paragraph from './../Paragraph';
import SectionHeading from './../SectionHeading';
import Subheading from './../Subheading';

it('renders the component', () => {
  const output = shallow(
    <Typography>
      <Heading>My Heading</Heading>
      <Paragraph>My Paragraph</Paragraph>
    </Typography>,
  );

  expect(output).toMatchSnapshot();
});

it('renders all typography components with the expected spacing classes', () => {
  const output = render(
    <Typography>
      <DisplayText>My DisplayText</DisplayText>
      <Heading>My Heading</Heading>
      <Paragraph>My Paragraph</Paragraph>
      <SectionHeading>My SectionHeading</SectionHeading>
      <Subheading>My Subheading</Subheading>
    </Typography>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Typography className="my-extra-class">
      <Heading>My Heading</Heading>
      <Paragraph>My Paragraph</Paragraph>
    </Typography>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <Typography>
      <Heading>My Heading</Heading>
      <Paragraph>My Paragraph</Paragraph>
    </Typography>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
