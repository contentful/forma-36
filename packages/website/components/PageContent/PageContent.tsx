import React from 'react';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { css, cx } from 'emotion';
import { Flex, Text } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

import type { FrontMatter } from '../../types';
import {
  getGridStyles,
  SCREEN_BREAKPOINT_LARGE,
} from '../../utils/getGridStyles';
import { TableOfContent, TableOfContentProps } from './TableOfContent';
import { MdxRenderer } from '../MdxRenderer';
import { PageContentHeader } from './PageContentHeader';
import { PageContentFooter } from './PageContentFooter';
import type { RichTextProps } from '../ContentfulRichText';
import { RichText } from '../ContentfulRichText';

const styles = {
  grid: css({
    flex: 1, // this is necessary to make the footer sticky to the bottom of the page
    gridAutoRows: 'min-content',
    gridTemplateAreas: `
      "header header"
      "content toc"
    `,
    [`@media screen and (min-width: ${SCREEN_BREAKPOINT_LARGE})`]: {
      gridTemplateAreas: `
        ". header header ."
        ". content toc ."
      `,
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

export interface PageContentProps {
  headings: TableOfContentProps['headings'];
  frontMatter: FrontMatter;
  source: {
    mainContent?: MDXRemoteSerializeResult;
    shortIntro?: MDXRemoteSerializeResult;
    richTextBody?: RichTextProps['document'];
    richTextLinks?: RichTextProps['links'];
    contentfulShortIntro?: string;
  };
}

export function PageContent({
  headings,
  frontMatter,
  source,
}: PageContentProps) {
  const gridStyles = getGridStyles();
  const { title, github, status } = frontMatter;

  return (
    <div
      className={cx(
        styles.grid,
        gridStyles.contentColumns,
        gridStyles.contentColumnsBigScreens,
      )}
    >
      <PageContentHeader title={title} status={status}>
        {source.shortIntro && <MdxRenderer source={source.shortIntro} />}
        {source.contentfulShortIntro && (
          <Text as="p" fontSize="fontSizeL" lineHeight="lineHeightL">
            {source.contentfulShortIntro}
          </Text>
        )}
      </PageContentHeader>

      <Flex flexDirection="column" className={styles.content}>
        {/**
         * We need to wrap the text of the page into an element without Grid or Flex
         * because we want the margins of our headings and paragraphs to collapse
         * to make it easier to maintain the spacing between the elements
         * A good article about margin collapse by Josh Comeau:
         * https://www.joshwcomeau.com/css/rules-of-margin-collapse/#flow-layout-only
         */}
        <article className={styles.article}>
          {source.mainContent && <MdxRenderer source={source.mainContent} />}
          {source.richTextBody && (
            <RichText
              document={source.richTextBody}
              links={source.richTextLinks}
            />
          )}
        </article>
        <PageContentFooter github={github} />
      </Flex>

      {headings.length > 1 && (
        <nav className={styles.tableOfContent}>
          <TableOfContent headings={headings} />
        </nav>
      )}
    </div>
  );
}
