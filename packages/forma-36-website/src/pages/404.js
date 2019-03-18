import React from 'react';
import { DisplayText, Card } from '@contentful/forma-36-react-components';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Card className="f36-padding--xl">
      <DisplayText>404 NOT FOUND</DisplayText>
    </Card>
  </Layout>
);

export default NotFoundPage;
