import React from 'react';

import TextLink, { textLinkColor } from './TextLink';
import Paragraph from '../Typography/Paragraph';
import notes from './README.mdx';
import Flex from '../Flex/Flex';
import tokens from '@contentful/forma-36-tokens';
import '@contentful/forma-36-fcss/dist/styles.css';

export default {
  title: 'Components/TextLink',
  component: TextLink,
  parameters: {
    propTypes: TextLink['__docgenInfo'],
    notes,
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
    <Paragraph>
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
    </Paragraph>
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
          <Paragraph style={{ width: 100 }}>{color}</Paragraph>
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
            icon="Calendar"
            href="https://www.wikiwand.com/en/Potsdam"
            target="_blanck"
            linkType={color as any}
          >
            Potsdam
          </TextLink>
        </Flex>
        <Flex marginRight="spacingXl">
          <TextLink
            icon="Download"
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
            icon="ChatBubble"
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
