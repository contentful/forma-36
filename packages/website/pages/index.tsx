import React from 'react';
import { css } from 'emotion';
import Image from 'next/image';
import Link from 'next/link';
import tokens from '@contentful/f36-tokens';
import {
  DisplayText,
  Heading,
  Paragraph,
  Flex,
  TextLink,
  Button,
} from '@contentful/f36-components';
import { ArrowForwardTrimmedIcon } from '@contentful/f36-icons';
import type { InferGetStaticPropsType } from 'next';

import figmaSVG from '../resources/icons/figma-icon.svg';
import reactSVG from '../resources/icons/react-icon.svg';
import homepageImg from '../public/images/homepage-illustration.svg';
import { SCREEN_BREAKPOINT_LARGE } from '../utils/getGridStyles';
import { Layout } from '../components/Layout';
import { getTopbarLinks } from '../lib/api';

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
  sections: css({
    '> *': {
      maxWidth: '220px',
    },
  }),
  imgContainer: css({ flexGrow: 1, '> span': { flexGrow: 1 } }),
};

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ topbarLinks }: HomeProps) {
  return (
    <Layout topbarLinks={topbarLinks}>
      <article className={styles.grid}>
        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
          gap="spacing2Xl"
        >
          <Flex flexDirection="column">
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
                href="/introduction/getting-started"
                variant="primary"
                size="large"
                endIcon={<ArrowForwardTrimmedIcon />}
              >
                Get started
              </Button>
            </Flex>

            <Flex className={styles.sections} gap="spacing2Xl">
              <Flex flexDirection="column" alignItems="flex-start">
                <Image src={figmaSVG} alt="Figma’s logo" />

                <Heading marginTop="spacingM">Figma UI Kit</Heading>
                <Paragraph>
                  Copy the UI Kit to Figma, publish it as a Team library and
                  start prototyping.
                </Paragraph>
                <TextLink
                  href="https://www.figma.com/@contentful"
                  target="_blank"
                >
                  Get the Figma UI Kit
                </TextLink>
              </Flex>

              <Flex flexDirection="column" alignItems="flex-start">
                <Image src={reactSVG} alt="React’s logo" />

                <Heading marginTop="spacingM">React Components</Heading>
                <Paragraph>
                  Browse the components and try them out live in the Playground.
                </Paragraph>
                <Link href="/components/accordion" passHref>
                  <TextLink>View the components</TextLink>
                </Link>
              </Flex>
            </Flex>
          </Flex>

          <Flex className={styles.imgContainer}>
            <Image
              src={homepageImg}
              alt="UI components in a browser"
              layout="responsive"
            />
          </Flex>
        </Flex>
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const topbarLinks = await getTopbarLinks();

  return {
    props: {
      topbarLinks,
    },
  };
}
