import React from 'react';
import DisplayText from '@contentful/forma-36-react-components/dist/components/Typography/DisplayText';
import Subheading from '@contentful/forma-36-react-components/dist/components/Typography/Subheading';
import Paragraph from '@contentful/forma-36-react-components/dist/components/Typography/Paragraph';
import Button from '@contentful/forma-36-react-components/dist/components/Button/Button';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <DisplayText size="large" extraClassNames="mb-s">
      Forma 36
    </DisplayText>
    <Subheading element="h2" extraClassNames="mb-xs">
      A design system by Contentful
    </Subheading>
    <div>
      <Paragraph extraClassNames="mb-l" style={{ maxWidth: 600 }}>
        Welcome to Forma 36 the design system by contentful. This project is
        currently in alpha and we're actively building the documentation. The
        design system will help you building UI extensions and contentful
        related applications by offering guidelines on visual style, copy and
        UX. We also offer a react component library which will get you up to
        speed in no time.
      </Paragraph>
      <Button
        href="https://github.com/contentful/forma-36"
        size="large"
        extraClassNames="mr-s"
      >
        Forma 36 on Github
      </Button>
      <Button
        buttonType="positive"
        size="large"
        href="https://www.contentful.com/slack/"
      >
        Visit Community Slack
      </Button>
    </div>
  </Layout>
);

export default IndexPage;
