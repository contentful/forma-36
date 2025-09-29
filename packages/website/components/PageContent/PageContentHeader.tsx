import React from 'react';
import { css, cx } from '@emotion/css';

import tokens from '@contentful/f36-tokens';
import { DisplayText, Flex, TextLink, Note } from '@contentful/f36-components';

import type { FrontMatter } from '../../types';
import { getGridStyles } from '../../utils/getGridStyles';
import { ArrowSquareOutIcon } from '@contentful/f36-icons';

const styles = {
  header: css({
    gridArea: 'header',
    gridAutoRows: 'min-content',
    padding: `${tokens.spacing4Xl} 0 ${tokens.spacingM}`,
    borderBottom: `1px solid ${tokens.gray300}`,
    marginBottom: tokens.spacing2Xl,
    // this selector will make sure that all children of the header will start at the first column of its grid
    '> *': {
      gridColumnStart: 1,
    },
  }),
  intro: css({
    // This will add a bigger fontSize to the first p and to anchors inside of it
    '> p:first-child, > p:first-child a': {
      fontSize: tokens.fontSizeXl,
      lineHeight: tokens.lineHeightXl,
    },
    '> p:last-child': {
      marginBottom: 0,
    },
  }),
  gitHubLink: css({
    gridColumnStart: 'initial',
  }),
};

interface PageContentHeaderProps {
  title: FrontMatter['title'];
  status?: FrontMatter['status'];
  children?: React.ReactNode;
}

const getGithubIssueLink = (title) => {
  const queryParams = {
    title: `💬  Feedback - ${title}`,
    assignees: 'Lelith, veu, cf-remylenoir, damann',
    template: 'component-feedback.md',
  };
  const queryString = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join('&');
  return `https://github.com/contentful/forma-36/issues/new?${queryString}`;
};

export function PageContentHeader({
  title,
  status = 'stable',
  children,
}: PageContentHeaderProps) {
  const gridStyles = getGridStyles();
  const isDeprecated = status === 'deprecated';
  const isAlpha = status === 'alpha';
  const isBeta = status === 'beta';
  const showNote = status !== 'stable';

  return (
    <header className={cx(gridStyles.contentColumns, styles.header)}>
      <DisplayText as="h1" marginBottom={showNote ? 'spacingXl' : 'spacingXs'}>
        {title}
      </DisplayText>

      <Flex
        className={styles.gitHubLink}
        paddingLeft="spacing2Xl"
        flexDirection="column"
        gap={tokens.spacingXs}
        alignItems="start"
      >
        <TextLink
          href={getGithubIssueLink(title)}
          target="_blank"
          rel="noopener noreferrer"
          icon={<ArrowSquareOutIcon />}
          alignIcon="end"
        >
          Give feedback
        </TextLink>
      </Flex>

      {isDeprecated && (
        <Flex flexDirection="column" marginBottom="spacingXl">
          <Note variant="negative" title="Deprecated component">
            {title} component has been deprecated and is not supported or
            recommended for use.
          </Note>
        </Flex>
      )}

      {(isAlpha || isBeta) && (
        <Flex flexDirection="column" marginBottom="spacingXl">
          <Note
            variant="neutral"
            title={`${isAlpha ? 'Alpha' : 'Beta'} component`}
          >
            {isAlpha
              ? `${title} component is subject to major changes and is for
              experimentation purposes only. Not recommended for use in production
              software.`
              : `${title} component is ready to use but may have some bugs. Use in
              production software with caution.`}
          </Note>
        </Flex>
      )}

      <Flex flexDirection="column" className={styles.intro}>
        {children}
      </Flex>
    </header>
  );
}
