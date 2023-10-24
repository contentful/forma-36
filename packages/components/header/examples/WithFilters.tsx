import React from 'react';
import { TextInput } from '@contentful/f36-components';
import { Header } from '@contentful/f36-header';

export default function HeaderExample() {
  return (
    <Header
      title="Entries"
      filters={<TextInput size="small" placeholder="Search" />}
    />
  );
}
