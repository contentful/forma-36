import React from 'react';
import { css } from 'emotion';
import {
  DisplayText,
  Badge,
  Flex,
  TextLink,
  Stack,
  Heading,
} from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

import { TableOfContent, HeadingType } from './TableOfContent';

import storybookIcon from '../resources/icons/storybook.svg';
import githubIcon from '../resources/icons/github.svg';

const styles = {
  grid: css({
    display: 'grid',
    gridTemplateColumns: '8fr 2fr',
    columnGap: tokens.spacingM,
    flex: 1, // this is necessary to make the footer sticky to the bottom of the page
    margin: '0 auto',
    '@media screen and (min-width: 1440px)': {
      gridTemplateColumns: '1fr 7fr 2fr',
    },
    '@media screen and (min-width: 1700px)': {
      gridTemplateColumns: '1fr 6fr 2fr 1fr',
    },
  }),
  header: css({
    paddingTop: tokens.spacing2Xl,
    paddingBottom: tokens.spacingM,
    borderBottom: `1px solid ${tokens.gray300}`,
    gridColumnStart: 1,
    gridColumnEnd: 3,
    '@media screen and (min-width: 1440px)': {
      gridColumnStart: 2,
      gridColumnEnd: 4,
    },
  }),
  content: css({
    paddingTop: tokens.spacing2Xl,
    '@media screen and (min-width: 1440px)': {
      gridColumnStart: 2,
    },
  }),
  tableOfContent: css({
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: tokens.spacing2Xl,
    paddingTop: tokens.spacing2Xl,
    alignSelf: 'start',
    overflowY: 'auto',
    overscrollBehavior: 'contain',
  }),
  subheaderRow: css`
    display: flex;
    justify-content: space-between;
  `,
  badge: css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: ${tokens.spacingM};
  `,
  imageLink: css`
    font-size: ${tokens.fontSizeM};
    color: ${tokens.gray700};
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: ${tokens.spacingXs};
    margin-right: ${tokens.spacingM};
    border-radius: calc(${tokens.fontSizeS} / 5);

    &:hover {
      background-color: ${tokens.gray200};
    }

    img {
      margin-right: ${tokens.spacingXs};
    }
  `,
  buttonList: css`
    display: flex;
  `,
};

function PageHeader(props: {
  title?: string;
  storybook?: string;
  github?: string;
  status?: string;
}) {
  return (
    <header className={styles.header}>
      {props.title && <DisplayText as="h1">{props.title}</DisplayText>}
      {(props.github || props.status || props.storybook) && (
        <div className={styles.subheaderRow}>
          <div className={styles.buttonList}>
            {props.storybook && (
              <a
                className={styles.imageLink}
                href={props.storybook}
                title={`View ${props.title} in Storybook`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img {...storybookIcon} alt="" />
                <span>Storybook</span>
              </a>
            )}
            {props?.github && (
              <a
                className={styles.imageLink}
                href={props.github}
                title={`View ${props?.title} on GitHub`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img {...githubIcon} alt="" />
                <span>Github</span>
              </a>
            )}
          </div>
          {props?.status && (
            <span className={styles.badge}>
              <Badge
                variant={
                  props.status === 'alpha'
                    ? 'warning'
                    : props?.status === 'deprecated'
                    ? 'negative'
                    : 'positive'
                }
              >
                {props.status}
              </Badge>
            </span>
          )}
        </div>
      )}
    </header>
  );
}

function PageFooter(props: { github?: string }) {
  return (
    <Flex flexDirection="column" marginTop="spacing2Xl">
      <Heading as="h2" id="help-improve-this-page">
        Help improve this page
      </Heading>
      <Stack>
        {props.github && (
          <TextLink
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit on Github
          </TextLink>
        )}

        <TextLink href="/contributing">Read the contribution guide</TextLink>
      </Stack>
    </Flex>
  );
}

interface PageContentProps {
  headings: HeadingType[];
  frontMatter: {
    title: string;
    storybook?: string;
    github?: string;
    toc?: false;
    status?: string;
  };
  children: React.ReactChild;
}

export function PageContent(props: PageContentProps) {
  console.log({ frontMatter: props.frontMatter });

  return (
    <div className={styles.grid}>
      <PageHeader {...props.frontMatter} />

      <Flex as="article" flexDirection="column" className={styles.content}>
        {/**
         * We need to wrap the text of the page into an element without Grid or Flex
         * because we want the margins of our headings and paragraphs to collapse
         * to make it easier to maintain the spacing between the elements
         * A good article about margin collapse by Josh Comeau:
         * https://www.joshwcomeau.com/css/rules-of-margin-collapse/#flow-layout-only
         */}
        <article>{props.children}</article>

        <PageFooter github={props.frontMatter.github} />
      </Flex>

      {props.headings.length > 1 && (
        <nav className={styles.tableOfContent}>
          <TableOfContent headings={props.headings} />
        </nav>
      )}
    </div>
  );
}
