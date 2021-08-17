/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import tokens from '@contentful/forma-36-tokens';
import { css } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import {
  Typography,
  DisplayText,
  Heading,
  Subheading,
  Paragraph,
  TextLink,
  List,
  ListItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@contentful/forma-36-react-components';
import ComponentSource from './ComponentSource';
import DocFormatter from './DocFormatter';
import Footer from './Footer';
import { StaticSource } from './StaticSource';

const styles = {
  container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  `,

  main: css`
    flex: 1 1 0;
    padding: '40px';
  `,

  inner: css`
    width: 960px;
    margin: 0 auto;
    padding: ${tokens.spacing2Xl} ${tokens.spacingL} ${tokens.spacingL};
  `,

  innerHomePage: css`
    width: auto;
    text-align: center;
  `,
};

const markToComponentMap = {
  h1: (props) => <DisplayText {...props} />,
  h2: (props) => <Heading element="h2" {...props} />,
  h3: (props) => <Subheading element="h3" {...props} />,
  h4: (props) => <Subheading element="h4" {...props} />,
  h5: (props) => <Subheading element="h5" {...props} />,
  h6: (props) => <Subheading element="h6" {...props} />,
  p: (props) => <Paragraph className="f36-font-size--l" {...props} />,
  a: (props) => <TextLink style={{ fontSize: tokens.fontSizeL }} {...props} />,
  ul: (props) => <List className="f36-margin-bottom--m" {...props} />,
  li: (props) => (
    <ListItem className="f36-font-size--l f36-color--text-mid" {...props} />
  ),
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
  th: (props) => (
    <TableCell
      className="f36-font-size--l"
      style={{ textAlign: 'left' }}
      {...props}
    />
  ),
  td: (props) => <TableCell className="f36-font-size--l" {...props} />,
};

const Container = (data) => {
  const { frontmatter, children, dataFromReadme } = data;
  const isHomePage = frontmatter && frontmatter.type === 'home';

  return (
    <div css={styles.container}>
      <div css={styles.main}>
        <Typography css={isHomePage ? styles.innerHomePage : styles.inner}>
          <MDXProvider components={markToComponentMap}>
            <DocFormatter
              frontmatter={frontmatter}
              dataFromReadme={dataFromReadme}
            >
              {children}
            </DocFormatter>
          </MDXProvider>
        </Typography>
      </div>
      <Footer />
    </div>
  );
};
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
