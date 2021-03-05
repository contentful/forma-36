import React from 'react';

import { Icon, IconProps } from './Icon';
import { iconName, iconSizes, iconColors } from './constants';
import { Flex } from '../Flex';
import { Paragraph, SectionHeading } from '../Typography';
import { Grid } from '../Grid/Grid';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    propTypes: [Icon['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: IconProps) => <Icon {...args} />;

Basic.args = {
  icon: 'ArrowDown',
  size: 'medium',
  color: 'primary',
};

export const AllIcons = () => (
  <Grid columns={'auto 1fr 1fr 1fr 1fr'}>
    {Object.keys(iconName)
      .filter((icon) => !icon.toLowerCase().includes('trimmed'))
      .map((icon) => (
        <Flex
          key={icon}
          padding="spacingS"
          marginRight="spacingM"
          alignItems="center"
          justifyContent="flex-start"
          flexGrow={0}
        >
          <Flex marginRight="spacingS">
            <Icon
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              icon={icon as any}
              color="primary"
              size="medium"
            />
          </Flex>
          {icon}
        </Flex>
      ))}
  </Grid>
);

export const Overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Icon sizes overview</SectionHeading>
    </Flex>

    {Object.entries(iconSizes).map((icon, idx) => (
      <Flex marginBottom="spacingM" alignItems="center" key={idx}>
        <Flex marginRight="spacingS">
          <Icon icon="Calendar" color="primary" size={icon[0] as any} />
        </Flex>
        <Paragraph>{icon[1]}</Paragraph>
      </Flex>
    ))}
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Icon colors overview</SectionHeading>
    </Flex>
    {iconColors.map((color, idx) => (
      <Flex marginBottom="spacingM" alignItems="center" key={idx}>
        <Flex marginRight="spacingS">
          <Icon icon="Calendar" color={color as any} size="medium" />
        </Flex>
        <Paragraph>{color}</Paragraph>
      </Flex>
    ))}
  </>
);
