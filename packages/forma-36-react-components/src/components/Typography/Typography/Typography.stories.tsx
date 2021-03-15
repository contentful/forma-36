import React from 'react';

import { Typography, TypographyProps } from './Typography';
import { DisplayText } from '../DisplayText/DisplayText';
import { Heading } from './../Heading/Heading';
import { Subheading } from './../Subheading/Subheading';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Paragraph } from './../Paragraph/Paragraph';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Typography/Typography',
  component: Typography,
  parameters: {
    propTypes: [Typography['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
accusantium vel voluptate incidunt, tempora consectetur consequuntur
magnam reiciendis ea ipsam!`;

interface Arg extends TypographyProps {
  title?: string;
  paragraph?: string;
}

export const WithDisplayHuge = ({ title, paragraph, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <DisplayText size="huge">{title}</DisplayText>
        <Paragraph>{paragraph}</Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};
WithDisplayHuge.args = {
  title: 'My DisplayText',
  paragraph: loremIpsum,
};

export const WithDisplayLarge = ({ title, paragraph, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <DisplayText size="large">{title}</DisplayText>
        <Paragraph>{paragraph}</Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};
WithDisplayLarge.args = {
  title: 'My DisplayText',
  paragraph: loremIpsum,
};

export const WithDisplayDefault = ({ title, paragraph, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <DisplayText>{title}</DisplayText>
        <Paragraph>{paragraph}</Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};
WithDisplayDefault.args = {
  title: 'My DisplayText',
  paragraph: loremIpsum,
};

export const WithHeading = ({ title, paragraph, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <Heading>{title}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};
WithHeading.args = {
  title: 'My Heading',
  paragraph: loremIpsum,
};

export const WithSubheading = ({ title, paragraph, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <Subheading>{title}</Subheading>
        <Paragraph>{paragraph}</Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};
WithSubheading.args = {
  title: 'My Subheading',
  paragraph: loremIpsum,
};

export const WithSectionHeading = ({ title, paragraph, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <SectionHeading>{title}</SectionHeading>
        <Paragraph>{paragraph}</Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};
WithSectionHeading.args = {
  title: 'My SectionHeading',
  paragraph: loremIpsum,
};

export const Overview = () => {
  return (
    <>
      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Paragraph>48</Paragraph>
        </Flex>
        <DisplayText size="huge">Display Huge</DisplayText>
      </Flex>
      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Paragraph>36</Paragraph>
        </Flex>
        <DisplayText size="large">Display Large</DisplayText>
      </Flex>
      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Paragraph>28</Paragraph>
        </Flex>
        <DisplayText size="default">Display</DisplayText>
      </Flex>

      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Paragraph>20</Paragraph>
        </Flex>
        <Heading>Heading</Heading>
      </Flex>

      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Paragraph>16</Paragraph>
        </Flex>
        <Subheading>Subheading</Subheading>
      </Flex>

      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Paragraph>12</Paragraph>
        </Flex>
        <SectionHeading>Section Heading</SectionHeading>
      </Flex>

      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Paragraph>14</Paragraph>
        </Flex>
        <Paragraph>Paragraph</Paragraph>
      </Flex>
    </>
  );
};

function ExampleContainer({ children }) {
  return <Flex style={{ maxWidth: '600px' }}>{children}</Flex>;
}
