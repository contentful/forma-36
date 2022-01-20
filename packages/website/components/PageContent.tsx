import React from 'react';
import { css } from 'emotion';
import {
  DisplayText,
  Flex,
  TextLink,
  Stack,
  Heading,
  Text,
  Note,
} from '@contentful/f36-components';
import { ExternalLinkIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

import type { FrontMatter } from '../types';
import { TableOfContent, HeadingType } from './TableOfContent';

const templateColumns = '3fr 1fr';

const styles = {
  grid: css({
    display: 'grid',
    gridAutoRows: 'min-content',
    gridTemplateColumns: templateColumns,
    gridTemplateAreas: `
      "header header"
      "content toc"
    `,
    flex: 1, // this is necessary to make the footer sticky to the bottom of the page
    padding: `0 ${tokens.spacingL}`,
    '@media screen and (min-width: 1600px)': {
      gridTemplateColumns: '1fr 720px 240px 1fr',
      gridTemplateAreas: `
        ". header header ."
        ". content toc ."
      `,
    },
  }),
  header: css({
    gridArea: 'header',
    display: 'grid',
    gridTemplateColumns: templateColumns,
    gridAutoRows: 'min-content',
    paddingTop: tokens.spacing4Xl,
    paddingBottom: tokens.spacingM,
    borderBottom: `1px solid ${tokens.gray300}`,
    marginBottom: tokens.spacing2Xl,
    // this selector will make sure that all children of the header will start at the first column of its grid
    '> *': {
      gridColumnStart: 1,
    },
  }),
  content: css({
    gridArea: 'content',
  }),
  article: css({
    // this style makes sure that the first element of the content doesn't have extra spacing
    '> *:first-child': { marginTop: 0 },
  }),
  tableOfContent: css({
    gridArea: 'toc',
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
  description?: FrontMatter['description'];
  status?: FrontMatter['status'];
}

function PageHeader({ title, github, description, status }: PageHeaderProps) {
  const showNote = status === 'deprecated';

  return (
    <header className={styles.header}>
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        marginBottom={showNote ? 'spacingXl' : 'spacingXs'}
      >
        {title && (
          <DisplayText as="h1" marginBottom="none">
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

      {showNote && (
        <Flex flexDirection="column" marginBottom="spacingXl">
          <Note variant="negative" title="Deprecated component">
            {title} was deprecated in v4. It will be deleted from the repository
            on 12th July 2022.
          </Note>
        </Flex>
      )}

      {description && (
        <Text as="p" fontSize="fontSizeXl" lineHeight="lineHeightXl">
          {description}
        </Text>
      )}
    </header>
  );
}

function PageFooter({ github }: { github?: FrontMatter['github'] }) {
  return (
    <Flex flexDirection="column" marginTop="spacing2Xl">
      <Heading as="h2" id="help-improve-this-page">
        Help improve this page
      </Heading>
      <Stack>
        {github && (
          <TextLink href={github} target="_blank" rel="noopener noreferrer">
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
  const { title, github, description, status } = frontMatter;

  return (
    <div className={styles.grid}>
      <PageHeader
        title={title}
        github={github}
        description={description}
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
