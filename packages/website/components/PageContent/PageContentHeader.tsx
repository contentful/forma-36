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
};

interface PageContentHeaderProps {
  title: FrontMatter['title'];
  github?: FrontMatter['github'];
  status?: FrontMatter['status'];
  children?: React.ReactNode;
}

export function PageContentHeader({
  title,
  github,
  status,
  children,
}: PageContentHeaderProps) {
  const gridStyles = getGridStyles();
  const showNote = status === 'deprecated';

  return (
    <header className={cx(gridStyles.contentColumns, styles.header)}>
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        marginBottom={showNote ? 'spacingXl' : 'spacingXs'}
      >
        <DisplayText as="h1" marginBottom="none">
          {title}
        </DisplayText>

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

      {children}
    </header>
  );
}
