import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { MDXProvider } from '@mdx-js/react';

import tokens from '@contentful/f36-tokens';
import { PropsProvider } from '@contentful/f36-docs-utils';
import {
  DisplayText,
  Heading,
  Subheading,
  Paragraph,
  TextLink,
  List,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from '@contentful/f36-components';

import ComponentSource from './ComponentSource';
import DocFormatter from './DocFormatter';
import Footer from './Footer';
import { StaticSource } from './StaticSource';

const styles = {
  contentContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  `,

  pageContent: css`
    width: 960px;
    margin: 0 auto;
    padding-top: ${tokens.spacing2Xl};
  `,

  homePageContent: css`
    width: auto;
  `,
};

/* eslint-disable react/display-name */
const markToComponentMap = {
  h1: (props) => (
    <DisplayText marginBottom="spacingL" marginTop="spacingXl" {...props} />
  ),
  h2: (props) => (
    <Heading
      element="h2"
      marginBottom="spacingL"
      marginTop="spacingXl"
      {...props}
    />
  ),
  h3: (props) => (
    <Subheading
      element="h3"
      marginBottom="spacingM"
      marginTop="spacingL"
      {...props}
    />
  ),
  h4: (props) => (
    <Subheading
      element="h4"
      marginBottom="spacingM"
      marginTop="spacingL"
      {...props}
    />
  ),
  h5: (props) => (
    <Subheading
      element="h5"
      marginBottom="spacingM"
      marginTop="spacingL"
      {...props}
    />
  ),
  h6: (props) => (
    <Subheading
      marginBottom="spacingS"
      marginTop="spacingM"
      element="h6"
      {...props}
    />
  ),
  p: (props) => <Paragraph marginBottom="spacingS" {...props} />,
  a: (props) => <TextLink {...props} />,
  ul: (props) => <List className="f36-margin-bottom--m" {...props} />,
  li: (props) => <List.Item className="f36-color--text-mid" {...props} />,
  code: (props) => {
    if (props.static) {
      return <StaticSource {...props} />;
    }
    return <ComponentSource>{props.children}</ComponentSource>;
  },
  table: (props) => <Table className="f36-margin-bottom--m" {...props} />,
  thead: (props) => <TableHead {...props} />,
  tbody: (props) => <TableBody {...props} />,
  tr: (props) => <TableRow {...props} />,
  th: (props) => <TableCell style={{ textAlign: 'left' }} {...props} />,
  td: (props) => <TableCell {...props} />,
};
/* eslint-enable react/display-name */

export default function Container(data) {
  const { frontmatter, children, dataFromReadme, propsMetadata } = data;

  const contentClassName =
    frontmatter?.type === 'home' ? styles.homePageContent : styles.pageContent;

  return (
    <div className={styles.contentContainer}>
      <PropsProvider metadata={propsMetadata}>
        <Box className={contentClassName}>
          <MDXProvider components={markToComponentMap}>
            <DocFormatter
              frontmatter={frontmatter}
              dataFromReadme={dataFromReadme}
            >
              {children}
            </DocFormatter>
          </MDXProvider>
        </Box>
      </PropsProvider>

      <Footer />
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
