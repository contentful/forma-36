import React from 'react';

import Typography, { TypographyProps } from './Typography';
import DisplayText from '../DisplayText';
import Heading from './../Heading';
import Subheading from './../Subheading';
import SectionHeading from '../SectionHeading';
import Paragraph from './../Paragraph';
import Flex from '../../Flex/Flex';

export default {
  title: 'Typography/Typography',
  component: Typography,
  parameters: {
    propTypes: [Typography['__docgenInfo']],
    // notes,
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const WithDisplayHuge = (args: TypographyProps) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <DisplayText size="huge">My DisplayText</DisplayText>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          accusantium vel voluptate incidunt, tempora consectetur consequuntur
          magnam reiciendis ea ipsam!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};

export const WithDisplayLarge = (args: TypographyProps) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <DisplayText size="large">My DisplayText</DisplayText>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          accusantium vel voluptate incidunt, tempora consectetur consequuntur
          magnam reiciendis ea ipsam!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};

export const WithDisplayDefault = (args: TypographyProps) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <DisplayText>My DisplayText</DisplayText>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          accusantium vel voluptate incidunt, tempora consectetur consequuntur
          magnam reiciendis ea ipsam!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};

export const WithHeading = (args: TypographyProps) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <Heading>My Heading</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          accusantium vel voluptate incidunt, tempora consectetur consequuntur
          magnam reiciendis ea ipsam!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};

export const WithSubheading = (args: TypographyProps) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <Subheading>My Subheading</Subheading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          accusantium vel voluptate incidunt, tempora consectetur consequuntur
          magnam reiciendis ea ipsam!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
};

export const WithSectionHeading = (args: TypographyProps) => {
  return (
    <ExampleContainer>
      <Typography {...args}>
        <SectionHeading>My SectionHeading</SectionHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          accusantium vel voluptate incidunt, tempora consectetur consequuntur
          magnam reiciendis ea ipsam!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut
          accusamus quia debitis expedita consectetur!
        </Paragraph>
      </Typography>
    </ExampleContainer>
  );
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
