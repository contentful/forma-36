import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './Typography.md';
import Typography from './Typography';
import DisplayText from '../DisplayText';
import Heading from './../Heading';
import Subheading from './../Subheading';
import SectionHeading from '../SectionHeading';
import Paragraph from './../Paragraph';

storiesOf('Components|Typography/Typography', module)
  .addParameters({
    propTypes: Typography['__docgenInfo'],
  })
  .add(
    'DisplayText - Large',
    () => (
      <Typography>
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
    ),
    { notes },
  )
  .add(
    'DisplayText - Default',
    () => (
      <Typography>
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
    ),
    { notes },
  )
  .add(
    'Heading',
    () => (
      <Typography>
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
    ),
    { notes },
  )
  .add(
    'Subheading',
    () => (
      <Typography>
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
    ),
    { notes },
  )
  .add(
    'SectionHeading',
    () => (
      <Typography>
        <SectionHeading>Section Heading</SectionHeading>
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
    ),
    { notes },
  );
