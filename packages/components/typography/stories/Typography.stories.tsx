import React from 'react';
import { Flex } from '@contentful/f36-core';

import {
  Typography,
  TypographyProps,
  DisplayText,
  Heading,
  Subheading,
  SectionHeading,
  Text,
} from '../src';

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
  text?: string;
}

export const WithDisplayHuge = ({ title, text, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <DisplayText size="huge">{title}</DisplayText>
        <Text>{text}</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Text>
      </Typography>
    </ExampleContainer>
  );
};
WithDisplayHuge.args = {
  title: 'My DisplayText',
  text: loremIpsum,
};

export const WithDisplayLarge = ({ title, text, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <DisplayText size="large">{title}</DisplayText>
        <Text>{text}</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Text>
      </Typography>
    </ExampleContainer>
  );
};
WithDisplayLarge.args = {
  title: 'My DisplayText',
  text: loremIpsum,
};

export const WithDisplayDefault = ({ title, text, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <DisplayText>{title}</DisplayText>
        <Text>{text}</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Text>
      </Typography>
    </ExampleContainer>
  );
};
WithDisplayDefault.args = {
  title: 'My DisplayText',
  text: loremIpsum,
};

export const WithHeading = ({ title, text, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <Heading>{title}</Heading>
        <Text>{text}</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Text>
      </Typography>
    </ExampleContainer>
  );
};
WithHeading.args = {
  title: 'My Heading',
  text: loremIpsum,
};

export const WithSubheading = ({ title, text, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <Subheading>{title}</Subheading>
        <Text>{text}</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Text>
      </Typography>
    </ExampleContainer>
  );
};
WithSubheading.args = {
  title: 'My Subheading',
  text: loremIpsum,
};

export const WithSectionHeading = ({ title, text, ...args }: Arg) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <SectionHeading>{title}</SectionHeading>
        <Text>{text}</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Text>
      </Typography>
    </ExampleContainer>
  );
};
WithSectionHeading.args = {
  title: 'My SectionHeading',
  text: loremIpsum,
};

export const Overview = () => {
  return (
    <>
      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Text>48</Text>
        </Flex>
        <DisplayText size="huge">Display Huge</DisplayText>
      </Flex>
      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Text>36</Text>
        </Flex>
        <DisplayText size="large">Display Large</DisplayText>
      </Flex>
      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Text>28</Text>
        </Flex>
        <DisplayText size="default">Display</DisplayText>
      </Flex>

      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Text>20</Text>
        </Flex>
        <Heading>Heading</Heading>
      </Flex>

      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Text>16</Text>
        </Flex>
        <Subheading>Subheading</Subheading>
      </Flex>

      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Text>12</Text>
        </Flex>
        <SectionHeading>Section Heading</SectionHeading>
      </Flex>

      <Flex alignItems="center" marginBottom="spacingM">
        <Flex marginRight="spacingS">
          <Text>14</Text>
        </Flex>
        <Text>Text</Text>
      </Flex>
    </>
  );
};

function ExampleContainer({ children }) {
  return <Flex style={{ maxWidth: '600px' }}>{children}</Flex>;
}
