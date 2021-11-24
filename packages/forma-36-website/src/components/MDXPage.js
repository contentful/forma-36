import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import tokens from '@contentful/f36-tokens';
import { PropsProvider } from '@contentful/f36-docs-utils';
import {
  Badge,
  Box,
  DisplayText,
  Heading,
  List,
  Paragraph,
  Stack,
  Subheading,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextLink,
} from '@contentful/f36-components';

import ComponentSource from './ComponentSource';
import { StaticSource } from './StaticSource';

import storybookIcon from '../images/storybook.svg';
import githubIcon from '../images/github.svg';

const styles = {
  pageContent: css`
    width: 960px;
    margin: 0 auto;
    padding-top: ${tokens.spacing2Xl};
  `,
  header: css`
    width: 960px;
    margin: 0 auto;
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
    padding: calc(${tokens.spacing2Xs} / 2) ${tokens.spacingXs};
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

/* eslint-disable react/display-name */
const markToComponentMap = {
  h1: (props) => <DisplayText {...props} />,
  h2: (props) => <Heading as="h2" marginTop="spacing2Xl" {...props} />,
  h3: (props) => <Subheading as="h3" marginTop="spacingL" {...props} />,
  h4: (props) => <Subheading as="h4" {...props} />,
  h5: (props) => <Subheading as="h5" {...props} />,
  h6: (props) => <Subheading as="h6" {...props} />,
  p: (props) => <Paragraph {...props} />,
  a: (props) => <TextLink {...props} />,
  ul: (props) => <List {...props} />,
  li: (props) => <List.Item {...props} />,
  code: (props) => {
    if (props.static) {
      return <StaticSource {...props} />;
    }
    return <ComponentSource>{props.children}</ComponentSource>;
  },
  table: (props) => (
    <Box marginBottom="spacingM">
      <Table {...props} />
    </Box>
  ),
  thead: (props) => <TableHead {...props} />,
  tbody: (props) => <TableBody {...props} />,
  tr: (props) => <TableRow {...props} />,
  th: (props) => <TableCell style={{ textAlign: 'left' }} {...props} />,
  td: (props) => <TableCell {...props} />,
};
/* eslint-enable react/display-name */

export default function MDXPageV4({ mdxContent, frontmatter, propsMetadata }) {
  console.log(frontmatter);
  return (
    <Box className={styles.pageContent}>
      <PropsProvider metadata={propsMetadata}>
        <MDXProvider components={markToComponentMap}>
          {!frontmatter.v4Doc && (
            <header className={styles.header}>
              {frontmatter?.title && (
                <DisplayText marginBottom="spacingL">
                  {frontmatter.title}
                </DisplayText>
              )}

              <div className={styles.subheaderRow}>
                <div className={styles.buttonList}>
                  {frontmatter?.storybook && (
                    <a
                      className={styles.imageLink}
                      href={frontmatter.storybook}
                      title={`View ${frontmatter?.title} in Storybook`}
                    >
                      <img src={storybookIcon} alt="" />
                      <span>Storybook</span>
                    </a>
                  )}
                  {frontmatter?.github && (
                    <a
                      className={styles.imageLink}
                      href={frontmatter.github}
                      title={`View ${frontmatter?.title} on GitHub`}
                    >
                      <img src={githubIcon} alt="" />
                      <span>Github</span>
                    </a>
                  )}
                </div>

                {frontmatter?.status && (
                  <span className={styles.badge}>
                    <Badge
                      variant={
                        frontmatter.status === 'alpha' ? 'warning' : 'positive'
                      }
                    >
                      {frontmatter.status}
                    </Badge>
                  </span>
                )}
              </div>
            </header>
          )}

          <main>
            {frontmatter.v4Doc && (
              <DisplayText as="h1" size="large">
                {frontmatter.title}
              </DisplayText>
            )}

            <MDXRenderer>{mdxContent}</MDXRenderer>

            {frontmatter.v4Doc && (
              <>
                <Heading
                  as="h2"
                  id="help-improve-this-page"
                  marginTop="spacing2Xl"
                >
                  Help improve this page
                </Heading>
                <Stack>
                  <TextLink href={frontmatter.githubUrl} target="_blank">
                    Edit on Github
                  </TextLink>

                  <TextLink href="/contributing">
                    Read the contribution guide
                  </TextLink>
                </Stack>
              </>
            )}
          </main>
        </MDXProvider>
      </PropsProvider>
    </Box>
  );
}

MDXPageV4.propTypes = {
  mdxContent: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    githubUrl: PropTypes.string,
    storybookUrl: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  propsMetadata: PropTypes.object.isRequired,
};
