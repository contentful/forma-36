import React from 'react';
import DisplayText from '@contentful/forma-36-react-components/dist/components/Typography/DisplayText';
import Subheading from '@contentful/forma-36-react-components/dist/components/Typography/Subheading';
import Paragraph from '@contentful/forma-36-react-components/dist/components/Typography/Paragraph';
import Button from '@contentful/forma-36-react-components/dist/components/Button/Button';
import TextLink from '@contentful/forma-36-react-components/dist/components/TextLink/TextLink';
import Card from '@contentful/forma-36-react-components/dist/components/Card/Card';
import Logo from '../components/Logo';
import Imprint from '../components/Imprint';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Card extraClassNames="f36-padding-vertical--2xl card">
      <div className="center-content f36-margin-bottom--xl">
        <Logo />
      </div>
      <div className="center-content f36-margin-bottom--s">
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
