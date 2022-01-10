import React from 'react';
import { css } from 'emotion';
import {
  DisplayText,
  Flex,
  TextLink,
  Stack,
  Heading,
  Paragraph,
  Text,
  Note,
} from '@contentful/f36-components';
import { ExternalLinkIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

import type { FrontMatter } from '../types';
import { TableOfContent, HeadingType } from './TableOfContent';

const styles = {
  grid: css({
    display: 'grid',
    gridTemplateColumns: '8fr 2fr',
    flex: 1, // this is necessary to make the footer sticky to the bottom of the page
    padding: `0 ${tokens.spacingL}`,
    '@media screen and (min-width: 1440px)': {
      gridTemplateColumns: '1fr 7fr 2fr',
    },
    '@media screen and (min-width: 1700px)': {
      gridTemplateColumns: '1fr 6fr 2fr 1fr',
    },
  }),
  header: css({
    display: 'grid',
    gridTemplateColumns: '8fr 2fr',
    paddingTop: tokens.spacing2Xl,
    paddingBottom: tokens.spacingM,
    borderBottom: `1px solid ${tokens.gray300}`,
    marginBottom: tokens.spacing2Xl,
    gridColumnStart: 1,
    gridColumnEnd: 3,
    '@media screen and (min-width: 1440px)': {
      gridTemplateColumns: '7fr 2fr',
      gridColumnStart: 2,
      gridColumnEnd: 4,
    },
    '@media screen and (min-width: 1700px)': {
      gridTemplateColumns: '6fr 2fr',
    },
  }),
  content: css({
    '@media screen and (min-width: 1440px)': {
      gridColumnStart: 2,
    },
  }),
  article: css({
    // this style makes sure that the first element of the content doesn't have extra spacing
    '> *:first-child': { marginTop: 0 },
  }),
  tableOfContent: css({
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: tokens.spacing2Xl,
    paddingLeft: tokens.spacing2Xl,
    alignSelf: 'start',
    overflowY: 'auto',
    overscrollBehavior: 'contain',
  }),
};

interface PageHeaderProps {
  title: FrontMatter['title'];
  github?: FrontMatter['github'];
  intro?: FrontMatter['intro'];
  extra?: FrontMatter['extra'];
  status?: FrontMatter['status'];
}

function PageHeader({ title, github, intro, extra, status }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <Flex alignItems="flex-start" justifyContent="space-between">
        {title && (
          <DisplayText as="h1" marginBottom="spacingXs">
            {title}
          </DisplayText>
        )}

        {github && (
          <TextLink
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            icon={<ExternalLinkIcon />}
            alignIcon="end"
          >
            View on Github
          </TextLink>
        )}
      </Flex>

      {status === 'deprecated' && (
        <Note
          variant="negative"
          title="Deprecated component"
          className={css({ gridColumnStart: 1, marginTop: tokens.spacingXl })}
        >
          {title} was deprecated in February 2022. It will be deleted from the
          repository in 6 months.
        </Note>
      )}

      {(intro || extra) && (
        <Flex flexDirection="column" className={css({ gridRowStart: 2 })}>
          {intro && (
            <Text as="p" fontSize="fontSizeXl" marginBottom="spacingL">
              {intro}
            </Text>
          )}
          {extra && <Paragraph marginBottom="none">{extra}</Paragraph>}
        </Flex>
      )}
    </header>
  );
}

function PageFooter(props: { github?: FrontMatter['github'] }) {
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
  frontMatter: FrontMatter;
  children: React.ReactChild;
}

export function PageContent({
  headings,
  frontMatter,
  children,
}: PageContentProps) {
  const { title, github, intro, extra, status } = frontMatter;

  return (
    <div className={styles.grid}>
      <PageHeader
        title={title}
        github={github}
        intro={intro}
        extra={extra}
        status={status}
      />

      <Flex flexDirection="column" className={styles.content}>
        {/**
         * We need to wrap the text of the page into an element without Grid or Flex
         * because we want the margins of our headings and paragraphs to collapse
         * to make it easier to maintain the spacing between the elements
         * A good article about margin collapse by Josh Comeau:
         * https://www.joshwcomeau.com/css/rules-of-margin-collapse/#flow-layout-only
         */}
        <article className={styles.article}>{children}</article>

        <PageFooter github={github} />
      </Flex>

      {headings.length > 1 && (
        <nav className={styles.tableOfContent}>
          <TableOfContent headings={headings} />
        </nav>
      )}
    </div>
  );
}
