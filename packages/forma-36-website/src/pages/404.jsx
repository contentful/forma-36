import React from 'react';
import { DisplayText, Card } from '@contentful/f36-components';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Card className="f36-padding--xl">
      <DisplayText>{`We're unable to find the page you're looking for.`}</DisplayText>
    </Card>
  </Layout>
);

export default NotFoundPage;
