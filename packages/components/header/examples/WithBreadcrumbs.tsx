import React from 'react';
import { Header } from '@contentful/f36-header';

export default function HeaderExample() {
  return (
    <Header
      title="Article"
      withBackButton={true}
      backButtonProps={{ onClick: () => console.log('back button click') }}
      breadcrumbs={[
        {
          content: 'Content Types',
          url: '#',
        },
      ]}
    />
  );
}
