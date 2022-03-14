import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import {
  DisplayText,
  Heading,
  Paragraph,
  Flex,
  Card,
  Button,
} from '@contentful/f36-components';
import { ArrowForwardTrimmedIcon } from '@contentful/f36-icons';

import { SCREEN_BREAKPOINT_LARGE } from '../utils/getGridStyles';

const styles = {
  grid: css({
    flex: 1, // this is necessary to make the footer sticky to the bottom of the page
    padding: `${tokens.spacing3Xl} ${tokens.spacingL} 0`,
    [`@media screen and (min-width: ${SCREEN_BREAKPOINT_LARGE})`]: {
      display: 'grid',
      gridTemplateColumns: '1fr 960px 1fr',
      gridTemplateRows: 'min-content',
    },
    '> *': {
      [`@media screen and (min-width: ${SCREEN_BREAKPOINT_LARGE})`]: {
        gridColumnStart: 2,
      },
    },
  }),
  cards: css({
    '> *': {
      maxWidth: '400px',
    },
  }),
};

export default function Home() {
  return (
    <article className={styles.grid}>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        marginBottom="spacing3Xl"
      >
        <DisplayText as="h1" size="large">
          Build and extend
          <br />
          Contentful products.
        </DisplayText>

        <Button
          as="a"
          href="/getting-started"
          variant="primary"
          size="large"
          endIcon={<ArrowForwardTrimmedIcon />}
        >
          Get started
        </Button>
      </Flex>

      <Flex
        className={styles.cards}
        flexWrap="wrap"
        alignItems="flex-start"
        alignContent="flex-start"
        gap="spacingM"
      >
        <Card>
          <Heading>Figma UI Kit</Heading>
          <Paragraph marginBottom="none">
            Copy the Forma 36 UI Kit to Figma, publish it as a Team library and
            start prototyping. You need a Figma account to do this.
          </Paragraph>
        </Card>

        <Card as="a" href="/components/accordion">
          <Heading>Components</Heading>
          <Paragraph marginBottom="none">
            Browse the React components and try them out live in the Playground.
          </Paragraph>
        </Card>

        <Card>
          <Heading>What’s new?</Heading>
          <Paragraph marginBottom="none">A history of our releases.</Paragraph>
        </Card>
      </Flex>
    </article>
  );
}
