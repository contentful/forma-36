import React from 'react';
import PropTypes from 'prop-types';
import tokens from '@contentful/forma-36-tokens';
import { css } from 'emotion';
import { MDXProvider } from '@mdx-js/tag';
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
import ComponentHeader from './ComponentHeader';
import ChildSections from './ChildSections';
import { graphql } from 'gatsby';

const styles = {
  container: css`
    min-height: 100vh;
    flex: 1;
    padding: ${tokens.spacing4Xl};
  `,

  inner: css`
    max-width: 800px;
  `,
};

const markToComponentMap = {
  h1: props => <DisplayText {...props} />,
  h2: props => <Heading {...props} />,
  h3: props => <Subheading {...props} />,
  h4: props => <Subheading {...props} />,
  h5: props => <Subheading {...props} />,
  h6: props => <Subheading {...props} />,
  p: props => <Paragraph {...props} />,
  a: props => <TextLink {...props} />,
  ul: props => <List extraClassNames="f36-margin-bottom--m" {...props} />,
  li: props => <ListItem extraClassNames="f36-color--text-mid" {...props} />,
  code: props => <ComponentSource>{props.children}</ComponentSource>,
  table: props => <Table extraClassNames="f36-margin-bottom--m" {...props} />,
  thead: props => <TableHead {...props} />,
  tbody: props => <TableBody {...props} />,
  tr: props => <TableRow {...props} />,
  th: props => <TableCell {...props} />,
  td: props => <TableCell {...props} />,
};

const Container = data => {
  console.log({ data });
  const { frontmatter, children } = data;

  return (
    <div className={styles.container}>
      {frontmatter.type === 'component' && (
        <ComponentHeader
          title={frontmatter.title}
          githubUrl={frontmatter.github}
          storybookUrl={frontmatter.storybook}
        />
      )}

      <Typography extraClassNames={styles.inner}>
        <MDXProvider components={markToComponentMap}>{children}</MDXProvider>
      </Typography>

      {frontmatter.subpages && <ChildSections items={frontmatter.subpages} />}
    </div>
  );
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
