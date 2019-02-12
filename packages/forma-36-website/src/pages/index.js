import React from 'react';
import {
  DisplayText,
  Subheading,
  Paragraph,
  Button,
  TextLink,
  Card,
} from '@contentful/forma-36-react-components';
import Logo from '../components/Logo';
import Imprint from '../components/Imprint';

import Layout from '../components/Layout';

const IndexPage = props => (
  <Layout {...props}>
    <div className="f36-margin-bottom--s">
      <DisplayText>Forma 36</DisplayText>
    </div>
    <div className="center-content f36-margin-bottom--xl">
      <Subheading extraClassNames="f36-font-weight--normal no-wrap">
        The Contentful Design System
      </Subheading>
    </div>
    <div className="center-content f36-margin-bottom--m">
      <Button href="https://github.com/contentful/forma-36">
        View GitHub repository
      </Button>
    </div>
    <Paragraph extraClassNames="center-content">
      <TextLink href="https://f36-storybook.contentful.com/">
        View React components
      </TextLink>
    </Paragraph>
    <Imprint />
  </Layout>
);

export default IndexPage;
