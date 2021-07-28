import React from 'react';
import { Text } from '@contentful/f36-typography';
import { Calendar, ChatBubble, Download } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { Flex } from '@contentful/f36-core';
import '@contentful/forma-36-fcss/dist/styles.css';

import { TextLink, textLinkColor } from './TextLink';

export default {
  title: 'Components/TextLink(Deprecated)',
  component: TextLink,
  parameters: {
    propTypes: TextLink['__docgenInfo'],
  },
};

export const Default = ({ linkLabel, ...args }) => {
  return <TextLink {...args}>{linkLabel}</TextLink>;
};
Default.args = {
  linkLabel: 'This is a text link',
};

export const UsedWithText = () => {
  return (
    <Text>
      Berlin (/bɜːrˈlɪn/; German: [bɛʁˈliːn] (About this soundlisten)) is the{' '}
      <TextLink href="https://www.wikiwand.com/en/Capital_city" target="_blank">
        capital
      </TextLink>{' '}
      and largest city of{' '}
      <TextLink href="https://www.wikiwand.com/en/Germany" target="_blank">
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
      <TextLink href="https://www.wikiwand.com/en/Potsdam" target="_blanck">
        Potsdam
      </TextLink>
      , Brandenburg’s capital. The two cities are at the center of the
      Berlin-Brandenburg capital region, which is, with about six million
      inhabitants and an area of more than 30,000 km2,[9] Germany’s
      third-largest metropolitan region after the Rhine-Ruhr and Rhine-Main
      regions.
    </Text>
  );
};

export const overview = () => (
  <div
    style={{
      backgroundColor: tokens.colorElementLight,
      padding: tokens.spacingM,
    }}
  >
    {textLinkColor.map((color, idx) => (
      <Flex marginBottom="spacingXl" alignItems="center" key={idx}>
        <Flex marginRight="spacing2Xl">
          <Text style={{ width: 100 }}>{color}</Text>
        </Flex>
        <Flex marginRight="spacingXl">
          <TextLink
            href="https://www.wikiwand.com/en/Potsdam"
            target="_blanck"
            linkType={color as any}
          >
            Potsdam
          </TextLink>
        </Flex>
        <Flex marginRight="spacingXl">
          <TextLink
            icon={Calendar}
            href="https://www.wikiwand.com/en/Potsdam"
            target="_blanck"
            linkType={color as any}
          >
            Potsdam
          </TextLink>
        </Flex>
        <Flex marginRight="spacingXl">
          <TextLink
            icon={Download}
            iconPosition="right"
            href="https://www.wikiwand.com/en/Potsdam"
            target="_blanck"
            linkType={color as any}
          >
            Potsdam
          </TextLink>
        </Flex>
        <Flex marginRight="spacingXl">
          <TextLink
            icon={ChatBubble}
            href="https://www.wikiwand.com/en/Potsdam"
            target="_blanck"
            linkType={color as any}
            disabled
          >
            Potsdam (disabled)
          </TextLink>
        </Flex>
      </Flex>
    ))}
  </div>
);
