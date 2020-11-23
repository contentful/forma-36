import React from 'react';

import TextLink from './TextLink';
import Paragraph from '../Typography/Paragraph';
import notes from './README.md';

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
