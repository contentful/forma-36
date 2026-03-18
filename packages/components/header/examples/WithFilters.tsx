import React from 'react';
import { TextInput, Header } from '@contentful/f36-components';

export default function HeaderExample() {
  return (
    <Header
      title="Entries"
      filters={<TextInput size="small" placeholder="Search" />}
    />
  );
}
