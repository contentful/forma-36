import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';
import {
  DisplayText,
  Badge,
  TextLink,
  Stack,
  Subheading,
} from '@contentful/f36-components';
import { Flex } from '@contentful/f36-core';
import { TableOfContent, TocType } from './TableOfContent';
import storybookIcon from '../resources/icons/storybook.svg';
import githubIcon from '../resources/icons/github.svg';

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: ${tokens.spacingXl} ${tokens.spacing2Xl} 0 ${tokens.spacing2Xl};
  `,
  header: css`
    padding-bottom: ${tokens.spacingXl};
    margin-bottom: ${tokens.spacingXl};
    border-bottom: 1px solid ${tokens.gray300};
  `,
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
  secondaryNav: css`
    display: block;
    position: sticky;
    top: ${tokens.spacingM};
    align-self: start;
    overflow-y: auto;
    overscroll-behavior: contain;
    min-width: 12rem;
    max-width: 18rem;
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
      {props.title && (
        <DisplayText as="h1" marginBottom="spacingL">
          {props.title}
        </DisplayText>
      )}
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
    <>
      <Subheading as="h3" id="help-improve-this-page" marginTop="spacing2Xl">
        Help improve this page
      </Subheading>
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
    </>
  );
}

export function PageContent(props: {
  toc: TocType;
  frontMatter: {
    title: string;
    storybook?: string;
    github?: string;
    toc?: false;
    [key: string]: unknown;
  };
  children: React.ReactChild;
}) {
  return (
    <article className={styles.root}>
      <Flex>
        <Flex
          flexDirection="column"
          fullWidth
          paddingRight="spacingL"
          style={{ maxWidth: '44.5rem', letterSpacing: 'initial' }}
        >
          <PageHeader {...props.frontMatter} />
          {props.children}
        </Flex>
        {props.frontMatter.toc === false ? null : (
          <nav className={styles.secondaryNav}>
            <TableOfContent toc={props.toc} />
          </nav>
        )}
      </Flex>

      <PageFooter {...props.frontMatter} />
    </article>
  );
}
