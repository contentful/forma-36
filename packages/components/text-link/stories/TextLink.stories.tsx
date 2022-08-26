import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import * as icons from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';
import { Paragraph, Text } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

import { TextLink } from '../src/TextLink';
import type { TextLinkVariant } from '../src/types';

export default {
  component: TextLink,
  parameters: {
    propTypes: TextLink['__docgenInfo'],
  },
  title: 'Components/TextLink',
  argTypes: {
    classNames: { control: { disable: true } },
    testId: { control: { disable: true } },
    icon: {
      control: {
        options: Object.keys(icons),
        type: 'select',
      },
    },
    alignIcon: {
      defaultValue: 'start',
      control: { options: ['start', 'end'], type: 'select' },
    },
    children: { defaultValue: 'This is a text link' },
  },
} as Meta;

export const Basic: Story<any> = ({ icon, children, ...args }) => {
  return (
    <TextLink icon={icon ? <Icon as={icons[icon]} /> : null} {...args}>
      {children}
    </TextLink>
  );
};

export const UsedWithText = () => {
  return (
    <Paragraph marginBottom="none">
      Berlin (/bɜːrˈlɪn/; German: [bɛʁˈliːn] (About this soundlisten)) is the{' '}
      <TextLink href="https://www.wikiwand.com/en/Capital_city" target="_blank">
        capital
      </TextLink>{' '}
      and largest city of{' '}
      <TextLink
        href="https://www.wikiwand.com/en/Germany"
        icon={<Icon as={icons.ExternalLinkIcon} />}
        alignIcon="end"
        target="_blank"
      >
        Germany
      </TextLink>{' '}
      by both area and population. Its 3,769,495 inhabitants as of 31 December
      2019 make it the most populous city of the European Union, according to
      population within city limits.[8] The city is also one of Germany’s 16
      federal states. It is surrounded by the state of{' '}
      <TextLink href="https://www.wikiwand.com/en/Brandenburg" target="_blank">
        Brandenburg
      </TextLink>
      , and contiguous with{' '}
      <TextLink href="https://www.wikiwand.com/en/Potsdam" target="_blank">
        Potsdam
      </TextLink>
      , Brandenburg’s capital. The two cities are at the center of the
      Berlin-Brandenburg capital region, which is, with about six million
      inhabitants and an area of more than 30,000 km2,[9] Germany’s
      third-largest metropolitan region after the Rhine-Ruhr and Rhine-Main
      regions.
    </Paragraph>
  );
};

const textLinkVariants = [
  'primary',
  'positive',
  'negative',
  'secondary',
  'muted',
  'white',
];

export const overview = () => (
  <div
    style={{
      backgroundColor: tokens.colorElementLight,
      padding: tokens.spacingM,
    }}
  >
    {textLinkVariants.map((variant, idx) => (
      <Flex marginBottom="spacingXl" alignItems="center" key={idx}>
        <Flex marginRight="spacing2Xl">
          <Text style={{ width: 100 }}>{variant}</Text>
        </Flex>
        <Flex marginRight="spacingXl">
          <TextLink
            href="https://www.wikiwand.com/en/Potsdam"
            target="_blank"
            variant={variant as TextLinkVariant}
          >
            Potsdam
          </TextLink>
        </Flex>
        <Flex marginRight="spacingXl">
          <TextLink
            icon={<Icon as={icons.CalendarIcon} />}
            href="https://www.wikiwand.com/en/Potsdam"
            target="_blank"
            variant={variant as TextLinkVariant}
          >
            Potsdam
          </TextLink>
        </Flex>
        <Flex marginRight="spacingXl">
          <TextLink
            icon={<Icon as={icons.ExternalLinkIcon} />}
            alignIcon="end"
            href="https://www.wikiwand.com/en/Potsdam"
            target="_blank"
            variant={variant as TextLinkVariant}
          >
            Potsdam
          </TextLink>
        </Flex>
        <Flex marginRight="spacingXl">
          <TextLink
            icon={<Icon as={icons.DownloadIcon} />}
            href="https://www.wikiwand.com/en/Potsdam"
            target="_blank"
            variant={variant as TextLinkVariant}
            isDisabled
          >
            Potsdam (disabled)
          </TextLink>
        </Flex>
      </Flex>
    ))}
  </div>
);
