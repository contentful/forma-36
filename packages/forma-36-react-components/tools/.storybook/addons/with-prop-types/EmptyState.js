import React from 'react';
import { styled } from '@storybook/theming';
import tokens from '@contentful/forma-36-tokens';

const Container = styled.div`
  padding: 20px;
`;

const ComponentName = styled.h2`
  margin-bottom: 20px;
  margin-top: 0px;
`;

const EmptyState = () => {
  return (
    <Container>
      <ComponentName>No PropTypes found</ComponentName>
    </Container>
  );
};

export default EmptyState;
