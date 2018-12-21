import React from 'react';
import DisplayText from '@contentful/forma-36-react-components/dist/components/Typography/DisplayText';
import Card from '@contentful/forma-36-react-components/dist/components/Card/Card';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Card extraClassNames="f36-padding--xl">
      <DisplayText>404 NOT FOUND</DisplayText>
    </Card>
  </Layout>
);

export default NotFoundPage;
