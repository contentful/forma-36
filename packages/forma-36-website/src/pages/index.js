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

const IndexPage = () => (
  <Layout>
    <Card className="f36-padding-vertical--2xl card">
      <div className="center-content f36-margin-bottom--xl">
        <Logo />
      </div>
      <div className="center-content f36-margin-bottom--s">
        <DisplayText>Forma 36</DisplayText>
      </div>
      <div className="center-content f36-margin-bottom--xl">
        <Subheading className="f36-font-weight--normal no-wrap">
          The Contentful Design System
        </Subheading>
      </div>
      <div className="center-content f36-margin-bottom--m">
        <Button href="https://github.com/contentful/forma-36">
          View GitHub repository
        </Button>
      </div>
      <Paragraph className="center-content">
        <TextLink
          linkType="secondary"
          href="https://f36-storybook.contentful.com/"
        >
          View React components
        </TextLink>
      </Paragraph>
    </Card>
    <Imprint />
  </Layout>
);

export default IndexPage;
