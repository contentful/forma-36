import React from 'react';
import { css, cx } from 'emotion';
import { DisplayText, Flex, TextLink, Note } from '@contentful/f36-components';
import { ExternalLinkIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

import type { FrontMatter } from '../../types';
import { getGridStyles } from '../../utils/getGridStyles';

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
    assignees: 'm10l,burakukula,mshaaban0,gui-santos,denkristoffer,Lelith',
    template: 'component-feedback.md',
  };
  const queryString = Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join('&');
  return `https://github.com/contentful/forma-36/issues/new?${queryString}`;
};

export function PageContentHeader({
  title,
  status,
  children,
}: PageContentHeaderProps) {
  const gridStyles = getGridStyles();
  const isDeprecated = status === 'deprecated';
  const isAlpha = status === 'alpha';
  const showNote = isAlpha || isDeprecated;

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
          icon={<ExternalLinkIcon />}
          alignIcon="end"
        >
          Give feedback
        </TextLink>
      </Flex>

      {isDeprecated && (
        <Flex flexDirection="column" marginBottom="spacingXl">
          <Note variant="negative" title="Deprecated component">
            {title} was deprecated in v4. It will be deleted from the repository
            on 12th July 2022.
          </Note>
        </Flex>
      )}

      {isAlpha && (
        <Flex flexDirection="column" marginBottom="spacingXl">
          <Note variant="positive" title="Alpha component">
            {title} is not ready to be used in production. Use at your own risk.
          </Note>
        </Flex>
      )}

      <Flex flexDirection="column" className={styles.intro}>
        {children}
      </Flex>
    </header>
  );
}
